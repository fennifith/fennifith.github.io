<!DOCTYPE html>
<html>
<body>
<?php
header("Access-Control-Allow-Origin: http://theandroidmaster.github.io");

$filename = $_GET["fchat"];

if (empty($filename)) {
 $filename = "log";
}

$filename = $filename . ".txt";
$myoldfile = fopen($filename, "r");

if (empty($myoldfile)) {
 fclose($myoldfile);
 $myfile = fopen($filename, w);
 while(!$myfile) {
  $myfile = fopen($filename, w);
 }
 fclose($myfile);
 $myoldfile = fopen($filename, "r");
}

while (!$myoldfile) {
 $myoldfile = fopen($filename, "r");
}

$contents = fread($myoldfile, filesize($filename));
fclose($myoldfile);

$myfile = fopen($filename, "w");
while(!$myfile) {
 $myfile = fopen($filename, "w");
}

if (empty($_GET["fcontent"])) {
 $txt = $contents;
} else {
 $txt = $_GET["fname"] . ": " . $_GET["fcontent"] . "<br>" . $contents;
}
if (strlen($txt) > 1000) $txt = substr($txt, 0, 1000) . "<br>...";
fwrite($myfile, $txt);
fclose($myfile);

if ($_GET["fname"] == "delete") {
 unlink($filename);
}

echo $txt;
?>
</body>
</html>
