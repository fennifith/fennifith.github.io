<!DOCTYPE html>
<html>
<body>

<?php
 header("Access-Control-Allow-Origin: http://theandroidmaster.github.io");
 
 echo "Loading..."

$name = htmlspecialchars($_POST["fname"]);
$content = htmlspecialchars($_POST["fcontent"]);

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
