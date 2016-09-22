/**
 * Created by Sixer on 2016/9/22.
 */
(function(){
    DOMReady(function(){
        var oA=new Audio();
        oA.src='mp3/千千阙歌.mp3';
        oA.play();
        var str='本人从事网络前端工作已经2年，虽说不是前端大拿，但也许会有吸引你的地方，欢迎点击查看，谢谢到访！';
        for(var i=0;i<str.length;i++){
            oSpan=document.createElement('span');
            oSpan.innerHTML=str[i];
            if(i<=14){
                oSpan.style.left=0;
                oSpan.style.top=i*30+'px';
            }
            if(i>=15&&i<=29){
                oSpan.style.left='50px';
                oSpan.style.top=(i%15)*31+'px';
            }
            if(i>=30&&i<=44){
                oSpan.style.left='100px';
                oSpan.style.top=(i%15)*32+'px';
            }
            if(i>=45&&i<=59){
                oSpan.style.left='150px';
                oSpan.style.top=(i%15)*33+'px';
            }
            if(i>=60&&i<=74){
                oSpan.style.left='200px';
                oSpan.style.top=(i%15)*34+'px';
            }
            if(i>=75&&i<=92){
                oSpan.style.left='250px';
                oSpan.style.top=(i%15)*35+'px';
            }
            box.appendChild(oSpan);
            (function(obj,index){
                setTimeout(function(){
                    obj.style.textShadow='10px 10px 0 #fff';
                },index*400);
            })(oSpan,i);
        }


    })
})();