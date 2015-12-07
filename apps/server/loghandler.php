<!DOCTYPE html>
<html>
<body>

<?php
 header("Access-Control-Allow-Origin: http://theandroidmaster.github.io");

$filename = "log.txt";

$myoldfile = fopen($filename, "r");

if ($myoldfile) {
  $contents = fread($myoldfile, filesize($filename));
  fclose($myoldfile);
  $myfile = fopen($filename, "w");
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
