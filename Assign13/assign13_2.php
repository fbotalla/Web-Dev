<?php
$registrations = fopen("data/registrations.txt", "r");
while(! feof($registrations)){
    $arr = explode(' ',trim(fgets($registrations)));
}
?>