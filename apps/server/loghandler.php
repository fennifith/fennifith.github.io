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

$fname = htmlspecialchars($_GET["fname"]);
$fcontent = $_GET["fcontent"];

$b = $fcontent.split("*")
if (sizeof($b) < 1 && sizeof($b) % 2 !== 0) {
 $fcontent = "";
 
 for ($x = 0; $x < sizeof($b); $x++) {
  
  if ($x % 2 == 0) {
   $fcontent += htmlspecialchars(str_replace('*', '', $b[$x]));
   if ($x !== (sizeof($b) - 1)) $fcontent += '<b>';
   
  } else {
   $fcontent += htmlspecialchars(str_replace('*', '</b>', $b[$x]));
   $fcontent += '</b>';
  }
 }
}


if (empty($fcontent)) {
 $txt = $contents;
} else {
 date_default_timezone_set('America/New_York');
 if ($fcontent == "joined the chat" || $fcontent == "left the chat") {
  $txt =  date('Y-m-d H:i:s') . ": " . $fname . " " . $fcontent . "<br>" . $contents;
 } else {
  $txt = $fname . " - " . date('Y-m-d H:i:s') . ": " . $fcontent . "<br>" . $contents;
 }
}

if (strlen($txt) > 10000) $txt = substr($txt, 0, 10000) . "<br>...";
fwrite($myfile, $txt);
fclose($myfile);

echo $txt;
?>
</body>
</html>
