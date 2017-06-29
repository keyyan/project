
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
    if($this.scrollTop()>30){
        $(".small").css("display","block");
    }
    if($this.scrollTop()<30){
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
//*********************************轮播******************************
var imgs=[
    {"i":0,"img":"images/slider08.jpg"},
    {"i":1,"img":"images/slider09.png"},
    {"i":2,"img":"images/slider10.jpg"},
    {"i":3,"img":"images/slider11.jpg"},
    {"i":4,"img":"images/slider13.jpg"},
    {"i":5,"img":"images/slider14.png"},
    {"i":6,"img":"images/slider15.jpg"}
];
var slider={
    LIWIDTH:0,
    $parent:null,
    $imgs:null,
    $indexs:null,
    DURATION:1000,
    WAIT:3000,
    timer:null,
    canAuto:true,
    init:function($parent){
        this.$parent=$parent;
        this.$parent.addClass("slider");
        this.$imgs=$("<ul class='imgs'></ul>");
        this.$indexs=$("<ul class='indexs'></ul>");
        this.$parent.append(this.$imgs);
        this.$parent.append(this.$indexs);
        this.LIWIDTH=parseFloat(
            this.$parent.css("width")
        );
        this.$imgs.css(
            "width",imgs.length*this.LIWIDTH
        );
        this.updateView();
        this.myBind();
        this.autoMove();
    },
    myBind:function(){
        this.$indexs.on("mouseover","li",this,
            function(e){
                var $this=$(this);
                if(!$this.hasClass("hover")){
                    e.data.move(
                        $this.html()
                        -$this.siblings(".hover").html()
                    );
                }
            }
        );
        this.$parent.hover(
            function(){
                clearTimeout(this.timer);
                this.timer=null;
                this.canAuto=false;
            }.bind(this),
            function(){
                this.canAuto=true;
                console.log(this.canAuto);
                this.autoMove();
            }.bind(this)
        )
    },
    autoMove:function(){
        this.timer=setTimeout(
            this.move.bind(this,1),this.WAIT
        );
    },
    move:function(n){
        this.$imgs.stop(true);
        if(n>0){
            this.$imgs.animate(
                {left:-n*this.LIWIDTH},
                this.DURATION,
                this.changeImgs.bind(this,n)
            );
        }else{
            this.changeImgs(n);
            this.$imgs.animate({left:0}, this.DURATION);
        }
    },
    changeImgs:function(n){
        if(n>0){
            imgs=imgs.concat(imgs.splice(0,n));
            this.updateView();
            this.$imgs.css("left",0);
        }else{
            n*=-1;
            imgs=imgs.splice(imgs.length-(n),n)
                .concat(imgs);
            this.updateView();
            var left=parseFloat(
                    this.$imgs.css("left")
                )-n*this.LIWIDTH;
            this.$imgs.css("left",left);
        }
        if(this.canAuto)
            this.autoMove();
    },
    updateView:function(){
        for(var i=0,liImgs="",liIdxs="";
            i<imgs.length;
            i++){
            liImgs+=
                "<li><img src='"+imgs[i].img+"'></li>"
            liIdxs+="<li>"+(i+1)+"</li>"
        }
        this.$imgs.html(liImgs);
        this.$indexs.html(liIdxs);
        this.$indexs.children("li:eq("+imgs[0].i+")")
            .addClass("hover");
    },
}
$.fn.slider=function(){//this->$("#slider")
    slider.init(this);
}
function loadProduct(pageNum){
    $.ajax({
        type:'GET',
        url:'php/page.php',
        data:{pageNum:pageNum},
        success:function(pager){
            //console.log(pager);
            var html="";
            for(var i=0;i<pager.data.length;i++){
                var p=pager.data[i];
                html+="<li> <a href='detail.html?bid="+ p.bid+"'> <img src="+ p.bPic+"> </a> <div class='classPrice'> <a href='detail.html?bid="+ p.bid+"'><h4>"+ p.bPro+"</h4></a> <p>"+ p.bClass+"</p> <p>"+ p.bPrice+"</p> </div></li>";
            };
            $('.banner_class').html(html);
            var list="";
            for(var j=1;j<pager.pageCount+1;j++){
                var n=j;
             list+="<li><a href='javascript:;'>"+n+"</a></li>";
            }
            $('.pages_num').html(list);
            $('.pages_num').children('li:nth-child('+pageNum+')').addClass('active');
        },
        error:function(){
            alert('err');
        }
    });
}
loadProduct(1);
$('.pages_num').on('click','a',function(e){
    e.preventDefault();
    var pageNum=$(this).html();
    loadProduct(pageNum)
});
$(".prev").on('click',function(e){
    e.preventDefault();
    var pageNum=$('.pages_num li.active a').html();
    pageNum--;
    if(pageNum==0){pageNum=1}
    console.log(pageNum);
    loadProduct(pageNum)
})
$(".next").on('click',function(e){
    e.preventDefault();
    var pageNum=$('.pages_num li.active a').html();
    //var n=$('.pages_num li:last-child a').html();
    var n=$('.pages_num li').size();
    console.log(n);
    pageNum++;
    if(pageNum==(n+1)){pageNum=n}
    console.log(pageNum);
    loadProduct(pageNum)
})