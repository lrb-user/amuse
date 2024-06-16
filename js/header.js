$(document).ready(function(){

    let $btnTop = $('.fixedTop');
    $btnTop.click(btnTopScroll);
    function btnTopScroll(){
        $('html,body').animate({
            scrollTop:'0'
        },1000)
    }

    //2. 햄버거 버튼 클릭시 메뉴 보임.
    let $backPan = $('.backPan');
    let $hamBtn = $('.hamBtn');
    let $mobileMenu = $('.mMenu');
    $hamBtn.click(hamBtnMenu);
    function hamBtnMenu(){
        $mobileMenu.toggleClass('active')
        $backPan.toggleClass('active')
    }

});