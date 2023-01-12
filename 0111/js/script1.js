$(function(){
    //.board li a를 누르면
    $('.board li a').click(function(){
        //눌러진 a의 부모요소에 'on'클래스가 추가되고, 부모의 형제요소들은 .on이 지워진다. 
        $(this).parent().addClass('on').siblings().removeClass('on');
    });

});
$(document).ready(function(){
 
    $('.menu_btn>a').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            left:0
        });  
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            left: '-' + 100 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });

});