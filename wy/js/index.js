
//***************************固定导航栏****************************
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
    if($this.scrollTop()>604){
        $("header").css("display","block");
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
    }
    if($this.scrollTop()>100){
        $(".small").css("display","block");
    }
    if($this.scrollTop()<604){
        $("header").css("display","none");
    }
    if($this.scrollTop()<100){
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
//**************************进入购物车*********************
$('.cart').click(function(){
    var account=sessionStorage['account'];
    if(account){
        location.href='cart.html';
        $('account').html(account);
    }else{
        location.href='login_register.html';
    }
});
//*****************************进入登陆页面**************************
$('.account').click(function(){
    location.href='login_register.html';
});
//******************************输入框********************************
$(".nav_container .text input").on("focus",function(){
    $(this).animate({width:273}, 300);
    $('.nav_container .text').animate({marginLeft:80,width:273}, 300);
});
$(".nav_container .text input").on("blur",function(){
    $(this).animate({width:223}, 300);
    $('.nav_container .text').animate({marginLeft:130,width:223}, 300);
});
//**********************************轮播************************
$.ajax({
    type:'GET',
    url:'php/slider.php',
    success:function(imgs) {
        for (var i = 0, image = "", indexs = ""; i < imgs.length; i++) {
            var list = imgs[i];
            image += "<img src='" + list.img + "'alt='" + (list.num - 1) + "'>";
            indexs += "<li data-slide-to=" + i + "></li>";
        }
        $("#imgs").html(image);
        $("#slider_num").html(indexs);
//-------------------------自动轮播--------------------
        addClass(0);
        function addClass(n) {
            $(".slider_mid img.active").removeClass("active");
            $(".slider_num li.active").removeClass("active");
            $(".slider_mid img").filter('[alt="' + n + '"]').addClass("active");
            $("#slider_num").children("li:eq(" + n + ")").addClass("active");
            //console.log(n);
            $(".slider_lf").css("background", imgs[n].bgcolor);
            $(".slider_rt").css("background", imgs[n].bgcolor);
            $(".slider_mid").css("background", imgs[n].bgcolor);
        };
        var canAuto = true;
        var timer = null;
        sliderAuto();
        function sliderAuto() {
            var n = $(".slider_mid img.active").attr("alt");
            if (canAuto == true) {
                timer = setInterval(function () {
                    n++;
                    if (n >= imgs.length) {
                        n = 0;
                    }
                    addClass(n);
                }, 3000);
            }
        }
        $("a.btn_lf").on("mouseover", function () {
            clearInterval(timer);
            timer = null;
            canAuto = false;
        });
        $("a.btn_lf").on("click", function () {
            var n = $(".slider_mid img.active").attr("alt");
            console.log(n);
            n--;
            if (n < 0) {
                n = 6;
            }
            addClass(n);
        });
        $("a.btn_lf").on("mouseout", function () {
            var n = $(".slider_mid img.active").attr("alt");
            timer = null;
            canAuto = true;
            sliderAuto();
        });
        $("a.btn_rt").on("mouseover", function () {
            clearInterval(timer);
            timer = null;
            canAuto = false;
        });
        $("a.btn_rt").on("click", function () {
            var n = $(".slider_mid img.active").attr("alt");
            //console.log(n);
            n++;
            if (n >= imgs.length) {
                n = 0;
            }
            addClass(n);
        });
        $("a.btn_rt").on("mouseout", function () {
            var n = $(".slider_mid img.active").attr("alt");
            //console.log(n);
            timer = null;
            canAuto = true;
            sliderAuto();
        });
        //---------------------轮播点击跳转-------------------
        $("#slider_num li").on("mouseover", function () {
            clearInterval(timer);
            timer = null;
            canAuto = false;
        });
        $("#slider_num li").on("click", function () {
            var $this=$(this);
            console.log($this)
            var n = $this.data("slide-to");
            addClass(n);
        });
        $("#slider_num li").on("mouseout", function () {
            //var n = $(this).data("slide-to");
            timer = null;
            canAuto = true;
            sliderAuto();
        });
    }
});
//***********************循环播放**************************
$.ajax({
    type: 'GET',
    url: 'php/navs.php',
    success: function (navs) {
        var num = 4;
        var timer = null;
        var sliderTo = true;
        function slider(n) {
            if (sliderTo = true) {
                timer = setInterval(function () {
                    n++;
                    if (num + n > navs.length) {
                        n = 0;
                    }
                    for (var i = n, html = ""; i < num + n; i++) {
                        var p = navs[i];
                        html += "<li><span class='iconfont'>" + p.icon + "</span><span><a href='javascript:;'>" + p.duty + "</a> <p>" + p.pro + "</p> </span></li>";

                    }
                    $("#mid_nav").html(html);
                }, 2000)
            }
        }
        slider(-1);
    }
});
$("#mid_nav li").on("mouseover",function(){
    clearInterval(timer);
    timer = null;
    sliderTo=false;
});
        //***********************免费好课**********************
        $.ajax({
        type:'GET',
        url:'php/banner.php',
        data:{bType:'good_course'},
        success:function(list){
            var html="",title="";
            title="<img src="+list[0].bPic+">";
            for(var i=1;i<list.length;i++){
                var p=list[i];
                html+=" <li> <a href='detail.html?bid="+ p.bid+"'><img src="+ p.bPic+"></a> <a href='detail.html?bid="+ p.bid+"'><h4>"+ p.bPro+"</h4></a> <p>"+ p.bClass+"</p> </li>";
            };
            $('.banner_title').html(title);
            $('#course').html(html);
    }
});

//************************畅销好课**********************
$.ajax({
    type:'GET',
    url:'php/banner.php',
    data:{bType:'favClass'},
    success:function(list){
        var html="",title="",favRt="";
        title="<img src="+list[0].bPic+">";
        favRt="<img src="+list[1].bPic+">";
        for(var i=2;i<list.length;i++){
            var p=list[i];
            html+="<li> <a href='detail.html?bid="+ p.bid+"'> <img src="+ p.bPic+"> </a> <div class='classPrice'> <a href='detail.html?bid="+ p.bid+"'><h4>"+ p.bPro+"</h4></a> <p>"+ p.bClass+"</p> <p>￥"+ p.bPrice+"</p> </div></li>";
        };
        $('.mid_favClass>a').html(title);
        $('.mid_favClass>ul').html(html);
        $('.favClass_rt>a').html(favRt);
    }
});

//*************************名师大咖秀************************
$.ajax({
    type:'GET',
    url:'php/banner.php',
    data:{bType:'famTeacher'},
    success:function(list){
        var html="";
        for(var i=0;i<list.length;i++){
            var p=list[i];
            html+=" <li><a href='javascript:;'><img src="+p.bPic+"></a><p>"+ p.bPro+"<span>"+ p.bClass+"</span></p></li>";
        };
        $('.mid_famTeacher ul').html(html);
    }
});
//****************************IT/互联网**************************
$.ajax({
    type:'GET',
    url:'php/banner.php',
    data:{bType:'web'},
    success:function(list){
        var html="",title="",favRt="";
        title="<img src="+list[0].bPic+">";
        favRt="<img src="+list[1].bPic+">";
        for(var i=2;i<list.length;i++){
            var p=list[i];
            html+="<li><a href='detail.html?bid="+ p.bid+"'><img src="+ p.bPic+"></a><div class='pic_words'><h4><a href='detail.html?bid="+ p.bid+"'>"+ p.bPro+"</a></h4><p>"+ p.bClass+"</p></div></li>";
        };
        $('.web_main .part1_lf ul li:first-child a').html(title);
        $('.web_main .part1_lf ul').append(html);
        $('.web_main .part_rt>a').html(favRt);
    }
});//***************************设计创作**************************
$.ajax({
    type:'GET',
    url:'php/banner.php',
    data:{bType:'design'},
    success:function(list){
        var html="",title="",favRt="";
        title="<img src="+list[0].bPic+">";
        favRt="<img src="+list[1].bPic+">";
        for(var i=2;i<list.length;i++){
            var p=list[i];
            html+="<li><a href='detail.html?bid="+ p.bid+"'><img src="+ p.bPic+"></a><div class='pic_words'><h4><a href='detail.html?bid="+ p.bid+"'>"+ p.bPro+"</a></h4><p>"+ p.bClass+"</p></div></li>";
        };
        $('.design_main>a').html(title);
        $('.design_main .main_pic').html(html);
        $('.design_main .part_rt>a').html(favRt);
    }
});
//****************************职场提升**************************
$.ajax({
    type:'GET',
    url:'php/banner.php',
    data:{bType:'working'},
    success:function(list){
        var html="",title="",favRt="";
        title="<img src="+list[0].bPic+">";
        favRt="<img src="+list[1].bPic+">";
        for(var i=2;i<list.length;i++){
            var p=list[i];
            html+="<li><a href='detail.html?bid="+ p.bid+"'><img src="+ p.bPic+"></a><div class='pic_words'><h4><a href='detail.html?bid="+ p.bid+"'>"+ p.bPro+"</a></h4><p>"+ p.bClass+"</p></div></li>";
        };
        $('.working_main .part1_lf ul li:first-child a').html(title);
        $('.working_main .part1_lf ul').append(html);
        $('.working_main .part_rt>a').html(favRt);
    }
});
//***************************兴趣生活**************************
$.ajax({
    type:'GET',
    url:'php/banner.php',
    data:{bType:'life'},
    success:function(list){
        var html="",title="",favRt="";
        title="<img src="+list[0].bPic+">";
        favRt="<img src="+list[1].bPic+">";
        for(var i=2;i<list.length;i++){
            var p=list[i];
            html+="<li><a href='detail.html?bid="+ p.bid+"'><img src="+ p.bPic+"></a><div class='pic_words'><h4><a href='detail.html?bid="+ p.bid+"'>"+ p.bPro+"</a></h4><p>"+ p.bClass+"</p></div></li>";
        };
        $('.life_main>a').html(title);
        $('.life_main .main_pic').html(html);
        $('.life_main .part_rt>a').html(favRt);
    }
});
//****************************语言/留学**************************
$.ajax({
    type:'GET',
    url:'php/banner.php',
    data:{bType:'language'},
    success:function(list){
        var html="",title="",favRt="";
        title="<img src="+list[0].bPic+">";
        favRt="<img src="+list[1].bPic+">";
        for(var i=2;i<list.length;i++){
            var p=list[i];
            html+="<li><a href='detail.html?bid="+ p.bid+"'><img src="+ p.bPic+"></a><div class='pic_words'><h4><a href='detail.html?bid="+ p.bid+"'>"+ p.bPro+"</a></h4><p>"+ p.bClass+"</p></div></li>";
        };
        $('.language_main .part1_lf ul li:first-child a').html(title);
        $('.language_main .part1_lf ul').append(html);
        $('.language_main .part_rt>a').html(favRt);
    }
});
//***************************中小学*************************
$.ajax({
    type:'GET',
    url:'php/banner.php',
    data:{bType:'mpSchool'},
    success:function(list){
        var html="",title="",favRt="";
        title="<img src="+list[0].bPic+">";
        favRt="<img src="+list[1].bPic+">";
        for(var i=2;i<list.length;i++){
            var p=list[i];
            html+="<li><a href='detail.html?bid="+ p.bid+"'><img src="+ p.bPic+"></a><div class='pic_words'><h4><a href='detail.html?bid="+ p.bid+"'>"+ p.bPro+"</a></h4><p>"+ p.bClass+"</p></div></li>";
        };
        $('.mpSchool_main>a').html(title);
        $('.mpSchool_main .main_pic').html(html);
        $('.mpSchool_main .part_rt>a').html(favRt);
    }
});
//****************************考试认证**************************
$.ajax({
    type:'GET',
    url:'php/banner.php',
    data:{bType:'examination'},
    success:function(list){
        var html="",title="",favRt="";
        title="<img src="+list[0].bPic+">";
        favRt="<img src="+list[1].bPic+">";
        for(var i=2;i<list.length;i++){
            var p=list[i];
            html+="<li><a href='detail.html?bid="+ p.bid+"'><img src="+ p.bPic+"></a><div class='pic_words'><h4><a href='detail.html?bid="+ p.bid+"'>"+ p.bPro+"</a></h4><p>"+ p.bClass+"</p></div></li>";
        };
        $('.examination_main .part1_lf ul li:first-child a').html(title);
        $('.examination_main .part1_lf ul').append(html);
        $('.examination_main .part_rt>a').html(favRt);
    }
});
//***************************经管/法律**************************
$.ajax({
    type:'GET',
    url:'php/banner.php',
    data:{bType:'legislation'},
    success:function(list){
        var html="",title="",favRt="";
        title="<img src="+list[0].bPic+">";
        favRt="<img src="+list[1].bPic+">";
        for(var i=2;i<list.length;i++){
            var p=list[i];
            html+="<li><a href='detail.html?bid="+ p.bid+"'><img src="+ p.bPic+"></a><div class='pic_words'><h4><a href='detail.html?bid="+ p.bid+"'>"+ p.bPro+"</a></h4><p>"+ p.bClass+"</p></div></li>";
        };
        $('.legislation_main>a').html(title);
        $('.legislation_main .main_pic').html(html);
        $('.legislation_main .part_rt>a').html(favRt);
    }
});
