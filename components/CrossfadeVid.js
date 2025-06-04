import $ from 'jquery'


$(document).ready(function(){

    $('.play-pause-btn').on('click',function(){
     
    if($(this).attr('data-click') == 1) {
    $(this).attr('data-click', 0)
    $(this).text('Pause')
    $('#video')[0].play();
    } else {
    $(this).attr('data-click', 1)
    $(this).text('Play')
    $('#video')[0].pause();
    }
     
    });
    
    });