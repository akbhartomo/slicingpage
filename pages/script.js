

function closeM(){
    $("#modalkursi , #ModalFlightChoose, #ModalTrainChoose , .bgBlack, #modaltanpakursi").hide();
}
$( document ).ready(function() {
$(".isiKursi > span:not(.ada)").click(function(){
    if($(this).hasClass("pilih")){
        $(this).removeClass("pilih")
    }else{
        $(this).addClass("pilih")
    }
})
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
    $('.changeDepPesawat').click(function(){    
        $(".two").removeClass("col-sm-8 sh ").addClass("col-sm-4 withOpc opacty");
        $(".one").removeClass("col-sm-4 hide withOpc opacty").addClass("col-sm-8");
        $(this).closest(".sumary").addClass("hide")
    });
    $('.FlightChoose').click(function(){    
        $(this).closest(".one").removeClass("col-sm-8").addClass("col-sm-4 withOpc hide");
        $(".two").removeClass("col-sm-4 withOpc opacty").addClass("col-sm-8 sh");
        $(".sumary").removeClass("hide");
        $(".sumary").find(".s_lbl b").text($(this).closest(".boxTrain").children(".col-sm-12").find(".lbl").text());
        $(".sumary").find(".s_lblm").text($(this).closest(".boxTrain").children(".col-sm-12").find(".grey.m").text());
        $(".sumary").find(".s_t1 ").text($(this).closest(".boxTrain").children().find(".t1").text());
        $(".sumary").find(".s_s1").text($(this).closest(".boxTrain").children().find(".s1").text());
        $(".sumary").find(".s_t2 ").text($(this).closest(".boxTrain").children().find(".t2").text());
        $(".sumary").find(".s_s2").text($(this).closest(".boxTrain").children().find(".s2").text());
        $(".sumary").find(".s_d2").text($(this).closest(".boxTrain").children().find(".s2").text());
        $(".sumary").find(".s_d2").text($(this).closest(".boxTrain").children().find(".d1").text());
        $(".sumary").find(".s_orange b").text($(this).closest(".boxTrain").children().find(".orange").text());
    });
    $('.TrainChooseTwo').click(function(){    
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
    
    $('.changeDep').click(function(){    
        $(".two").removeClass("col-sm-8 sh ").addClass("col-sm-4 withOpc opacty");
        $(".one").removeClass("col-sm-4 hide withOpc opacty").addClass("col-sm-8");
        $(this).closest(".sumary").addClass("hide")
    });
    $('.TrainChoose').click(function(){    
        $(this).closest(".one").removeClass("col-sm-8").addClass("col-sm-4 withOpc hide");
        $(".two").removeClass("col-sm-4 withOpc opacty").addClass("col-sm-8 sh");
        $(".sumary").removeClass("hide");
        $(".sumary").find(".s_lbl b").text($(this).closest(".boxTrain").children(".col-sm-12").find(".lbl").text());
        $(".sumary").find(".s_lblm").text($(this).closest(".boxTrain").children(".col-sm-12").find(".grey.m").text());
        $(".sumary").find(".s_t1 ").text($(this).closest(".boxTrain").children().find(".t1").text());
        $(".sumary").find(".s_s1").text($(this).closest(".boxTrain").children().find(".s1").text());
        $(".sumary").find(".s_t2 ").text($(this).closest(".boxTrain").children().find(".t2").text());
        $(".sumary").find(".s_s2").text($(this).closest(".boxTrain").children().find(".s2").text());
        $(".sumary").find(".s_d2").text($(this).closest(".boxTrain").children().find(".s2").text());
        $(".sumary").find(".s_d2").text($(this).closest(".boxTrain").children().find(".d1").text());
        $(".sumary").find(".s_orange b").text($(this).closest(".boxTrain").children().find(".orange").text());
    });
    $('.TrainChooseTwo').click(function(){    
        $("#ModalTrainChoose, .bgBlack").show();
    });
});



