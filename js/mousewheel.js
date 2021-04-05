$(document).ready(function(){
    
    let event_scroll = false;
    let scrT = $('html, body').scrollTop();
    let ww = $(window).width();
    let code = 0;
    let downCode = 0;
    
    $(document).keydown(function(e){
        code = e.keyCode;
        if(code == '40'){
            downCode = $('html, body').scrollTop();
        }
        
        if( code == '36' ){
            $('header').stop(0, 0).slideDown(200);
        }else if(code == '33' || code == '38'){
            $('header').stop(0, 0).slideDown(200);
        }else if(downCode > 100 && code == '40'){
            $('header').stop(0, 0).slideUp(200);
        }else if(code == '34' || code == '35'){
            $('header').stop(0, 0).slideUp(200);
        }
        
    });
    
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