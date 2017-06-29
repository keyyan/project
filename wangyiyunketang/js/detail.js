
$(function(){
    $('header').load('php/fixed_header.php',function(){
        var account=sessionStorage['account'];
        if(account){
            $('.account').html(account);
        }
    });
    $('footer').load('php/footer.php');
});
$(this).on("scroll",function(){
    var $this=$(this);
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
    if($this.scrollTop()>20){
        $(".small").css("display","block");
    }
    if($this.scrollTop()<20){
        $(".small").css("display","none");
    }
    $(".fixed_header .text input").on("focus",function(){
        $(this).animate({width:273}, 100);
        $('.fixed_header .text').animate({marginLeft:130,width:273},100);
    });
    $(".fixed_header .text input").on("blur",function(){
        $(this).animate({width:223}, 100);
        $('.fixed_header .text').animate({marginLeft:180,width:223},100);
    });
});
function getBid(bid){
    var reg=new RegExp("(^|&)"+bid+"=([^&]*)(&|$)");
    var r=window.location.search.substr(1).match(reg);
    if(r!=null)return unescape(r[2]);return null;
}
var bid=getBid("bid");
$.ajax({
    type:'GET',
    url:'php/detail.php',
    data:{bPage:'page',bid:bid},
    success:function(row){
        //console.log(row);
        var html="",pro="";
        html="<img src="+row.bPic+"><div class='new'><p>"+row.bPro+"</p><h4>讲师："+row.bClass+"</h4><p>￥"+row.bPrice+"</p><a class='addCart' href='javascript:;'>加入购物车</a></div>";
        $('.detail_block').html(html);
        if(row.bOther!=""){
            pro="简介："+row.bOther;
        }
        $(".produce").html(pro);
    },
    error:function(){
        alert('err');
    }
});
$('.detail_block').on('click','a',function(e){
    e.preventDefault();
    var $this=$(this);
    $this.addClass("active");
    var account=sessionStorage['account'];
    if(account){
        $.ajax({
            type:'POST',
            url:'php/cart_add.php',
            data:{account:account,bid:bid},
            success:function(result){
                console.log(result);
                if(result.msg==="succ"){
                    $('.detail_block a').html('购买成功！');
                    $('.detail_block a').css('backgroundColor','#e4393c');
                    $('.detail_block a').css('borderColor','#e4393c');
                }else{
                    $('.detail_block a').html('购买失败！');
                    $('.detail_block a').css('backgroundColor','#e4393c');
                    $('.detail_block a').css('borderColor','#e4393c');
                }
            }
        });
    }else{
        location.href="login_register.html"
    }
});
