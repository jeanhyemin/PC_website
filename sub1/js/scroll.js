$(document).ready(function () {
        
    $('.subNav li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화
    
    $('#content_area div:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var smh= $('.main').height();  //메인 비주얼의 높이
    var h1= $('#content_area div:eq(1)').offset().top-600 ;
    //offset().top=위에서부터거리
    var h2= $('#content_area div:eq(2)').offset().top-700 ;
    var h3= $('#content_area div:eq(3)').offset().top-800 ;

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다

        $('.text').text(Math.floor(scroll));
        //스크롤 좌표의 값을 찍는다.
        //Math.floor 함수 통해서 정수화
        
        //sticky menu 처리
        if(scroll>smh){ 
            $('.navBox').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('.navBox').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }
        
        $('.subNav li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화 계속 spy클래스 치우는중
        
         //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<h1){
            $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화, spy클래스 붙임
            $('#content div:eq(0)').addClass('boxMove1');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=h1 && scroll<h2){
            $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
             $('#content div:eq(1)').addClass('boxMove2');
        }else if(scroll>=h2 && scroll<h3){
            $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
             $('#content div:eq(2)').addClass('boxMove3');
        }
             
     /*   
        //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<500){
            $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('#content div:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=500 && scroll<1100){
            $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
             $('#content div:eq(1)').addClass('boxMove');
        }else if(scroll>=1100 && scroll<1500){
            $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
             $('#content div:eq(2)').addClass('boxMove');
        }else if(scroll>=1500){
            $('.subNav li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
             $('#content div:eq(3)').addClass('boxMove');
        }
        
    */    
   /* --------------- */
    if(scroll>350){
        $('#content .event').addClass('eventfixed');
    }else{
        $('#content .event').removeClass('eventfixed');
    }
   /* --------------- */
    });
});