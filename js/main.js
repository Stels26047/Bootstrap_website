/* Выдвижение панели меню */

function hideButton(){
    $('#navbarResponsive').slideDown(function(){
        $('#hideIcon').hide()
        $('#showIcon').show()
    })
}

function showButton(){
    $('#navbarResponsive').slideUp(function(){
        $('#hideIcon').show()
        $('#showIcon').hide()
    })
}

$('#showIcon').bind('click',showButton);
$('#hideIcon').bind('click',hideButton);

/* Листание слайдов */

function nextSlideTwo(){
    $('.slide-1').hide()
    $('.slide-2').show()
}

function nextSlideThree(){
    $('.slide-2').hide()
    $('.slide-3').show()
}

function previousSlideTwo(){
    $('.slide-3').hide()
    $('.slide-2').show()
}

function previousSlideOne(){
    $('.slide-2').hide()
    $('.slide-1').show()
}

function previousSlideThree(){
    $('.slide-1').hide()
    $('.slide-3').show()
}

function nextSlideOne(){
    $('.slide-3').hide()
    $('.slide-1').show()
}

$('.arrow-right-1').bind('click',nextSlideTwo);
$('.arrow-right-2').bind('click',nextSlideThree);
$('.arrow-left-3').bind('click',previousSlideTwo);
$('.arrow-left-2').bind('click',previousSlideOne);
$('.arrow-right-3').bind('click',nextSlideOne);
$('.arrow-left-1').bind('click',previousSlideThree);

/* Открытие закрытие gifs картинок */

function showGifs(){
    $('#gifs').show(function (){
        $('#toggle-close').show()
        $('#toggle-open').hide()   
    })
}

function hideGifs(){
    $('#gifs').hide(function (){
        $('#toggle-close').hide()
        $('#toggle-open').show()   
    })
}

$('#toggle-open').bind('click',showGifs);
$('#toggle-close').bind('click',hideGifs);