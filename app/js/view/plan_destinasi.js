$(document).on('click','button' , function(){
  var actionFor = $(this).attr('data-actionFor')
  $(this).parents('body').find('.'+actionFor).addClass('active')
})
$(document).ready(function() {
    
$(".btn-js-action.close-btn").on('click', function(){
    $(this).parent().parent().removeClass("active")
});
//$(".seedetile").on('click', function(){
////  console.log()
//    if($(this).closest(".pad5").next().css("display") == "block"){
//        $(this).children(".pointer").text("LIHAT DETAIL")
//    }else{
//        $(this).children(".pointer").text("SEMBUNYIKAN")        
//    }
//  $(this).closest(".pad5").next().slideToggle();
//})
    
$(".plus").on('click', function(){
    var val =parseInt($(this).next().text());    
  $(this).next().text(val + 1);
})
$(".mins").on('click', function(){
    var val =parseInt($(this).prev().text());
    if (val > 0){
  $(this).prev().text(val - 1);}
})
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;       
    $("#theDate").attr("value", today);
    
    
    $('.openTmbahan > input[type="checkbox"]').on("change", function(){
//        console.log("te")
        if ($(this).is(':checked')){
            $(this).closest(".smartroom").find('.tmbahan.bgwhite, .doted').slideDown();
        }
        else{
            $(this).closest(".smartroom").find('.tmbahan.bgwhite, .doted').slideUp();
        }
    });
    
    
    
    var swiper = new Swiper('.swiper-penginapan', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: false,
      nextButton: '.nav-btn-right',
      prevButton: '.nav-btn-left',
        breakpoints: {
			1600: {
				slidesPerView: 3,
			},
			1440: {
				slidesPerView: 3,
				spaceBetween: 15
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,                
                slidesPerGroup: 1,
				direction : 'horizontal'
			},
			600: {
				slidesPerView: 1 ,
                slidesPerGroup: 1,
				spaceBetween: 10,
				direction : 'horizontal'
			}
		}
    });
    
    $(".addStep").click(function(){
        var d = $("div[class^='pd-mb-step']:not(.addStep):last").attr("step") ;
        var num = $("div[class^='pd-mb-step']:not(.addStep):last p").text().split(" ");
        var intgr = parseInt(num[0]);
        console.log(intgr)
        $("div[class^='pd-mb-step']:not(.addStep):last").after($("div[class^='pd-mb-step']:not(.addStep):last").clone().attr('step', ++d).html("<p>"+ ++intgr +" "+ num[1] +"</p>"));
    });
    
    
});

function testapend(){
    var c = '<div class="divplan"><div class="relative"><div class="linee"></div><div><div class="bgwhite relative"><div class="pad5"><span><i class="fa fa-sort" aria-hidden="true"></i></span><div class="clearfix"><div class="col-sm-3"><img src="../images/dummy/car.png"></div><div class="col-sm-9 nopadL deskr"><div class="peng"></div><div class="lb">toyota inova</div><div class="grey">5 kursi, 4 pintu, 2 tas besar</div><div class="bintang"></div><div class="review"></div><div class="m-15 clearfix"><div class="col-sm-12"><div class="prise">RP. 350.000</div></div></div></div></div><div class="clearfix"></div><div class="text-right"><div class="seedetile" onclick="opening(this)"><div class="pointer">lihat detail </div><div class="bg-grey"><i class="fa fa-angle-down" aria-hidden="true"></i></div></div></div><div class="absolute le"><div class="bg-grey"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div><div class="bg-grey close"><i class="fa fa-times" aria-hidden="true"></i></div></div></div><div class="divdescrip"><div class="bgGrey"><div class="col-sm-12 lbl">Detile <hr></div><div class="clearfix"></div><div class="col-sm-3"><div>durasi sewa</div><select class="form-control"><option>1 hari</option><option>2 hari</option><option>3 hari</option><option>4 hari</option></select></div><div class="col-sm-5"><div>lokasi penjemputan</div><select class="form-control"><option>Stasiuin Bandung</option><option>Stasiuin jakarta</option><option>Stasiuin bogor</option></select></div><div class="col-sm-4"><div>durasi sewa</div><select class="form-control"><option>08:00</option><option>09:00</option><option>10:00</option><option>11:00</option></select></div><div class="clearfix"></div></div></div></div></div></div></div><div class="cblue pl20"><i class="fa fa-map-marker"></i> 20 km (30 menit)</div>';
    $( c ).insertBefore( ".h15" );
    
}
function opening(this_){
    if($(this_).closest(".pad5").next().css("display") == "block"){
        $(this_).children(".pointer").text("LIHAT DETAIL")
    }else{
        $(this_).children(".pointer").text("SEMBUNYIKAN")        
    }
  $(this_).closest(".pad5").next().slideToggle();
}

var keypressSlider = document.getElementById('keypress');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];

noUiSlider.create(keypressSlider, {
	start: [20, 80],
	connect: true,
	direction: 'rtl',
	range: {
		'min': [0],
		'10%': [10, 10],
		'50%': [80, 50],
		'80%': 150,
		'max': 200
	}
});

keypressSlider.noUiSlider.on('update', function( values, handle ) {
	inputs[handle].value = values[handle];
});


function setSliderHandle(i, value) {
	var r = [null,null];
	r[i] = value;
	keypressSlider.noUiSlider.set(r);
}

// Listen to keydown events on the input field.
inputs.forEach(function(input, handle) {

	input.addEventListener('change', function(){
		setSliderHandle(handle, this.value);
	});

	input.addEventListener('keydown', function( e ) {
		var values = keypressSlider.noUiSlider.get();
		var value = Number(values[handle]);
		// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
		var steps = keypressSlider.noUiSlider.steps();
		// [down, up]
		var step = steps[handle];
		var position;
		// 13 is enter,
		// 38 is key up,
		// 40 is key down.
		switch ( e.which ) {
			case 13:
				setSliderHandle(handle, this.value);
				break;
			case 38:
				// Get step to go increase slider value (up)
				position = step[1];
				// false = no step is set
				if ( position === false ) {
					position = 1;
				}
				// null = edge of slider
				if ( position !== null ) {
					setSliderHandle(handle, value + position);
				}
				break;
			case 40:
				position = step[0];
				if ( position === false ) {
					position = 1;
				}
				if ( position !== null ) {
					setSliderHandle(handle, value - position);
				}
				break;
		}
	});
});

$(window).on('load' , function() {

	var isMobile = $(window).width() < 600

  var parents = $('.plan-destinasi-body .row').offset().left
  var pos = $('.plan-destinasi-cart-price').offset().left
  var bottom = pos - parents

//  console.log('pos' , pos , parents)

  if ( !isMobile) {
    $(".plan-destinasi-cart-price").stick_in_parent({
      offset_top : 80 + 76
    }).on("sticky_kit:stick", function(e) {
      e.target.style.left = pos + 'px'
//      console.log(e.target.style)
    }).on("sticky_kit:unstick", function(e) {
      e.target.style.left = 0 + 'px'
    }).on('sticky_kit:bottom', function(e) {
      e.target.style.left = bottom + 'px'
    }).on('sticky_kit:unbottom', function(e) {
      e.target.style.left = pos + 'px'
    })
  }
  else {
    $(".plan-destinasi-cart-price").trigger("sticky_kit:detach");
  }



	var swiperDestinasi = new Swiper('.swiper-destinasi', {
		direction: 'vertical',
//		autoResize: false,
//		resizeReInit: true,
//		centeredSlides: true,
		slidesPerView: 1,
        slidesPerGroup: 1,
		spaceBetween: 15,
//        autoHeight	: true,
//		initialSlide: 0,
        
      nextButton: '.nav-btn-right',
      prevButton: '.nav-btn-left',
//		breakpoints: {
//			1600: {
//				slidesPerView: 3,
//			},
//			1440: {
//				slidesPerView: 2,
//				spaceBetween: 15
//			},
//			768: {
//				slidesPerView: 2,
//				spaceBetween: 15,
//				direction : 'horizontal'
//			},
//			600: {
//				slidesPerView: 1 ,
//				spaceBetween: 0 ,
//				direction : 'horizontal'
//			}
//		}
	  });

//    var map;
//      function initMap() {
//        map = new google.maps.Map(document.getElementById('marketplace-map'), {
//          center: {lat: -25.363, lng: 131.044},
//          zoom: 8
//        });
//      }
    
	initMap( 'marketplace-map' , {lat: -25.363, lng: 131.044})

	initMap( 'map' , {lat: -25.363, lng: 131.044})

	$(document).on('click','.planbox-body-action',function(){
	$(this).parents('.plan-cart-box').find('.pcb-body').slideToggle()
	})

	$(document).on('click','.modal-pd-double .mpd-single',function(){
	$('.modal-pd-double .mpd-single').removeClass('active')
	$(this).addClass('active')
	var target = $(this).attr('data-target')
	$('.modal-pd-body').removeClass('active')
	$('#'+target).addClass('active')
	if(target == 'with-map'){
		google.maps.event.trigger( document.getElementById('marketplace-map') ,'resize')
		swiperDestinasi.update()
	}
	})

	$(window).resize(function(){
//		console.log(swiperDestinasi)
//		console.log('holla')
		swiperDestinasi.updateSlidesSize()
		swiperDestinasi.updateContainerSize()
	  })

})
