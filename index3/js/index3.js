/**
 * Created by Sixer on 2016/9/22.
 */
(function(){
    $(function(){
        var oA=new Audio();
        oA.src='../mp3/雨的印记.mp3';
        oA.play();
        var oUl=document.getElementById('ul1');
        var aLi=oUl.getElementsByTagName('li');
        var oBox=document.getElementById('box');
        var aA=document.getElementsByTagName('a');
        var aLi1=oBox.getElementsByTagName('li');
        for(var i=0;i<aLi.length;i++){
            (function(index){
                aLi[i].onmouseenter=function(){
                    aLi[2].style.background='none';
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
        ;(function(){
            var aLi=$('#ul2 li');
            var arr=[];
            var timer=null;
            var timer1=null;
            var onOff=true;
            $(aLi).each(function(index){
                arr[index]={
                    left:$(aLi).eq(index).position().left,
                    top:$(aLi).eq(index).position().top
                }
            });
            $(aLi).each(function(index){
                $(aLi).eq(index).css({
                    margin:0,
                    position:'absolute',
                    left:arr[index].left,
                    top:arr[index].top
                });
            });
            var n=3;
            for(var i=0;i<aLi.length;i++){
                aLi[i].onmouseover=function(){
                    move(this,{width:240,height:240,marginLeft:-45,marginTop:-45});
                    this.style.zIndex=n++;
                }
                aLi[i].onmouseout=function(){
                    move(this,{width:150,height:150,margin:0});
                }
            }
            $('#btn').on('click',function(){
                clearInterval(timer);
                if(!onOff)return;
                onOff=false;
                var count=0;
                timer=setInterval(function(){
                    (function(index){
                        move(
                            $(aLi).eq(count)[0],
                            {
                                left:0,top:0,width:0,height:0
                            },
                            {
                                complete:function(){
                                    if(index==$(aLi).length-1){
                                        index=$(aLi).length-1;
                                        clearInterval(timer1);
                                        timer1=setInterval(function(){
                                            (function(t){
                                                move(aLi[t],
                                                    {
                                                        left:arr[t].left,
                                                        top:arr[t].top,
                                                        width:150,
                                                        height:150
                                                    },
                                                    {
                                                        complete:function(){
                                                            if(t==0){
                                                                onOff=true;
                                                            }
                                                        }
                                                    }
                                                );
                                            })(index);

                                            index--;
                                            if(index==-1){
                                                clearInterval(timer1);//当所有li都出现了，让定时器关闭。
                                            }
                                        },100)
                                    }
                                }
                            }
                        );
                    })(count);
                    count++;
                    if(count==$(aLi).length){
                        clearInterval(timer);//当所有li都消失了，让定时器关闭。
                    }
                },100);

            });
        })();
    });
})();