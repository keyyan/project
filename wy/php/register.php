<?php
        header('Content-Type:application/json;charset=UTF-8');
        $account=$_REQUEST['account'];
        $password=$_REQUEST['password'];
        require('init.php');
        $sql="SELECT * FROM user WHERE account='$account'";
        $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_row($result);
        if(!$row){
            $sql="INSERT INTO user VALUES(NULL,'$account','$password')";
            mysqli_query($conn,$sql);
            echo '{"msg":"succ"}';
        }else{
            echo '{"msg":"hasRegister"}';
        }

