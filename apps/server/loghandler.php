<!DOCTYPE html>
<html>
<body>

<?php
header("Access-Control-Allow-Origin: http://theandroidmaster.github.io");

$filename = $_GET["fchat"];
if (!$filename) {
 $filename = "log.txt;"
}

$myoldfile = fopen($filename, "r");

if (!$myoldfile) {
 fclose($myoldfile);
 $myfile = fopen($filename, w);
 fclose($myfile);
 $myoldfile = fopen($filename, "r");
}

$contents = fread($myoldfile, filesize($filename));
fclose($myoldfile);
$myfile = fopen($filename, "w");
$txt = $_GET["fname"] . ": " . $_GET["fcontent"] . "<br>" . $contents;
fwrite($myfile, $txt);
fclose($myfile);

if ($_GET["fname"] == "delete") {
 unlink($filename)
}

echo $txt;
?>

</body>
</html>
