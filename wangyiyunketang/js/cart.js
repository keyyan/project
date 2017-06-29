if(!sessionStorage['account']){
    location.href='login_register.html';
}
$(function(){
    $('header').load('php/fixed_header.php',function(){
        var account=sessionStorage['account'];
        if(account){
            $('.account').html(account);
        }
        $('.cart').click(function () {
            var account = sessionStorage['account'];
            if (account) {
                location.href = 'cart.html';
                $('account').html(account);
            } else {
                location.href = 'login_register.html';
            }
        });
    });
    $('footer').load('php/footer.php');
});
$(this).on("scroll",function() {
    var $this = $(this);
    $(".course").hover(function () {
        $(".fixed_block .color_block").css("display", "block");
        $(".fixed_block").css("background", "#fff");
        $(".fixed_block .lf_fixed a").css("color", "#666");
        $(".fixed_block").siblings().hover(function () {
            $(".fixed_block").css("background", "#49AF4F");
            $(".fixed_block .lf_fixed a").css("color", "#fff");
        });
        $(".fixed_block").hover(function () {
            $(".fixed_block").css("background", "#fff");
            $(".fixed_block .lf_fixed a").css("color", "#666");
        });
    });

    if ($this.scrollTop() > 5) {
        $(".small").css("display", "block");
    }
    if ($this.scrollTop() < 5) {
        $(".small").css("display", "none");
    }
});
$.ajax({
    type:'GET',
    url:'php/cart_detail.php',
    data:{account:sessionStorage['account']},
    success:function(list){
        var html='',total=0;
        if(list.mag==='err'||list.length===0){
            html='<tr><td colspan="5">您尚未购买任何商品！</td></tr>';
        }else{
            $.each(list,function(i,p){
                total+=Number(p.bPrice);
                html+="<tr><td><input type='checkbox'><input type='hidden' value="+p.did+"><div><img src="+p.bPic+"></div></td><td><a href='javascript:;'>"+p.bPro+"</a></td><td>"+p.bClass+"</td><td>￥"+p.bPrice+"</td><td><a class='delete' href="+p.did+">删除</a></td></tr><tr></tr>";
            });
        }
        $('.mycart tbody').html(html);
        var total=total.toFixed(2);
        $('.total').html("合计：￥"+total);
    }
});
$('.mycart tbody').on('click','a.delete',function(e){
    e.preventDefault();
    $(this).parent().parent().remove();
    var did=$(this).attr("href");
    $.ajax({
        type:'POST',
        url:'php/cart_delete.php',
        data:{did:did},
        success:function(list){
            console.log(list);
        }
    });
});
