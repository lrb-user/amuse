$(document).ready(function(){

   //클릭시 해당 섹션으로 이동
   $('.tabType1 li').click(function(){
        console.log("확이니ㅣㅣ")
        event.preventDefault();
        $('.tabType1 li').removeClass('active');
        $(this).addClass('active');
        let href=$(this).children('a').attr('href');
        console.log(href)
        let o_top = $(href).offset().top -220;
        console.log("확확인")
        $('html,body').animate({
            scrollTop:o_top
        },1000)
    })

    $(window).scroll(function(){
        event.preventDefault();
        let $scroll = $(window).scrollTop()
        
        // 내용의 높이값
        let $de_item1 = $('#sec1').offset().top -300;
        let $de_item1_end = $de_item1 + $('#sec1').outerHeight();
        let $de_item2 = $('#sec2').offset().top -300;
        let $de_item2_end = $de_item2 + $('#sec2').outerHeight();
        // console.log('sec2' + $scroll, $de_item2_end)
        let $de_item3 = $('#sec3').offset().top -300;
        let $de_item3_end = $de_item3 + $('#sec3').outerHeight();
        let $de_item4 = $('#sec4').offset().top -300;
        let $de_item4_end = $de_item4 + $('#sec4').outerHeight();
        
        // 스크롤의 높이가 내용의 높이값의 끝보다 작으면 탭 활성화
        if ($scroll<= $de_item1 || $scroll <= $de_item1_end) {
            $('.tabType1 li').removeClass("active");
            $('.tabType1 li.sec1').addClass("active");
            console.log($scroll)
            console.log($de_item1_end)
        }
        else if($scroll<= $de_item2 || $scroll<= $de_item2_end){
            $('.tabType1 li').removeClass("active");
            $('.tabType1 li.sec2').addClass("active");
        }
        else if($scroll<= $de_item3 || $scroll<= $de_item3_end){
            $('.tabType1 li').removeClass("active");
            $('.tabType1 li.sec3').addClass("active");
        }
        else if($scroll<= $de_item4 || $scroll<= $de_item4_end){
            $('.tabType1 li').removeClass("active");
            $('.tabType1 li.sec4').addClass("active");
        }
    })
})