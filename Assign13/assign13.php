<?php

$registrations = fopen("data/registrations.txt", "a+");
$dataReceived = $_REQUEST["q"];
$string = strval($dataReceived) . "\n";
fwrite($registrations, $string );
?>