<?php
        header('Content-Type:application/json;charset=UTF-8');
        $bType=$_REQUEST['bType'];
        require('init.php');
        $sql="SELECT * FROM banner WHERE bType='$bType'";
        $result=mysqli_query($conn,$sql);
        $list=mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($list);
