
function showPanel(panelName){
    var panelClone = $( "#" + panelName).clone();
    $('.small-size-panel').hide();
    panelClone.appendTo("#main-container");
    panelClone.show();
    $('#navbar-link').off('click', '**');
    $('#navbar-link').html('&#10094; Voltar');
    $('#navbar-link').on('click', function(){
        panelClone.remove();
        $('.small-size-panel').show();
        $('#navbar-link').html('Volume');
    })    
}
  
//eu sei que nao ficou perfeito, mas tive pouco tempo pra fazer.
function animateWater(element) {
    element = element || $(".cup-container .agua");
    var top = element.parent().attr('data-top');
    element.css('top', top);
    element.animate({
        left: '+=85%'
    }, 3000, 'linear', function(){
        if($(this).hasClass('agua1')){
            $(this).css('left', '20%');
        }
        if($(this).hasClass('agua2')){
            $(this).css('left', '-80%');
        }
        $(this).parent().prepend($(this));
        animateWater($(this));
    });
}
$(function() {
    $(".cup-container .agua").each(function(){
        animateWater($(this));
    })
});
