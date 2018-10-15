

function closeM(){
    $("#modalkursi , #ModalFlightChoose, #ModalTrainChoose , .bgBlack, #modaltanpakursi").hide();
}
$( document ).ready(function() {
$(".tbl").click(function(){
    if($(this).next().hasClass("on")){
        $(".sortd-menu").removeClass("on");
        $(this).next().removeClass("on");
        $(".bgout").removeClass("in");
    }else{
        $(".sortd-menu").removeClass("on");
        $(this).next().addClass("on");
        $(".bgout").addClass("in");
    }
})


$('.bgout').bind('click', function () {
      $(".sortd-menu").removeClass("on");
    $(this).removeClass("in");
});

//bus
//===========================
$(".isiKursi > span:not(.ada)").click(function(){
    if($(this).hasClass("pilih")){
        $(this).removeClass("pilih")
    }else{
        $(this).addClass("pilih")
    }
});
$(".naikT").click(function(){
    if ($(this).hasClass("line")){
        $(this).closest(".oneList").find(".opennaikT").slideToggle();
        $(this).removeClass("line");
    }
    else{
        $(".isiTab > *").slideUp();
        $(".tabF > *>*, .btnOrage").removeClass("line");
        $(this).closest(".oneList").find(".opennaikT").slideToggle();
        $(this).toggleClass("line");
    }

});
$(".fasilitas").click(function(){
    if ($(this).hasClass("line")){
        $(this).closest(".oneList").find(".openfasilitas").slideToggle();
        $(this).removeClass("line");
    }
    else{
        $(".isiTab > *").slideUp();
        $(".tabF > *>*, .btnOrage").removeClass("line");
        $(this).closest(".oneList").find(".openfasilitas").slideToggle();
        $(this).toggleClass("line");
    }
});
$(".btnpesanan").click(function(){
    $("#modaltanpakursi, .bgBlack").show();
});
$(".btnDuduk").click(function(){
    $("#modalkursi, .bgBlack").show();
});
//    end bus
//    =================
//    pesawat
//    ==============
    
    $('.FlightChooseTwo').click(function(){    
        $("#ModalFlightChoose, .bgBlack").show();
    });
    $('.see').click(function(){    
        $(".otherdatediv").slideToggle();
    });
    $('.price').click(function(){    
        $('.price').removeClass('slick-current');
        $(this).addClass('slick-current');
    });
    
    $('.slickprice').slick({
      dots: false,
      infinite: false,
      speed: 300,
//      centerMode: true,
//      infinite: true,
//      rtl: true,
//      centerPadding: '0px',
//      initialSlide: 3,
      slidesToShow: 8,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        }
      ]
    });
    $('.slickpriceTrain').slick({
      dots: false,
      infinite: false,
      speed: 300,
//      centerMode: true,
//      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        }
      ]
    });
	
    setTimeout(function(){
        $(".otherdatediv").slideToggle();
    }, 1);
    $('.sowDetile').click(function(){    
        $(".InfoShow").slideUp();
        $(".detileShow").slideToggle();
    });
    $('.sowInfo').click(function(){    
        $(".detileShow").slideUp();
        $(".InfoShow").slideToggle();
    });
    
//    kereta
//    =======================
    
$(".detilkereta").click(function(){
    if ($(this).hasClass("line")){
        $(this).closest(".boxTrain").find(".opendetil").slideToggle();
        $(this).removeClass("line");
    }
    else{
        $(".isiTab > *").slideUp();
        $(".tabF > *>*, .btnOrage").removeClass("line");
        $(this).closest(".boxTrain").find(".opendetil").slideToggle();
        $(this).toggleClass("line");
    }

});
$(".infokereta").click(function(){
    if ($(this).hasClass("line")){
        $(this).closest(".boxTrain").find(".openinfo").slideToggle();
        $(this).removeClass("line");
    }
    else{
        $(".isiTab > *").slideUp();
        $(".tabF > *>*, .btnOrage").removeClass("line");
        $(this).closest(".boxTrain").find(".openinfo").slideToggle();
        $(this).toggleClass("line");
    }
});
$('.TrainChooseTwo').click(function(){    
    $("#ModalTrainChoose, .bgBlack").show();
});

});


