<!DOCTYPE html><html><body><?php
header("Access-Control-Allow-Origin: http://theandroidmaster.github.io");

$filename = "count.txt";
if (!file_exists($filename)) {
  $myfile = fopen($filename, w);
  while(!$myfile) {
    $myfile = fopen($filename, w);
  }
  fclose($myfile);
}

$myfile = fopen($filename, r);
while(!$myfile) {
  $myfile = fopen($filename, r);
}
$txt = fread($myfile, filesize($filename));
fclose($txt);
$txt = $txt + 1;

$myfile = fopen($filename, w);
while(!$myfile) {
  $myfile = fopen($filename, w);
}
fwrite($myfile, $txt);
fclose($txt);
echo $txt;
?></body></html>
