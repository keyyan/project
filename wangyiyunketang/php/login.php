<?php
        header('Content-Type:text/plain;charset=UTF-8');
        $account=$_REQUEST['account'];
        $password=$_REQUEST['password'];
        require('init.php');
        $sql="SELECT * FROM user WHERE account='$account' AND password='$password'";
        $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_row($result);
        if(!$row){
            echo 'noRegister';
        }else{
            echo 'hasRegister';
        }
