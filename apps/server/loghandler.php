<!DOCTYPE html><html><body><?php
header("Access-Control-Allow-Origin: http://theandroidmaster.github.io");

$filename = $_GET["fchat"];

if (empty($filename)) {
 $filename = "log";
}

$filename = $filename . ".txt";

if (!file_exists($filename)) {
 $myfile = fopen($filename, w);
 while(!$myfile) {
  $myfile = fopen($filename, w);
 }
 fclose($myfile);
}

$myoldfile = fopen($filename, "r");
while (!$myoldfile) {
 $myoldfile = fopen($filename, "r");
}

$contents = fread($myoldfile, filesize($filename));
fclose($myoldfile);

$fname = htmlspecialchars($_GET["fname"]);
$fcontent = htmlspecialchars($_GET["fcontent"]);

if (empty($fcontent)) {
 $txt = $contents;
} else {
 $myfile = fopen($filename, "w");
 while(!$myfile) {
  $myfile = fopen($filename, "w");
 }
 
 if ($fcontent == "joined the chat" || $fcontent == "left the chat") {
  $txt = "! " . date('Y-m-d H:i:s') . " &-:-& " . $fname . " " . $fcontent . "<br>";
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
   $fcontent = "<a href=\"" . $fcontent ."\">" . $fcontent . "</a>";
  }
  
  $color = "#212121";
  $ip = $_GET["request"];
  switch($ip) {
   case 0 :
    $color = "#f44336";
    break;
   case 1 :
    $color = "#2196f3";
    break;
   case 2 :
    $color = "#009688";
    break;
   case 3 :
    $color = "#43a047";
    break;
   case 4 :
    $color = "#ff5722";
    break;
   case 5 :
    $color = "#607d8b";
    break;
   case 6 :
    $color = "#3f51b5";
    break;
   case 7 :
    $color = "#689f38";
    break;
   case 8 :
    $color = "#ef6c00";
    break;
   case 9 :
    $color = "#263238";
    break;
  }
  
  $txt = $fname . " - " . date('Y-m-d H:i:s') . " &-:-& " . $fcontent . " &-:-& " . $color . "<br>";
 }
 if (strlen($txt) > 1000) $txt = substr($txt, 0, 10000) . "<br>...";
 fwrite($myfile, $txt);
 fclose($myfile);
}

echo $txt;
?></body></html>
