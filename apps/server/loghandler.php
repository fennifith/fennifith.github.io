<!DOCTYPE html>
<html>
<body>

<?php
 header("Access-Control-Allow-Origin: http://theandroidmaster.github.io");

$filename = "log.txt";

$myfile = fopen($filename, "w"); /* or die("error retrieving message");*/

if ($myfile) {
  $contents = fread($myfile, filesize($filename));
  $txt = $_GET["fname"] . ": " . $_GET["fcontent"] . "<br\>" . $contents;
  fwrite($myfile, $txt);
  fclose($myfile);

  echo $txt;
} else {
  echo 'Could not open file.';
}

?>

</body>
</html>
