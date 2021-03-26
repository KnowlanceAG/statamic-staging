<?php

    namespace App\Providers\Custom;

    use Illuminate\Support\Facades\Log;

    class CustomValidator extends \Illuminate\Validation\Validator
    {
        public function validateAustriaMail($attribute, $value, $parameters)
        {
            return !preg_match('/\.at$/i', $value);
        }
        public function validateAustriaPhone($attribute, $value, $parameters)
        {
            return !preg_match('/(\+43)|(0043)/i', $value);
        }
    }
?>
