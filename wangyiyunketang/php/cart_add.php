<?php
        header('Content-Type:application/json;charset=UTF-8');
        @$account=$_REQUEST['account'];
        @$bid=$_REQUEST['bid'];
        require('init.php');
        $sql="SELECT uid FROM user WHERE account='$account'";
        $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_row($result);
        if($row){
            $uid=$row[0];
        }else{
            die('{"msg":"noRegister"}');
        }
        $sql="SELECT cid FROM cart WHERE userId='$uid'";
        $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_row($result);
        if($row){
            $cid=$row[0];
        }else{
            $sql="INSERT INTO cart VALUES(NULL,'$uid')";
            mysqli_query($conn,$sql);
            $cid=mysqli_insert_id($conn);
        }
        $sql="SELECT did FROM cart_detail WHERE cartId='$cid' AND productId='$bid'";
        $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_row($result);
        if(!$row){
            $sql="INSERT INTO cart_detail VALUES(NULL,'$cid','$bid')";
            mysqli_query($conn,$sql);
        }else{
            $did = $row[0];
        }
        echo '{"msg":"succ"}';
