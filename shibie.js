var jsAjax={
    get: function(url, fn) {
        var obj = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据
        obj.open('GET', url, true);
        obj.onreadystatechange = function() {
            if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) { // readyState == 4说明请求已完成
                fn.call(this, obj.responseText);  //从服务器获得数据
            }
        };
        obj.send();
    },
    post: function (url, data, fn) {  // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
        var obj = new XMLHttpRequest();
        obj.open("POST", url, true);
        obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  // 添加http头，发送信息至服务器时内容编码类型
        obj.onreadystatechange = function() {
            if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) {  // 304未修改
                fn.call(this, obj.responseText);
            }
        };
        obj.send(data);
    },

}
function callfn(a){
    if(a==1){
        setCookie('user_pass',"1",1)
        sh_play();
    }else{
        setCookie('user_pass',"0",1)
    }
}
function  sh_play() {
    var strVar = "";
    strVar += "<style>\n";
    strVar += ".cf:before,.cf:after{display: table;content:''}\n";
    strVar += ".cf:after{clear:both}\n";
    strVar += ".cf{zoom:1}\n";
    strVar += ".shadow {z-index:999990; display: none; position: fixed; width: 100%; height: 100%; top:0; left:0; background-color: rgba(0,0,0,.2); }\n";
    strVar += ".float_container {z-index:999991; position: fixed; width: 100%; max-width:640px; min-width:320px;margin:0 auto; bottom:0; background-image: -moz-linear-gradient(#fad6e1, #fff5f8); background-image: -webkit-linear-gradient(#fad6e1, #fff5f8); background-image: -o-linear-gradient(#fad6e1, #fff5f8); background-image: linear-gradient(#fad6e1, #fff5f8); }\n";
    strVar += ".db { display: block}\n";
    strVar += ".float_container .title { background:#01aded url(http://m.cqmw.com/skin/tangchuan/20160620/images/close.png) 97% 50% no-repeat; background-size: 40px; font-size:20px; line-height: 2.2; color:#fff; text-align: center; letter-spacing: -1px; } .float_container dl { display: none; transiton:all .3s linear 0s;margin:0;padding:0;}\n";
    strVar += ".float_container dt { display: inline-block; width: 14%; float: left; margin: 34px 0 0 8px; text-align: center}\n";
    strVar += ".float_container dt img{max-width:100%;border:0;vertical-align:middle;-ms-interpolation-mode: bicubic;margin-top:-20px;}\n";
    strVar += ".float_container dd {margin:0; display: inline-block; position: relative; width: 68%; float: left; margin-top: 15px; }\n";
    strVar += ".float_container .time { display:none; font-size: 12px; line-height: 1.6; color:#6c6761; text-align: center;width:100%;margin:0;height:1.6em; }\n";
    strVar += ".float_container .box { font-size:14px !important; font-family:\"微软雅黑\"; color:#000000;position: relative; margin-left: 5%; padding:10px; border:1px solid #efb06a; border-top-color: #fefaf7; border-radius: 12px; box-shadow: 0 3px 0 #e78951, inset 0 1px 1px #fff; background-image: -moz-linear-gradient(#fce7d4, #fad6b0); background-image: -webkit-linear-gradient(#fce7d4, #fad6b0); background-image: -o-linear-gradient(#fce7d4, #fad6b0); background-image: linear-gradient(#fce7d4, #fad6b0); letter-spacing: -1px; }\n";
    strVar += ".float_container .box img { width: 22px; vertical-align: bottom;}\n";
    strVar += ".float_container .box:before, .float_container .box:after { position: absolute; content: ''}\n";
    strVar += ".float_container .box:before { width: 18px; height: 13px; top:-1px; left:-9px;  background-size: 18px; }\n";
    strVar += ".float_container .box:after { width: 40px; height: 26px; bottom:-4px; right:-7px;  background-size: 40px; }\n";
    strVar += ".float_container .btn { margin-top: 25px; padding:10px 0; border-top:1px solid #c7c7c0; border-bottom:1px solid #979185; background-color: #eaebed; }\n";
    strVar += ".float_container .btn a { display: inline-block; width: 39%; height: 2em; float:left; margin:0 5%; border:1px solid #a6a5a1; border-radius: 12px; background-color: #fefefe; box-shadow: 0 2px 2px #d1d1d3; font-size: 16px; color:#6c6761; line-height: 2; text-align: center; text-decoration: none; transition:all .3s linear 0s; }\n";
    strVar += ".float_container .btn a:hover {border-color:#959490;background-color: #f7f7f7} @media screen and (max-width: 320px) {.float_container .title {font-size: 18px; background-size: 32px}\n";
    strVar += ".float_container dd {width: 73%}\n";
    strVar += ".float_container .box {font-size: 13px }\n";
    strVar += ".float_container .btn a {border-radius: 10px; font-size: 15px } }\n";
    strVar += "#LRfloater1,#LRdiv1,#LRfloater0,#LRfloater0{ display: none !important; }\n";
    strVar += "<\/style>\n";
    strVar += "<div class=\"float_container db cf\" id=\"footTool\" style=\"display: none;\">\n";
    strVar += "  <div class=\"title\">重庆现代女子医院在线咨询<a style=\"display: block;width: 50px;height: 40px;margin-top: -40px;right:3%;cursor:pointer; position: absolute;\" onclick=\"javascript:closeSWT();\"><\/a><\/div>\n";
    strVar += "   \n";
    strVar += "   <dl class=\"cf\" id=\"tools2\" onclick=\"hxask();\" style=\"display: none;\">   \n";
    strVar += "    <dt><img src=\"http://m.cqmw.com/skin/tangchuan/20160620/images/d1.png\"><\/dt>\n";
    strVar += "    <dd>\n";
    strVar += "      <div class=\"time\" id=\"now1\"><\/div>\n";
    strVar += "      <div class=\"box\"><img alt=\"smile\" src=\"http://m.cqmw.com/skin/tangchuan/20160620/images/smile.gif\"> 您好！这里是重庆现代女子医院在线客服，请问有什么可以帮到您吗？<\/div>\n";
    strVar += "    <\/dd>    \n";
    strVar += "  <\/dl>\n";
    strVar += " \n";
    strVar += "   \n";
    strVar += "  <dl class=\"cf\" id=\"tools3\" style=\"display: none;\" onclick=\"hxask();\">  \n";
    strVar += "    <dt><img src=\"http://m.cqmw.com/skin/tangchuan/20160620/images/d1.png\"><\/dt>\n";
    strVar += "    <dd>\n";
    strVar += "      <div class=\"time\" id=\"now2\"><\/div>\n";
    strVar += "      <div class=\"box\">我们能根据您的需求，提供就医导诊、线上咨询、预约挂号等快捷服务！<\/div>\n";
    strVar += "    <\/dd>    \n";
    strVar += "  <\/dl>\n";
    strVar += " \n";
    strVar += "  <div class=\"btn cf\"><a href=\"tel:023-62901999\">电话咨询<\/a><a href=\"http://kf.cq2d.com/lr/chatpre.aspx?id=kqu73797044&amp;lng=cn\" target=\"_blank\">立即回复<\/a><\/div>\n";
    strVar += "<\/div>\n";
    var body = document.body;
    var div = document.createElement('div');
    div.id = 'mDiv';
    div.innerHTML =strVar;
    body.appendChild(div);
    setTimeout("ShowLayer()",1000);//延迟显示
}
function ShowLayer(){
    document.getElementById("footTool").style.display="block";
    setTimeout("ShowLayer2()",1000);//延迟显示
}
function CloseLayer(){
    document.getElementById("footTool").style.display="none";
}
function ShowLayer2(){
    document.getElementById("tools2").style.display="block";
    setTimeout("ShowLayer3()",1000);//延迟显示
}
function CloseLayer2(){
    document.getElementById("tools2").style.display="none";
}
function ShowLayer3(){
    document.getElementById("tools3").style.display="block";
}
function chkSWT() {
    if (document.getElementById("footTool")) {
        if (document.getElementById("footTool").style.display == "none") {
            document.getElementById("footTool").style.display = "block";
        }
    }
}
var inter = null;
function closeSWT() {
    document.getElementById("footTool").style.display = "none";
    document.getElementById("tools2").style.display = "none";
    document.getElementById("tools3").style.display = "none";
    window.setTimeout(function(){
        ShowLayer();
    },8000);
};
function hxask(){ //  封装 商务通原生打开窗口方法
    openZoosUrl();LR_HideInvite();return false;
}
function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}
function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
function checkCookie()
{
    //获取cookie
    user_pass=getCookie('user_pass');
    if (user_pass=="1")
    {sh_play();}
    else if (user_pass==null || user_pass=="")
    {
        //设置cookie
        jsAjax.get("http://m.cqmw.com/shibie.php",callfn);
    }
}
checkCookie();


