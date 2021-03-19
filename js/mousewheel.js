$(document).ready(function(){
    
    let event_scroll = false;
    let scrT = $('html, body').scrollTop();
    let ww = $(window).width();
    
    if( scrT > 200 && ww > 1025){
        $('header').css({ display: 'none', });
    }
    
    $('html, body').on('mousewheel DOMMouseScroll', function(e){
        
        const E = e.originalEvent;
        delta = 0;
        
        if(E.detail){
            delta = E.detail * -40;
        }else{
            delta = E.wheelDelta;
        }
        
        $(window).stop(0, 0).scroll(function(){
            scrT = $('html, body').scrollTop();
        });
        
        if(delta < 0  && event.target.className != 'agree_con'){
            $('header').stop(0, 0).slideUp(200);
        }else if(delta > 0 && scrT > 200 && event.target.className != 'agree_con'){
            $('header').stop(0, 0).slideDown(200);
        }else if(scrT <= 200){
            $('header').stop(0, 0).css({ display: 'block', });
        }
        
    });
    
}); // end 