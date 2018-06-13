<?php

    header('Access-Control-Allow-Origin: *');

    $servername = "mysql.cba.pl";
    $username = "aplikacjewebowe";
    $password = "Webowe2018";
    $db = "weboweaplikacje";
    // Create connection
    $conn = new mysqli ( $servername, $username, $password, $db);

    if ($conn->connect_error) {
        die("Connection failed: " . "Try again alter");
    }    

    $sql = "SHOW COLUMNS FROM questResults";
    
    $result = $conn->query($sql);
    $i=0;
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $question_array[$i]=$row["Field"];
            $i++;
        }
    } else {
        echo "0 results";
    }

    $qty = $_POST['answers'];

    $sql="SELECT COUNT(id) FROM questResults";
    $count = $conn->query($sql);
    // $count = $count->fetch_assoc();
    if ($count->num_rows > 0) {
        $row = $count->fetch_assoc();
        $sql="INSERT INTO questResults (id) VALUES (".$row["COUNT(id)"].")";
        $conn->query($sql);
    } else {
        echo 'Error';
    }

    $i=0;

    foreach($qty as $value) {
        $sql="UPDATE questResults SET ".$question_array[$i]." = '".$value."' WHERE id = ".$row["COUNT(id)"];
       
        $conn->query($sql);
        $i++;
    } 

    $conn->close();
?>