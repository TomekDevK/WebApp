<?php

    header('Access-Control-Allow-Origin: *');

    $qty = $_POST['answers'];

    foreach($qty as $value) {

        echo $value . "<br>";

    }
?>