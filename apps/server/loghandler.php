<!DOCTYPE html>
<html>
<body>

<?php
 header("Access-Control-Allow-Origin: http://theandroidmaster.github.io/apps/server/#!/apps/server/");

$name = $_POST["fname"];
$content = $_POST["fcontent"];

$filename = "log.txt";

$myfile = fopen($filename, "w") or die("error retrieving message");
$contents = fread($myfile, filesize($filename));
$txt = $name . ": " . $content . "
" . $contents;
fwrite($myfile, $txt);
fclose($myfile);

echo $txt;
?>

</body>
</html>
