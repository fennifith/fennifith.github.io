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
$myfile = fopen($filename, "r");
while (!$myfile) {
 $myfile = fopen($filename, "r");
}
$oldcontents = fread($myfile, filesize($filename));
fclose($myfile);
echo $oldcontents;

$time = filemtime($filename);
while(true) {
 sleep(0.5);
 $myfile = fopen($filename, "r");
 while (!$myfile) {
  $myfile = fopen($filename, "r");
 }
 $contents = fread($myfile, filesize($filename));
 fclose($myfile);
 if ($oldcontents !== $contents) {
  $oldcontents = substr($oldcontents, 0, 20);
  $contents = substr($contents, 0, strpos($contents, $oldcontents));
  echo $contents;
 }
}

?></body></html>
