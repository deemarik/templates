/**
 * Equal Heights Plugin
 * Equalize the heights of elements. Great for columns or any elements
 * that need to be the same size (floats, etc).
 * 
 * Version 1.0
 * Updated 12/10/2008
 *
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com) 
 *
 * Usage: $(object).equalHeights([minHeight], [maxHeight]);
 * 
 * Example 1: $(".cols").equalHeights(); Sets all columns to the same height.
 * Example 2: $(".cols").equalHeights(400); Sets all cols to at least 400px tall.
 * Example 3: $(".cols").equalHeights(100,300); Cols are at least 100 but no more
 * than 300 pixels tall. Elements with too much content will gain a scrollbar.
 * 
 */

(function($){
    $.fn.equalHeights=function(minHeight,maxHeight){
        tallest=(minHeight)?minHeight:0;
        this.each(function(){
            if($(this).height()>tallest){tallest=$(this).height()}
        });
        if((maxHeight)&&tallest>maxHeight) tallest=maxHeight;
        return this.each(function(){$(this).height(tallest)})
    }
})(jQuery)

$(window).load(function(){
    if($(document).width()>767){
        if($('.maxheight').length){$('.maxheight').equalHeights()}
    }
})
$(window).resize(function(){
    $('.maxheight').css({height:'auto'});
    if($(document).width()>767){
        if($('.maxheight').length){$('.maxheight').equalHeights()}
    }
})


$(window).load(function(){
    if($(document).width()>767){
        if($('.maxheight-2').length){$('.maxheight-2').equalHeights()}
    }
})
$(window).resize(function(){
    $('.maxheight-2').css({height:'auto'});
    if($(document).width()>767){
        if($('.maxheight-2').length){$('.maxheight-2').equalHeights()}
    }
})


$(window).load(function(){
    if($(document).width()>767){
        if($('.maxheight-3').length){$('.maxheight-3').equalHeights()}
    }
})
$(window).resize(function(){
    $('.maxheight-3').css({height:'auto'});
    if($(document).width()>767){
        if($('.maxheight-3').length){$('.maxheight-3').equalHeights()}
    }
})


$(window).load(function(){
    if($(document).width()>767){
        if($('.maxheight-4').length){$('.maxheight-4').equalHeights()}
    }
})
$(window).resize(function(){
    $('.maxheight-4').css({height:'auto'});
    if($(document).width()>767){
        if($('.maxheight-4').length){$('.maxheight-4').equalHeights()}
    }
})


$(window).load(function(){
    if($(document).width()>767){
        if($('.maxheight-5').length){$('.maxheight-5').equalHeights()}
    }
})
$(window).resize(function(){
    $('.maxheight-5').css({height:'auto'});
    if($(document).width()>767){
        if($('.maxheight-5').length){$('.maxheight-5').equalHeights()}
    }
})