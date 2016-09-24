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
                    aLi[0].style.background='none';
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
        //two---内容。
        ;(function(){
            var oUl2=document.getElementById('ul2');
            var aLi=oUl2.getElementsByTagName('li');
            var arr=[];
            var timer=null;
            var timer1=null;
            var ready=true;
            for(var i=0;i<aLi.length;i++){
                arr[i]={
                    left:aLi[i].offsetLeft,
                    top:aLi[i].offsetTop
                }
            }
            for(var i=0;i<aLi.length;i++){
                aLi[i].style.margin=0;
                aLi[i].style.position='absolute';
                aLi[i].style.left=arr[i].left+'px';
                aLi[i].style.top=arr[i].top+'px';
            }
            btn.onclick=function(){
                if(!ready)return;
                ready=false;
                clearInterval(timer);
                var count=0;//计数看消失li的个数，也做循环使用，
                timer=setInterval(function(){
                    (function(index){//闭包解决定时器里this问题，娶不到i值。
                        move(
                            aLi[count],
                            {//li 的定位相对于父级  left=0; top:0 回到页面0 0 处。width和height为零，即表现为消失。
                                left:0,top:0,width:0,height:0,opacity:0
                            },
                            {
                                complete:function(){//收回的li再次被放回来，所以要在move里套move函数。
                                    //先判断最后一个li 是不是已经消失。
                                    if(index==aLi.length-1){
                                        index=aLi.length-1;
                                        clearInterval(timer1);
                                        timer1=setInterval(function(){
                                            (function(t){
                                                move(aLi[t],{
                                                    left:arr[t].left,
                                                    top:arr[t].top,
                                                    width:70,
                                                    height:70,
                                                    opacity:1
                                                    // filter:alpha(opacity=100)
                                                },{
                                                    complete:function(){
                                                        if(t==0){
                                                            ready=true;
                                                        }
                                                    }
                                                });
                                            })(index);

                                            index--;//作为li消失结束的依据。
                                            if(index==-1){

                                                clearInterval(timer1);//当所有li都出现了，让定时器关闭。
                                            }
                                        },100)
                                    }
                                }
                            }
                        );

                    })(count);
                    count++;//作为li消失结束的依据。
                    if(count==aLi.length){
                        clearInterval(timer);//当所有li都消失了，让定时器关闭。
                    }
                },100);
            };
        })();
        //ad.
        ;(function(){
            var timer=null;
            clearInterval(timer);
            var oAd=document.getElementById('ad');
            var speedx=5;
            var speedy=5;
            var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
            var scrollLeft=document.documentElement.scrollLeft || document.body.scrollLeft;
            var clientX=document.documentElement.clientWidth;
            var clientY=document.documentElement.clientHeight;
            timer=setInterval(function(){
                if(oAd.offsetTop+oAd.offsetHeight>clientY-10){
                    oAd.style.top=(clientY-oAd.offsetHeight-10)+'px';
                    speedy*=-1;
                }
                if(oAd.offsetTop<10){
                    oAd.style.top=10+'px';
                    speedy*=-1;
                }
                if(oAd.offsetLeft+oAd.offsetWidth>clientX-10){
                    oAd.style.left=(clientX-oAd.offsetWidth-10)+'px';

                    speedx*=-1;
                }
                if(oAd.offsetLeft<10){
                    oAd.style.left=10+'px';
                    speedx*=-1;
                }
                oAd.style.left=oAd.offsetLeft+speedx+'px';
                oAd.style.top=oAd.offsetTop+speedy+'px';
            },30);
        })();
        ;(function(){
            show('wicket','surprise','point');
            show('wicket1','surprise1','point1');
            show('wicket2','surprise2','point2');
            show('wicket3','surprise3','point3');
            function show(id,id1,id2){
                var oWicket=document.getElementById(id);
                var oSurprise=document.getElementById(id1);
                var oPoint=document.getElementById(id2);
                oWicket.onmouseenter=function(){
                    oSurprise.style.display='none';
                    oPoint.style.display='block';
                    oPoint.children[0].style.color='chartreuse';
                };
                oWicket.onmouseleave=function(){
                    oSurprise.style.display='block';
                    oPoint.style.display='none';
                };
            }
        })();

    });
    ;(function(){
        window.onload=function(){
            var oUl=document.getElementById('ul4');
            var aBtn=document.querySelectorAll('ol li');
            for(var i=0; i<aBtn.length; i++){
                aBtn[i].index=i;
                aBtn[i].onclick=function(){
                    for (var i = 0; i < aBtn.length; i++) {
                        aBtn[i].classList.remove('active');
                    }
                    this.classList.add('active');
                    oUl.style.top=-this.index*180+'px';
                };
            }
        };
    })();
})();