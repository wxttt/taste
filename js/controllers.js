'use strict';

/* Controllers */
function startCtrl($scope){
    $scope.beginTest = function(){
        location.href = "#/step1";
    }
    window.result = [];
}

function dragCtrl($scope){
    $scope.result = '';
    $scope.defaultIndex = 10;
    $scope.drags = [[],[],[],[],[],[],[]];
    $scope.lastDrag = {};

    var posConfig = {
        'item-1': {left:10,top:80},
        'item-2': {left:90,top:80},
        'item-3': {left:170,top:80},
        'item-4': {left:250,top:80},
        'item-5': {left:50,top:160},
        'item-6': {left:130,top:160},
        'item-7': {left:210,top:160}
    };



    $scope.watchDrag = function(){
        if(!$scope.target)
            return;
        var index = $($scope.target).data('type');
        if(!$scope.drags[index].length)
            return

        var drag = $scope.drags[index];

        for(var i = 0; i < drag.length; i++){
            var left = $($scope.target).offset().left;
            var top = $($scope.target).offset().top;
            var x_offset = -($scope.lastDrag.pageX - drag[i].pageX);
            var y_offset = -($scope.lastDrag.pageY - drag[i].pageY);

            left = left + x_offset;
            top = top + y_offset;

            $scope.lastDrag = drag[i];


            $scope.target.style.left = left + 'px';
            $scope.target.style.top = top + 'px';
        }
    }

    $scope.onDragStart = function($event){
        if($event.target.className.search('s-shadow') == -1)
            return;
        else
            $scope.target = $event.target;
        $scope.lastDrag = $event.gesture.center;
        $scope.target.style.zIndex = $scope.defaultIndex +1;
        $scope.defaultIndex += 1;

    }

    $scope.onDrag = function($event){
        var index = $($scope.target).data('type');
        $scope.drags[index] = [];

        if($event.target == $scope.target)
            $scope.drags[index].push($event.gesture.center);

    };

    $scope.onDragEnd = function($event){
        var index = $($scope.target).data('type');
        $scope.drags[index] = [];

        $scope.checkPos();
    };


    $scope.jump = function(type){
        var hash = location.hash;
        switch(hash){
            case '#/step1':
                $scope.jump1(type);
                break;
            case '#/step2-1':
                $scope.jump21(type);
                break;
            case '#/step2-2':
                $scope.jump22(type);
                break;
            case '#/step2-3':
                $scope.jump23(type);
                break;
            case '#/step3-1':
                $scope.jump31(type);
                break;
            case '#/step3-2':
                $scope.jump32(type);
                break;
            case '#/step3-3':
                $scope.jump33(type);
                break;
            default:
                return;
        }
    }

    $scope.jump1 = function(type){
        window.result[0] = type;
        switch(type){
            case 1:
                location.href = '#/step2-1';
                break;
            case 2:
                location.href = '#/step2-1';
                break;
            case 3:
                location.href = '#/step2-2';
                break;
            case 4:
                location.href = '#/step2-2';
                break;
            case 5:
                location.href = '#/step2-2';
                break;
            case 6:
                location.href = '#/step2-3';
                break;
            case 7:
                location.href = '#/step2-3';
                break;
            default :
                location.href = '#/step2-1';
        }
    };

    //第二题国语/粤语分支
    $scope.jump21 = function(type){
        console.log('window.result', window.result[0]);
        window.result[1] = type;
        switch(type){
            case 1:
                if(window.result[0] == 1)
                    location.href = '#/step3-2';
                else if(window.result[0] == 2)
                    location.href = '#/step3-3';
                break;
            case 2:
                if(window.result[0] == 1)
                    location.href = '#/step3-1';
                else if(window.result[0] == 2)
                    location.href = '#/step3-3';
                break;
            case 3:
                if(window.result[0] == 1)
                    location.href = '#/step3-1';
                else if(window.result[0] == 2)
                    location.href = '#/step3-3';
                break;
            default:
                location.href = ''
        }
    };

    $scope.jump22 = function(type){
        window.result[1] = type;
        switch(type){
            case 1:
                location.href = '#/step3-4';
                break;
            case 2:
                location.href = '#/step3-4';
                break;
            default:
                location.href = '#/step3-4'
        }
    };


    $scope.jump23 = function(type){
        window.result[1] = type;
        console.log('type is', type);
        switch(type){
            case 1:
                location.href = '#/step3-4';
                break;
            case 2:
                console.log('case 2');
                location.href = '#/step3-4';
                break;
            case 3:
                location.href = '#/step3-4';
                break;
            default:
                location.href = ''
        }
    };


    $scope.jump31 = function(type){
        window.result[2] = type;
        switch(type){
            case 1:
                location.href = '#/step4';
                break;
            case 2:
                location.href = '#/step4';
                break;
            case 3:
                location.href = '#/step4';
                break;
            default:
                location.href = '#/step4';
        }
    };

    $scope.jump32 = function(type){
        window.result[2] = type;
        switch(type){
            case 1:
                location.href = '#/step4';
                break;
            case 2:
                location.href = '#/step4';
                break;
            case 3:
                location.href = '#/step4';
                break;
            default:
                location.href = '#/step4';
        }
    };

    $scope.jump33 = function(type){
        window.result[2] = type;
        switch(type){
            case 1:
                location.href = '#/step4';
                break;
            case 2:
                location.href = '#/step4';
                break;
            case 3:
                location.href = '#/step4';
                break;
            default:
                location.href = '#/step4';
        }
    };

    $scope.checkPos = function(){
        var left = $($scope.target).offset().left;
        var top = $($scope.target).offset().top;

        var stLeft = $('.tgt').offset().left;
        var stTop = $('.tgt').offset().top;

        var offsetX = left - stLeft;
        var offsetY = top - stTop;

        if(0<offsetX && offsetX<36 && 0 < offsetY && offsetY<10){
            clearInterval($scope.timeCtl);
            $scope.target.style.left = stLeft + 16 + 'px';
            $scope.target.style.top = stTop + 2 + 'px';

            var index = $($scope.target).data('type');
            $scope.jump(index)
        }

    }

    $scope.timeCtl = setInterval($scope.watchDrag, 10);
}



function musicCtrl($scope){
    console.log('result is', window.result);
    $scope.like = function(){
        location.href = '#/end';
    }

    $scope.dislike = function(){
        location.reload();
    }

}

function step2Ctrl($scope){
    $scope.name = "step2";
    $scope.jump = function(){
        location.href = '#/step3-1';
    }
}

function step3Ctrl($scope){
    $scope.name = "step3";
    $scope.jump = function(){
        location.href = '#/step4';
    }
}

function step4Ctrl($scope){
    $scope.name = "step4";
    $scope.jump = function(){

        location.href = '#/end'
    }
}

function endCtrl($scope){
    console.log('result is', window.result);
    alert(navigator.userAgent);

    $scope.name = 'end';
    var resultConfig = {
        '1': '经鉴定，不当麦霸会死的普通青年”这个称号你绝对是当之无愧。给跪了，去KTV绝不甘心打酱油的熊孩子！',
        '2': '经鉴定，最怕暴露年龄的潮流追随者"这个称号非你莫属！蜀黍，其实怀旧复古也是一种态度哦',
        '3': '原来你就是传说中“天生傲娇的古典派掌门人”？！亲，敢不敢就喜欢这么经典又传统的！',
        '4': '有点流行？有点保守？你就是那“假装走在流行前端的保守派”。妈妈说，流行歌曲神马的是浮云，跟着广场舞总没错',
        '5': '小清新神马的都是浮云！“流连声色场所的失足青年”才是你的本来面目，哟哟~黑喂狗~快和我们躁起来',
        '6': '经鉴定，你是“高端洋气的富二代”一枚，屌丝这个词和你毫无关联，什么叫高雅艺术，你们感受一下！',
        '7': '承认吧，这就是你——“来自二次元的御宅族骚年”。既宅又腐，前途未卜，听ACG音乐才是王道！',
        '8': '经鉴定，你是“花美男颜控的忠实粉shi”一枚，欧巴~思密达~么么哒',
        '9': '排行榜神马的都是浮云！你就是那“非主流的重度爱好者”，小语种强迫症的伤不起啊'
    }

    var index = Math.floor(Math.random()*9 +1);

    $scope.result = resultConfig[index];
    //$scope.result = result[];
}

