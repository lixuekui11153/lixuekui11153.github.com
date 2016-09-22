/**
 * Created by Sixer on 2016/9/22.
 */
(function(){
    DOMReady(function(){
        var oA=new Audio();
        oA.src='../mp3/夜的钢琴曲.mp3';
        oA.play();
        var oUl=document.getElementById('ul1');
        var aLi=oUl.getElementsByTagName('li');
        var oBox=document.getElementById('box');
        var aA=document.getElementsByTagName('a');
        var aLi1=oBox.getElementsByTagName('li');
        for(var i=0;i<aLi.length;i++){
            (function(index){
                aLi[i].onmouseenter=function(){
                    aLi[3].style.background='none';
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
    });
})();
