<?php
        header('Content-Type:application/json;charset=UTF-8');
        $bPage=$_REQUEST['bPage'];
        $bid=$_REQUEST['bid'];
        require('init.php');
        $sql="SELECT * FROM banner WHERE bPage='$bPage' AND bid='$bid'";
        $result=mysqli_query($conn,$sql);
        $list=mysqli_fetch_all($result,MYSQLI_ASSOC)[0];
        echo json_encode($list);
