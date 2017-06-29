<?php
    $db_url=SAE_MYSQL_HOST_M;
	$db_user=SAE_MYSQL_USER;
	$db_pwd=SAE_MYSQL_PASS;
	$db_dbname=SAE_MYSQL_DB;
	$db_port=SAE_MYSQL_PORT;
	$conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_dbname,$db_port);
