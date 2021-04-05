$(document).ready(function(){
    
    /* 검색 창 나오고 닫음 */
    $('.search_icon').click(function(){
        $('.hidden_search_box').slideDown(300);
    });
    $('.close_btn').click(function(){
        $('.hidden_search_box').slideUp(300);
    });
    
    /* 히든 메뉴 */
    let data_menu = 0;
    let data_tab = 0;
    const menu_bold = (node)=>{$(node).eq(data_tab).css({ color: '#7b6159', fontWeight: 800, });}
    const menu_week = (node)=>{$(node).eq(data_tab).css({ color: '#7b6159', fontWeight: 400, });}
    $('.tab_sub').each(function(index){
        $(this).attr('data-tab', index);
    }).hover(function(){
        data_tab = $(this).attr('data-tab');
        menu_bold('.tab_main_menu>a');
    }, function(){
        menu_week('.tab_main_menu>a');
    });
    
    $('.tab_main_menu>a').each(function(){ }).hover(function(){ menu_bold(this); }, function(){ menu_week(this); });
    
    $('.sub_menu').each(function(index){
        $(this).attr('data-sub', index);
    });
    
    $('.header_2>.in_header>.main_menu_box>.main_menu').each(function(index){
        $(this).attr('data-menu', index);
    });
    
    $('.main_menu').each(function(index){
        if(index == 5){ return false; }
        $(this).attr('data-menu', index);
    }).stop().mouseenter(function(){
        data_menu = $(this).attr('data-menu');
        
        if(data_menu == 0 || data_menu == 3){
            $('.hidden_sub_menu').css({ height: 22, padding: '20px 0', });
        }else if(data_menu == 4){
            $('.hidden_sub_menu').css({ height: 0, padding: '0', });
        }else if(data_menu == 1 || data_menu ==2){
            $('.hidden_sub_menu').css({ height: 230, padding: '20px 0', });
        }
        $('.sub_menu[data-sub = '+data_menu+']').css({ display: 'flex', });
        $('.sub_menu[data-sub != '+data_menu+']').css({ display: 'none', });
        $('.sub_menu').eq(data_menu).addClass('sub_menu_select');
        $('.main_menu').children('a').removeClass('onMouse');
        $(this).children('a').addClass('onMouse');
        
    }).mouseleave(function(){
        if(data_menu == 4){
            $('.main_menu').children('a').removeClass('onMouse');
        }
    });
    
    $('.main_menu_box').stop().mouseover(function(){
        $('.hidden_sub_menu').css({ zIndex: 3, }).stop().animate({ opacity: 1, }).css({ display: 'block', });
        $('.sub_menu').eq(data_menu).addClass('sub_menu_select');
    });
    
    $('.hidden_sub_menu').stop().mouseleave(function(){
        $('.hidden_sub_menu').stop().animate({ opacity: 0, }).css({ heght: 0, zIndex: -1, display: 'none', });
        $('.sub_menu').removeClass('sub_menu_select');
        $('.main_menu').children('a').removeClass('onMouse');
    });
    
    /* 탭 부분 히든 메뉴 */
    let tab_pan = false;
    $('.ham_img').click(function(){
        $('.tab_hidden_menu').slideToggle(300);
        if(!tab_pan){
            tab_pan = true;
        }else{
            tab_pan = false;
        }
    });
    
    /* 쥬얼리 부분 */
    let data_jew = 0;
    $('.jew_con').each(function(index){
        $(this).attr('data-jew', index);
    }).click(function(){
        data_jew = $(this).attr('data-jew');
        $('.jew_con').removeClass('active2');
        $('.jew_item').removeClass('jew_select');
        $('.jew_text').removeClass('jew_text_select');
        $(this).addClass('active2');
        $('.jew_item').eq(data_jew).addClass('jew_select').fadeOut(0).fadeIn(500);
        $('.jew_text').eq(data_jew).addClass('jew_text_select').fadeOut(0).fadeIn(500);
    });
    /* 시계 부분 */
    let data_watch = 0;
    $('.watch_con').each(function(index){
        $(this).attr('data-watch', index);
    }).click(function(){
        data_watch = $(this).attr('data-watch') - 6;
        $('.watch_con').removeClass('active');
        $('.watch_item').removeClass('watch_select');
        $('.watch_text').removeClass('watch_text_select');
        $(this).addClass('active');
        $('.watch_item').eq(data_watch).addClass('watch_select').fadeOut(0).fadeIn(500);
        $('.watch_text').eq(data_watch).addClass('watch_text_select').fadeOut(0).fadeIn(500);
    });
    /* sns 부분 */
    let data_sns = 0;
    $('.sns_type>div').each(function(index){
        $(this).attr('data-sns', index);
    }).click(function(){
        data_sns = $(this).attr('data-sns');
        $('.sns_type>div').removeClass('sns_active');
        $('.sns_detail').removeClass('sns_box_active');
        $(this).addClass('sns_active');
        $('.sns_detail').eq(data_sns).addClass('sns_box_active');
    });
    
    /* 약관보기 */
    
    $('.use_law u').click(function(){
        $('.agree_text').css({ zIndex: 3, opacity: 1, });
        if($('#agree').is(':checked') == true){
            $('.modal_agree').html('동의취소하기');
        }else{
            $('.modal_agree').html('동의하기');
        }
    });
    $('.modal_agree, .modal_close').click(function(){
        $('.agree_text').css({ zIndex: -1, opacity: 0, });
    });
    
    /* 제출하기 경고 */
    $('.scri_btn').click(function(){
        if($('.email_box').val() == ''){
            alert('기입한 것을 다시 한 번 확인해보세요.');
        }else if($('#female').is(':checked') == false && $('#male').is(':checked') == false){
            alert('상품 추천을 받고 싶은 성별에 체크해주세요.');
        }else if($('#agree').is(':checked') == false){
            alert('개인정보 이용동의에 체크해주세요.');
        }
        return false;
    });
});
