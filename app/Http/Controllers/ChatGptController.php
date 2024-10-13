<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Facades\GlobalSet;
use GuzzleHttp\Client;

class ChatGptController extends Controller
{
    public function handle(Request $request)
    {
        // Retrieve OpenAI settings from Statamic Globals
        $openaiSettings = GlobalSet::findByHandle('openai_settings')->inCurrentSite()->toArray();
        $apiKey = $openaiSettings['api_key'] ?? config('statamic.sites.openai.api_key');
        $apiUrl = $openaiSettings['api_url'] ?? config('statamic.sites.openai.api_url');

        // Process form data and make API request as before
        $data = $request->all();
        $userMessage = $data['userMessage'] ?? '';
        $mode = $data['mode'] ?? 'Paragraph';
        $length = $data['length'] ?? '3';
        $language = $data['language'] ?? 'English';
        $toneOfVoice = $data['toneOfVoice'] ?? 'Normal';
        $synonyms = $data['synonyms'] ?? 'No';
        $action = $data['action'] ?? 'Summarize';
        $question = $data['question'] ?? '';

        // Calculate characters based on length
        $characters = ($length * 20);

        // Determine the prompt
        switch ($action) {
            case 'Question':
                $prompt = "Answer the following question {$question} for text: {$userMessage}. If the question is not about the text, say that question is not relevant to the text.";
                break;
            case 'Translate':
                $prompt = "Translate the following text into {$language} using a {$toneOfVoice} tone of voice. You should ({$synonyms}) use synonyms: {$userMessage}.";
                break;
            case 'Summarize':
            default:
                $prompt = "Summarize the following text. The length of the summarized output should be almost exactly {$characters} characters of the length of my input text in terms of character count. Utilize a {$toneOfVoice} tone of voice in the {$language} language. You should ({$synonyms}) use synonyms. Format your output using {$mode} for text: {$userMessage}.";
                break;
        }

        // API request
        $client = new Client();
        $response = $client->post($apiUrl, [
            'headers' => [
                'Authorization' => "Bearer {$apiKey}",
                'Content-Type' => 'application/json',
            ],
            'json' => [
                'model' => 'gpt-4',
                'messages' => [
                    ['role' => 'system', 'content' => 'You are a helpful assistant.'],
                    ['role' => 'user', 'content' => $prompt],
                ],
            ],
        ]);

        $responseData = json_decode($response->getBody()->getContents(), true);
        $chatGptResponse = $responseData['choices'][0]['message']['content'] ?? 'API request failed or returned no text.';

        // Return JSON response
        return response()->json(['response' => $chatGptResponse]);
    }
}
