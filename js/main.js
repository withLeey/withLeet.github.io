/**
 * Created by Z on 2017/3/22.
 */
var _index = 0;
var timer;
$(function(){
    $("#fullpage").fullpage({
        anchors : ['page1','page2','page3','page4'],
        menu : true,
        navigation : true,
        navigationColor : "#ffffff",
        afterLoad : function(anchorLink,index){
            switch (index){
                case 2 :
                    var _text = "YOU CAN ACTION THE URL“http://widthleey.github.io”.";
                    $(".text2").text("");
                    $(".page2_text").stop().animate({
                        "width" : "800px"
                    },800,function(){
                        autotype($(".text2"),_text);
                    });
                    break;
            }
        },
        onLeave:function(index){
            if(index==2){
                _index = 0;
                clearInterval(timer);
                $(".text2").text("");
                $(".page2_text").stop().animate({
                    "width" : 0
                },800);
            }
        }
    });
});

function autotype(obj,str){

    timer = setInterval(function(){
        var current = str.substr(_index,1);
        if(current == "“"){
            _index = str.indexOf('“',_index) + 1;
        }else{
            _index++;
        }
        obj.html(str.substring(0,_index));
        if(_index >= str.length){
            clearInterval(timer);
        }
    },100);

}