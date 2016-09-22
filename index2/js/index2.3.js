/**
 * Created by Sixer on 2016/9/22.
 */
window.onstorage=function(){
    var data= {
        "name": localStorage.name,
        "pro": localStorage.pro,
        "job": localStorage.job
    }

}
var app=angular.module('text',[]);
app.controller('msg_add',function($scope){
    //上来先让内容清空
    $scope.data=[];
    $scope.username='';
    $scope.pro='';
    $scope.job='';

    //点击添加内容。
    $scope.add=function(){//判断输入框是否有内容，有的话再push.

        if($scope.username&&$scope.pro&&$scope.job){
            $scope.data.push({
                name:$scope.username,
                pro:$scope.pro,
                job:$scope.job
            });
            localStorage.name=$scope.username;
            localStorage.pro=$scope.pro;
            localStorage.job=$scope.job;

        }else{
            alert('你是不是傻！！！');
        }

        //获取到信息后再清空输入框内容。
        $scope.username='';
        $scope.pro='';
        $scope.job='';
    }
    $scope.delete=function(index){//点击删除的时候，因为data为数组，删除当前数组这一项就可以，$index为索引，
        //angular默认这样直接使用。
        $scope.data.splice(index,1);
        localStorage.clear();
    };
    $scope.kp=function(ev){
        if(ev.keyCode==13){
            this.add();
        }
    };
})