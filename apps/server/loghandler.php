<!DOCTYPE html>
<html>
<body>

<?php
 header("Access-Control-Allow-Origin: http://theandroidmaster.github.io");
 
 echo "Loading...";

$name = htmlspecialchars($_POST["fname"]);
$content = htmlspecialchars($_POST["fcontent"]);
echo '<br/>$name:<br/>' . $_POST["fname"] . '<br/>';
echo '<br/>$content:<br/>' . $_POST["fcontent"] . '<br/>';
$filename = "log.txt";

$myfile = fopen($filename, "w"); /* or die("error retrieving message");*/

if ($myfile) {
  $contents = "junk"; /*fread($myfile, filesize($filename));*/
  $txt = $name . ": " . $content . "\n" . $contents;
  fwrite($myfile, $txt);
  fclose($myfile);

  echo $txt;
} else {
  echo 'could not open file <br/>';
}

?>

</body>
</html>
