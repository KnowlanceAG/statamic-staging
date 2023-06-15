<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\App;
use Statamic\Facades\GlobalSet;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Client\RequestException;

class AIDetector extends Controller
{

    private $configuration;

    public function __construct()
    {
        $this->configuration = GlobalSet::findByHandle('ai_detect_configuration')->fileData()['data'];
    }

    private function verifyTurnstile($data)
    {
        $turnStileVerificationUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
        $data['secret'] = config('app.turnstile_secret');

        $query = http_build_query($data);
        $options = array(
            'http' => array(
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n" .
                    "Content-Length: " . strlen($query),
                'method' => 'POST',
                'content' => $query
            )
        );

        $stream = stream_context_create($options);

        $result = file_get_contents(
            $turnStileVerificationUrl,
            false,
            $stream
        );

        $responseKeys = json_decode($result, true);

        Log::debug('responseKeys', $responseKeys);

        if (intval($responseKeys["success"]) !== 1) {
            Log::debug('spammer?');
            return array(
                'success' => false
            );
        } else {
            Log::debug('passed!');
            return array(
                'success' => true
            );
        }
    }

    // public function turnstile(Request $request)
    // {
    //     Log::debug('turnstile: start verification');

    //     if (!$request->turnstileResponse) {
    //         Log::debug('turnstile: missing response');
    //         return response(json_encode(array('error' => 'missing response')), 400);
    //     }

    //     Log::debug('turnstile entering with response: ' . $request->turnstileResponse);

    //     $data = array(
    //         'response' => $request->turnstileResponse,
    //         'remoteip' => $_SERVER['REMOTE_ADDR'],
    //         'idempotency_key' => $request->idempotencyKey ?? false
    //     );

    //     $verificationResult = $this->verifyTurnstile($data);

    //     return response()->json($verificationResult);
    // }

    public function query(Request $request)
    {

        if (!$request->turnstileResponse) {
            Log::debug('aidetect: missing token');
            return response(json_encode(array('error' => 'missing token')), 400);
        }

        $data = array(
            'response' => $request->turnstileResponse,
            'remoteip' => $_SERVER['REMOTE_ADDR'],
            // 'idempotency_key' => $request->idempotencyKey ?? uniqid()
        );

        $verificationResult = $this->verifyTurnstile($data);
        Log::debug('verificationResult', $verificationResult);

        if ($verificationResult['success'] === false) {
            Log::debug('aidetect: unprivileged access');
            return response(json_encode(array('error' => 'unprivileged access')), 401);
        }

        return response()->json([
            "answer" => "<b>Warnung: Dieser AI Detektor basiert auf experimenteller AI, die sich zum aktuellen Zeitpunkt noch im Entwicklungsstadium befindet. Falsch-Positve oder Falsch-Negative Testergebnisse sind daher leider noch häufig. Durch das Verwenden des Tools und die Äußerung objektiven Feedbacks helfen Sie uns, das Tool stetig zu verbessern und verlässlichere Ergebnisse zu liefern. </b><p></p><b>Text höchstwahrscheinlich durch AI erstellt</b>"
        ]);

        if (!($request->text)) {
            Log::debug('aidetect: missing text');
            return response(json_encode(array('error' => 'missing text')), 400);
        }

        $length = strlen($request->text);

        if ($length < 500 || $length > 5000) {
            return response(json_encode(array('error' => 'text length does not match')), 400);
        }

        $text = strip_tags($request->text);

        $wordcount = str_word_count($text);
        if ($wordcount < 100) {
            return response(json_encode(array('error' => 'word count should be 100 at minimum')), 400);
        }

        $jsonData = json_encode(array(
            "content" => $text
        ));

        $ch = curl_init($this->configuration['api_url']);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'X-OAI-API-KEY: o09w13h5daiulj4bfk2z76yq8sepvcgr'
            // 'X-OAI-API-KEY:' . $this->configuration['api_key']
        ));
        $response = curl_exec($ch);
        curl_close($ch);
        $result = json_decode($response);

        if (isset($result->error)) {
            Log::error('aidetect: response error: ' . $result->error);
            return response(json_encode(array(
                "error" => $result->error
            )), 500);
        }

        if (!isset($result->score)) {
            Log::error('aidetect: response does not have score');
            return response(json_encode(array(
                "error" => 'server error: response does not have score'
            )), 500);
        }


        $procent = $result->score->ai * 100;

        $answer1 = "<b>Warnung: Dieser AI Detektor basiert auf experimenteller AI, die sich zum aktuellen Zeitpunkt noch im Entwicklungsstadium befindet. Falsch-Positve oder Falsch-Negative Testergebnisse sind daher leider noch häufig. Durch das Verwenden des Tools und die Äußerung objektiven Feedbacks helfen Sie uns, das Tool stetig zu verbessern und verlässlichere Ergebnisse zu liefern. </b><p></p><b>Text höchstwahrscheinlich durch AI erstellt</b> - Der AI-Score Ihres Texts beträgt " . $procent . "%. Dies bedeutet, dass laut der Einschätzung unseres Tools Ihr Text mit einer Wahrscheinlichkeit von " . $procent . "% durch eine AI verfasst wurde. Das Ergebnis sagt dahingegen nicht aus, dass " . $procent . "% Ihres Texts durch AI erstellt wurden.";
        $answer2 = "Warnung: Dieser AI Detektor basiert auf experimenteller AI, die sich zum aktuellen Zeitpunkt noch im Entwicklungsstadium befindet. Falsch-Positve oder Falsch-Negative Testergebnisse sind daher leider noch häufig. Durch das Verwenden des Tools und die Äußerung objektiven Feedbacks helfen Sie uns, das Tool stetig zu verbessern und verlässlichere Ergebnisse zu liefern. <b> <p></p> AI wahrscheinlich für Recherche oder Bearbeitung genutzt</b> - Der AI-Score Ihres Texts beträgt " . $procent . "%. Dies bedeutet, dass laut der Einschätzung unseres Tools Ihr Text mit einer Wahrscheinlichkeit von " . $procent . "% durch eine AI verfasst wurde. Das Ergebnis sagt dahingegen nicht aus, dass " . $procent . "% Ihres Texts durch AI erstellt wurden.";
        $answer3 = "<b>Text höchstwahrscheinlich durch Menschen erstellt</b> - Der AI-Score Ihres Texts beträgt " . $procent . "%. Dies bedeutet, dass laut der Einschätzung unseres Tools Ihr Text mit einer Wahrscheinlichkeit von " . $procent . "% durch eine AI verfasst wurde. Das Ergebnis sagt dahingegen nicht aus, dass " . $procent . "% Ihres Texts durch AI erstellt wurden. ";

        if (!$result->success) {
            Log::error('aidetect: server error', (array) $result);
            return response(json_encode(array('error' => 'server error')), 500);
        }

        $answer = '';
        if ($result->score->ai > 0.75) $answer = $answer1;
        if (($result->score->ai < 0.5) && ($result->score->ai > 0.25)) $answer = $answer2;
        if ($result->score->ai < 0.5) $answer = $answer3;

        Log::debug('Returning answer: ' . $answer);

        return response()->json([
            "answer" => $answer
        ]);
    }
}
