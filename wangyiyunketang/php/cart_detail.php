<?php
    header('Content-Type: application/json;charset=UTF-8');
    $account=$_REQUEST['account'];
    require('init.php');

    $sql="SELECT uid FROM user WHERE account='$account'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    if($row){
        $uid=$row[0];
    }else{
        echo '{"msg":"err"}';
    }
    $sql="SELECT cid FROM cart WHERE userId='$uid'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    if($row){
        $cid=$row[0];
    }else{
        echo '{"msg":"noCart"}';
    }

    $sql="SELECT bid,bPic,bClass,bPrice,bPro,did FROM banner,cart_detail WHERE bid=productId AND cartId='$cid' ORDER BY did DESC";
    $result=mysqli_query($conn,$sql);
    $list=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($list);

