<?php

namespace App\Tags;

use Statamic\Tags\Tags;

class DynamicToken extends Tags
{
    /**
     * The {{ dynamic_token }} tag.
     * Inserts JS which will add tokens to all forms that have an input with `name="_token"`.
     * Refresh the token every 15 minutes.
     * @return string
     */
    public function index()
    {
        $route = '/!/DynamicToken/refresh';
        $selector = 'form.form-self input[name="_token"]';
        $minutes = 15;

        return "
            <script>
                // identify one of our own forms
                var form = document.querySelector('.form-self');
                if (form) {
                    var formURL = new URL(form.action);
                    var formOrigin = formURL.origin
                    var tokenURL = formOrigin + '{$route}';

                    var hiddenInputs = document.querySelectorAll('{$selector}');
                    if (hiddenInputs.length) {
                        function httpGetAsync(theUrl, callback) {
                            var xmlHttp = new XMLHttpRequest();
                            xmlHttp.onreadystatechange = function() {
                            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                                try {
                                    var token = JSON.parse(xmlHttp.responseText);
                                    console.log('token', token.csrf_token);
                                    callback((token || {}).csrf_token);
                                } catch (err) {
                                    console.log('Error parsing token', err);
                                }
                            };
                            xmlHttp.open('GET', theUrl, true); // true for asynchronous
                            xmlHttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                            xmlHttp.send(null);
                        }
                        function setToken(token) {
                            document
                            .querySelectorAll('{$selector}')
                            .forEach(function(item) {
                                item.value = token;
                            });
                        }
                        function updateToken() {
                            httpGetAsync(tokenURL, setToken);
                        }
                        updateToken();
                        setInterval(updateToken, {$minutes} * 60 * 1000);
                    }
                }
            </script>
        ";
    }
}
