

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


