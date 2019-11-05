<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$value1 = $_GET['value1'];
$value2 = $_GET['value2'];
$num = $value1*$value2;
echo '{response: '.$num.' }';

/* $url = 'https://yavgen999.github.io/?vk_access_token_settings=menu&vk_app_id=7187261&vk_are_notifications_enabled=0&vk_is_app_user=1&vk_is_favorite=1&vk_language=ru&vk_platform=mobile_web&vk_ref=other&vk_user_id=176481285&sign=4ZcH-ppLfaDP8UjyjteCzELRQO4OEzAEWShMD0ZLPlFA';
$client_secret = 'a0EymFdl5dAYonBS8Vg3'; //Защищённый ключ из настроек вашего приложения

$query_params = [];
parse_str(parse_url($url, PHP_URL_QUERY), $query_params); // Получаем query-параметры из URL

$sign_params = [];
foreach ($query_params as $name => $value) {
  if (strpos($name, 'vk_') !== 0) { // Получаем только vk параметры из query
    continue;
  }

  $sign_params[$name] = $value;
}

ksort($sign_params); // Сортируем массив по ключам 
$sign_params_query = http_build_query($sign_params); // Формируем строку вида "param_name1=value&param_name2=value"
$sign = rtrim(strtr(base64_encode(hash_hmac('sha256', $sign_params_query, $client_secret, true)), '+/', '-_'), '='); // Получаем хеш-код от строки, используя защищеный ключ приложения. Генерация на основе метода HMAC. 

$status = $sign === $query_params['sign']; // Сравниваем полученную подпись со значением параметра 'sign'

echo ($status ? 'ok' : 'fail')."\n"; */

?>