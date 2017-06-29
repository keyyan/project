<?php
        header('Content-Type:application/json;charset=UTF-8');
        @$did=$_REQUEST['did'];
        require('init.php');
        $sql="DELETE FROM cart_detail WHERE did='$did'";
        $result=mysqli_query($conn,$sql);
        if($row){
            echo '{"msg":"succ"}';
        }else{
            echo '{"msg":"err"}';
        }
