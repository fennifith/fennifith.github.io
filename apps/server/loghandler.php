<!DOCTYPE html>
<html>
<body>

<?php
header("Access-Control-Allow-Origin: http://theandroidmaster.github.io");

$filename = $_GET["fchat"];
if (empty($filename)) {
 $filename = "log";
}

if (empty($_SESSION[$filename])) {
 session_start();
}

$contents = fread($myoldfile, filesize($filename));
$myfile = fopen($filename, "w");
if (!empty($_GET["fcontent"])) {
 $txt = $_GET["fname"] . ": " . $_GET["fcontent"] . "<br>" . $_SESSION[$filename];
 if (strlen($txt) > 1000) $txt = substr($txt, 0, 1000) . "<br>...";
 $_SESSION[$filename] = $txt;
}

echo $txt;
?>

</body>
</html>
