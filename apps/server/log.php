<!DOCTYPE html><html><body><?php
header("Access-Control-Allow-Origin: http://theandroidmaster.github.io");

$name = htmlspecialchars($_GET["user"]);
$delete = $_GET["delete"];
$filename = "users.txt";

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

$users = fread($myfile, filesize($filename));
fclose($myfile);

if ($delete == "yes") {
  if (strpos($users, $name) !== false) {
    $users = str_replace($users, $name . "<br>", "");
    
    $myfile = fopen($filename, w);
    while(!$myfile) {
      $myfile = fopen($filename, w);
    }
    fwrite($myfile, $users);
    fclose($myfile);
  }
} else {
  echo $users;
  if (strpos($users, $name) == false) {
    $users = $name . "<br>" . $users;
    $myfile = fopen($filename, w);
    while(!$myfile) {
      $myfile = fopen($filename, w);
    }
    fwrite($myfile, $users);
    fclose($myfile);
  }
}
?></body></html>
