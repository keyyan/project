
$('.login>a').click(function(){
    $(this).addClass("active");
    $(this).siblings('a.active').removeClass("active");
});
$('.phone_btn').click(function(){
   $('.mail').css('display','none');
   $('.phone').css('display','block');
});
$('.mail_btn').click(function(){
   $('.phone').css('display','none');
   $('.mail').css('display','block');
});
$('.register_into').click(function(){
   $('.login_container').css('display','none');
   $('.register_container').css('display','block');
});
//$('.into_login').click(function(){
//   $('.login_container').css('display','block');
//   $('.register_container').css('display','none');
//});
$('.pic_login').click(function(){
    $('.login_container').css('display','none');
    $('.pic').css('display','block');
});
$('.return_login').click(function(){
    $('.login_container').css('display','block');
    $('.pic').css('display','none');
});
//**********************注册**********************
$('.mail_phone input[type="text"]').blur(function(){
    var reg1=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
    var reg2=/^[1][358][0-9]{9}$/;
    var account=$(this).val();
    if(!reg1.test(account)&&account!==""){
        if(!reg2.test(account)&&account!==""){
            $('.reg_words1 i').html('格式错误').css('color','#e4393a');
        }else if(account==""||reg2.test(account)){
            $('.reg_words1 i').html("");
        }
    }else if(account==""||reg1.test(account)){
        $('.reg_words1 i').html("");
    }
});
$('.psd input[type="password"]').blur(function(){
    var reg=/\w{6,8}/g;
    var psd=$(this).val();
    if(!reg.test(psd)&&psd!==""){
        $('.reg_words2 i').html('密码错误').css('color','#e4393a');
    }else{
        $('.reg_words2 i').html("");
    }
});
$('.affirm_psd input[type="password"]').blur(function(){
    var prevPsd=$('.psd input[type="password"]').val();
    var psd=$(this).val();
    if(prevPsd!==psd&&psd!==""){
        $('.reg_words3 i').html('密码错误').css('color','#e4393a')
    }else if(prevPsd==psd){
        $('.reg_words3 i').html("");
    }
});
$('.getPsd').click(function(){
    var n=Math.floor(Math.random()*(90000)+10000);
    $(this).html(n);
});
$('.reg input[type="text"]').blur(function(){
    var psd=$('.getPsd').html();
    var inPsd=$(this).val();
    if(inPsd!==psd&&inPsd!==""){
        $('.reg_words4 i').html('验证码错误').css('color','#e4393a')
    }else if(inPsd==psd){
        $('.reg_words4 i').html("");
    }
});
$('.into_login').click(function(e){
    e.preventDefault();
    var account=$('.mail_phone input[type="text"]').val();
    var password=$('.psd input[type="password"]').val();
    var affirmPsd=$('.affirm_psd input[type="password"]').val();
    var reg=$('.reg input[type="text"]').val();
    var prereg=$('.getPsd').html();
    var reg1=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
    var reg2=/^[1][358][0-9]{9}$/;
    var reg3=/\w{6,8}/g;
    if(account===""){
        $('.reg_words1 i').html('内容不能为空').css('color','#e4393a');
    }else if(!reg1.test(account)){
        if(!reg2.test(account)){
            $('.reg_words1 i').html('格式错误').css('color','#e4393a');
        }else if(reg2.test(account)){
            $('.reg_words1 i').html("");
        }
    }
    if(reg1.test(account)){
        $('.reg_words1 i').html("");
    }else if(password===""){
        $('.reg_words2 i').html('内容不能为空').css('color','#e4393a');
    }else if(!reg3.test(password)){
        $('.reg_words2 i').html('密码错误').css('color','#e4393a');
    }else if(reg3.test(password)){
        $('.reg_words2 i').html("");
    }
    if(affirmPsd===""){
        $('.reg_words3 i').html('内容不能为空').css('color','#e4393a');
    }else if(affirmPsd!==password){
        $('.reg_words3 i').html('密码错误').css('color','#e4393a');
    }else if(affirmPsd===password){
        $('.reg_words3 i').html("");
    }
    if(reg===""){
        $('.reg_words4 i').html('内容不能为空').css('color','#e4393a');
    }else if(reg!==prereg){
        $('.reg_words4 i').html('密码错误').css('color','#e4393a');
    }else if(reg===prereg){
        $('.reg_words4 i').html("");
    }
    if((reg1.test(account)||reg2.test(account))&&reg3.test(password)&&affirmPsd===password&&reg===prereg){
        $.ajax({
            type:'POST',
            url:'php/register.php',
            data:{account:account,password:password},
            success:function(row){
                console.log(row);
                if(row.msg=='hasRegister'){
                    $('.reg_words5 i').html('已经注册，请直接登录！').css('color','#e4393a');
                }else{
                    $('.reg_words5 i').html('注册成功').css('color','#e4393a');
                }
            }
        });
    }
});
//******************************登录********************************
$('.password input').focus(function(){
    $(this).attr('placeholder','6-8位数字');
});
$('.password input').blur(function(){
    $(this).attr('placeholder','密码');
});
    var reg2=/^[1][358][0-9]{9}$/;
    var reg3=/\w{6,8}/g;
    $('.phone .account input[type="text"]').blur(function() {
        var account=$(this).val();
        if (account === ""){
            $('.text_phone i').html('内容不能为空').css('color', '#e4393a');
        }else if(!reg2.test(account)&&account!==""){
            $('.text_phone i').html('手机号格式错误').css('color','#e4393a');
        }else {
            $('.text_phone i').html("");
        }
    });
    $('.password input[type="password"]').blur(function(){
        var password=$(this).val();
        if(password===""){
            $('.password i').html('内容不能为空').css('color','#e4393a');
        }else if(!reg3.test(password)&&password!==""){
            $('.password i').html('密码为6-8位数字').css('color','#e4393a');
        }else{
            $('.password i').html("");
        }
    });
    $('.phone .login_into').click(function(e){
        e.preventDefault();
    var account=$('.text_phone input[type="text"]').val();
    var password=$('.password input[type="password"]').val();
    if(true){
        $.ajax({
            type:'POST',
            url:'php/login.php',
            data:{account:account,password:password},
            success:function(row){
                if(row==='hasRegister'){
                    location.href="wangyiyun_index.html";
                    sessionStorage.setItem('account',account);
                }else if(row=='noRegister'){
                    $('.text_phone i').html('用户或密码错误').css('color', '#e4393a');
                }
            },
            error:function(){
                alert("erro");
            }
        });
    }
});
//$('.login_into').click(function(e) {
//    e.preventDefault();
//    var account = $('.account input[type="text"]').val();
//    var password = $('.password input[type="password"]').val();
//    if($('.mail_btn').hasClass('active')){
//        if (account === ""){
//            $('.text_mail i').html('内容不能为空').css('color', '#e4393a');
//        }
//    }else if ($('.phone_btn').hasClass('active')) {
//        if (account === ""){
//            $('.text_phone i').html('内容不能为空').css('color', '#e4393a');
//        }
//    }
//    if (password === ""){
//        $('.password i').html('密码不能为空').css('color', '#e4393a');
//    }
//    if(account!==""&&password!==""){
//        $.ajax({
//            type: 'GET',
//            url: 'php/login.php',
//            data: {account: account, password: password},
//            success: function (row) {
//                var importAccount = row[1];
//                var importPassword = row[2];
//                    if (!importAccount) {
//                        $('.text_mail i').html('此邮箱未注册，请先注册').css('color', '#e4393a');
//                    }
//                    else if ($('.phone_btn').hasClass('active')) {
//                        if (!importAccount) {
//                            $('.text_phone i').html('此手机号未注册，请先注册').css('color', '#e4393a');
//                        }
//                    }
//                    if (!importPassword) {
//                        $('.password i').html('密码不正确，请重新输入').css('color', '#e4393a');
//                    }
//                if (account === importAccount && password === importPassword){
//                    $('.login_into').attr('href', 'wangyiyun_index.html');
//                }
//                //var importAccount = row[1];
//                //var importPassword = row[2];
//                console.log(importAccount);
//                console.log(importPassword);
//                //if ($('.mail_btn').hasClass('active')) {
//                //    if (account !== importAccount) {
//                //        $('.text_mail i').html('此邮箱未注册，请先注册').css('color', '#e4393a');
//                //    } else if (account === importAccount) {
//                //        $('.text_mail i').html("");
//                //    }
//                //} else if ($('.phone_btn').hasClass('active')) {
//                //    if (account !== importAccount) {
//                //        $('.text_phone i').html('此手机号未注册，请先注册').css('color', '#e4393a');
//                //    } else if (account === importAccount) {
//                //        $('.text_phone i').html("");
//                //    }
//                //}
//                //if (password !== importPassword) {
//                //    $('.password i').html('密码不正确，请重新输入').css('color', '#e4393a');
//                //} else if (password === importPassword) {
//                //    $('.password i').html("");
//                //}
//                if (account === importAccount && password === importPassword) {
//                    $('.login_into').attr('href', 'wangyiyun_index.html');
//                }
//            }
//        });
//    }
//});