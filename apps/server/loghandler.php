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
   $fcontent = "<p style=\"color:#f44336;\">" . str_replace("/red ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/pink ") !== false) {
   $fcontent = "<p style=\"color:#e91e63;\">" . str_replace("/pink ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/purple ") !== false) {
   $fcontent = "<p style=\"color:#9c27B0;\">" . str_replace("/purple ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/indigo ") !== false) {
   $fcontent = "<p style=\"color:#3f51b5;\">" . str_replace("/indigo ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/blue ") !== false) {
   $fcontent = "<p style=\"color:#2196f3;\">" . str_replace("/blue ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/cyan ") !== false) {
   $fcontent = "<p style=\"color:#0097a7;\">" . str_replace("/cyan ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/teal ") !== false) {
   $fcontent = "<p style=\"color:#009688;\">" . str_replace("/cyan ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/green ") !== false) {
   $fcontent = "<p style=\"color:#43a047;\">" . str_replace("/green ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/lime ") !== false) {
   $fcontent = "<p style=\"color:#827717;\">" . str_replace("/lime ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/yellow ") !== false) {
   $fcontent = "<p style=\"color:#FBC02D;\">" . str_replace("/yellow ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/orange ") !== false) {
   $fcontent = "<p style=\"color:#ef6c00;\">" . str_replace("/orange ", "", $fcontent) . "</p>";
  }
  if (strpos($fcontent, "/brown ") !== false) {
   $fcontent = "<p style=\"color:#795548;\">" . str_replace("/brown ", "", $fcontent) . "</p>";
  }
  
  //images
  if (strpos($fcontent, "/img ") !== false) {
   $fcontent = "<img src=\"" . str_replace("/img ", "", $fcontent) . "\"></img>";
  }
  
  //links
  if (strpos($fcontent, "/link " ) !== false) {
   $fcontent = str_replace("/link ", "", $fcontent);
   $str = $fcontent;
   $str = trim(preg_replace('/\s+/', ' ', $str));
   preg_match("~<title>(.*?)</title>~", $str, $title);
   $fcontent = "<a href=\"" . $fcontent ."\">" . $title[1] . "</a>";
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
