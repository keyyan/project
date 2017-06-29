
$(".course").hover(function(){
    $(".fixed_block .color_block").css("display","block");
    $(".fixed_block").css("background","#fff");
    $(".fixed_block .lf_fixed a").css("color","#666");
    $(".fixed_block").siblings().hover(function(){
        $(".fixed_block").css("background","#49AF4F");
        $(".fixed_block .lf_fixed a").css("color","#fff");
    });
    $(".fixed_block").hover(function(){
        $(".fixed_block").css("background","#fff");
        $(".fixed_block .lf_fixed a").css("color","#666");
    });
});
$('.cart').click(function(){
    var account=sessionStorage['account'];
    if(account){
        location.href='cart.html';
        $('account').html(account);
    }else{
        location.href='login_register.html';
    }
});