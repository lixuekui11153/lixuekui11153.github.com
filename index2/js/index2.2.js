/**
 * Created by Sixer on 2016/9/22.
 */
(function(){
    DOMReady(function(){
        var oUl=document.getElementById('ul1');
        var aLi=oUl.getElementsByTagName('li');
        var oBox=document.getElementById('box');
        var aA=document.getElementsByTagName('a');
        var aLi1=oBox.getElementsByTagName('li');
        for(var i=0;i<aLi.length;i++){
            (function(index){
                aLi[i].onmouseenter=function(){
                    aLi[1].style.background='none';
                    aA[index].style.color='rgb('+rnd(1,256)+','+rnd(1,256)+','+rnd(1,256)+')';
                    aLi1[index].style.background='rgb('+rnd(1,256)+','+rnd(1,256)+','+rnd(1,256)+')';
                    move(aLi1[index],{height:40});
                };
            })(i);
            (function(index){
                aLi[i].onmouseleave=function(){
                    move(aLi1[index],{height:1});

                };
            })(i);
        }
        //留言
        var arr=eval(str);
        for(var i=0;i<arr.length;i++){
            var oDiv=document.createElement('div');
            oDiv.innerHTML=
                '<h2>'+arr[i].title+'</h2>'+
                '<div class="clearfix">'+
                '<span class="fl">作者：'+arr[i].author+'</span>'+
                '<span class="fr">'+arr[i].time+'</span>'+
                '</div>'+
                '<div class="clearfix">'+
                '<p class="pro">'+arr[i].content+'</p>'+
                '<a href="'+arr[i].href+'" class="fr">点击查看详情>></a>'+
                '</div>';
            oDiv.className='content';
            div1.insertBefore(oDiv,div1.children[0]);
        }
        //钟表
        var oDiv=document.querySelector('.clock');

        var oH=document.querySelector('.clock .hour');
        var oM=document.querySelector('.clock .min');
        var oS=document.querySelector('.clock .sec');

        //画刻度
        var N=60;
        for(var i=0; i<N; i++){
            var oSpan=document.createElement('span');

            if(i%5==0){
                oSpan.className='bs';

                var n=i/5==0?12:i/5;

                oSpan.innerHTML='<strong>'+n+'</strong>';
                oSpan.children[0].style.transform='rotate('+-i*6+'deg)';
            }else{
                oSpan.className='scale';
            }

            oSpan.style.transform='rotate('+6*i+'deg)';
            oDiv.appendChild(oSpan);
        }

        function tick(){
            var oDate=new Date();
            var h=oDate.getHours();
            var m=oDate.getMinutes();
            var s=oDate.getSeconds();
            var ms=oDate.getMilliseconds();

            oH.style.transform='rotate('+(h*30+m/60*30)+'deg)';
            oM.style.transform='rotate('+(m*6+s/60*6)+'deg)';
            oS.style.transform='rotate('+(s*6+ms/1000*6)+'deg)';
        }
        tick();
        setInterval(tick,30);

        //以下拖拽
        var iSpeedX=0;
        var iSpeedY=0;

        var lastX=0;
        var lastY=0;

        var timer=null;

        oDiv.onmousedown=function(ev){
            var oEvent=ev || event;
            var disX=oEvent.clientX-oDiv.offsetLeft;
            var disY=oEvent.clientY-oDiv.offsetTop;

            clearInterval(timer);

            document.onmousemove=function(ev){
                var oEvent=ev || event;
                oDiv.style.left=oEvent.clientX-disX+'px';
                oDiv.style.top=oEvent.clientY-disY+'px';

                //计算速度
                iSpeedX=oEvent.clientX-lastX;
                iSpeedY=oEvent.clientY-lastY;

                lastX=oEvent.clientX;
                lastY=oEvent.clientY;
            };

            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;

                duangMove();
            };
            return false;
        };

        function duangMove(){
            timer=setInterval(function(){
                iSpeedY+=3;

                var l=oDiv.offsetLeft+iSpeedX;
                var t=oDiv.offsetTop+iSpeedY;

                if(t>=document.documentElement.clientHeight-oDiv.offsetHeight){
                    t=document.documentElement.clientHeight-oDiv.offsetHeight;
                    iSpeedY*=-0.8;
                    iSpeedX*=0.8;
                }
                if(t<=0){
                    t=0;
                    iSpeedY*=-0.8;
                    iSpeedX*=0.8;
                }
                if(l>=document.documentElement.clientWidth-oDiv.offsetWidth){
                    l=document.documentElement.clientWidth-oDiv.offsetWidth;
                    iSpeedX*=-0.8;
                    iSpeedY*=0.8;
                }
                if(l<=0){
                    l=0;
                    iSpeedX*=-0.8;
                    iSpeedY*=0.8;
                }

                oDiv.style.left=l+'px';
                oDiv.style.top=t+'px';

                if(Math.abs(iSpeedX)<1)iSpeedX=0;
                if(Math.abs(iSpeedY)<1)iSpeedY=0;

                if(iSpeedX==0 && iSpeedY==0 && t==document.documentElement.clientHeight-oDiv.offsetHeight){
                    clearInterval(timer);
                }
            },30);
        }
    });
})();