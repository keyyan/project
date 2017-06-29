
$.ajax({
    Type:'GET',
    url:'php/select_price.php',
    success:function(list){
        var html="";
        for(var i=1;i<=3;i++){
            var p=list[i];
            var n="0"+i;
            if(n>=10){n=i};
        html+="<li class='active'><span>"+n+"</span><a href='javascript:;' title="+ p.bPro+">"+p.bPro+"</a> </li>";
        };
        $('.price_down').html(html);
        var html="";
        for(var i=4;i<=10;i++){
            var p=list[i];
            var n="0"+i;
            if(n>=10){n=i};
        html+="<li><span>"+n+"</span><a href='javascript:;' title="+ p.bPro+">"+p.bPro+"</a> </li>";
        };
        $('.price_down').append(html);
    }
});