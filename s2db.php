<!DOCTYPE html>
<html>

<body>
<?php  
require_once("config.php");
$con=mysqli_connect($host, $username,$password, $dbname);
$br1=intval($_GET['br1']);
$br2=intval($_GET['br2']);
$br3=intval($_GET['br3']);
$br4=intval($_GET['br4']);
$br5=intval($_GET['br5']);
$br6=intval($_GET['br6']);
if (!$con){
	die('Could not connect:'.mysqli_error($con));
}
$sql="INSERT INTO `numbers`( `br1`, `br2`, `br3`, `br4`, `br5`, `br6`) VALUES (".$br1.",".$br2.",".$br3.",".$br4.",".$br5.",".$br6.")";
//sad id od ovoga treba upisati u drugu tabelu tiketa
if($con->query($sql)===FALSE)
		echo "Problem sa upitom! ".$sql."<br>".$con->error;
$last_id=$con->insert_id;
$sql2="INSERT INTO `tiket`(`num_id`, `date_created`) VALUES (".$last_id.",CURRENT_TIMESTAMP())";
$con->query($sql2);
$con->close()

?>

</body>
</html>