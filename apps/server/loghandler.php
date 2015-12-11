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

if (!$myoldfile) {
 fclose($myoldfile);
 $myfile = fopen($filename, a);
 while(!$myfile) {
  $myfile = fopen($filename, a);
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
$fcontent = htmlspecialchars($_GET["fcontent"]);

if (empty($fcontent)) {
 $txt = $contents;
} else {
 date_default_timezone_set('America/New_York');
 if ($fcontent == "joined the chat" || $fcontent == "left the chat") {
  $txt =  date('Y-m-d H:i:s') . ": " . $fname . " " . $fcontent . "<br>" . $contents;
 } else {
  
  //put markdown here
  if (strpos($fcontent, "/bold ") !== false) {
   $fcontent = "<b>" . str_replace("/bold ", "", $fcontent) . "</b>";
  }
  
  //colors
  if (strpos($fcontent, "/red ") !== false) {
   $fcontent = "<p style=\"color:red;\">" . str_replace("/red ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/orange ") !== false) {
   $fcontent = "<p style=\"color:orange;\">" . str_replace("/orange ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/yellow ") !== false) {
   $fcontent = "<p style=\"color:yellow;\">" . str_replace("/yellow ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/green ") !== false) {
   $fcontent = "<p style=\"color:green;\">" . str_replace("/green ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/blue ") !== false) {
   $fcontent = "<p style=\"color:blue;\">" . str_replace("/blue ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/purple ") !== false) {
   $fcontent = "<p style=\"color:purple;\">" . str_replace("/purple ", "", $fcontent) . "</p>";
  }
  
  //images
  if (strpos($fcontent, "/img ") !== false) {
   $fcontent = "<img src=\"" . str_replace("/img ", "", $fcontent) . "\"></img>";
  }
  
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
