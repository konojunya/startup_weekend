(function($){

	$.ajax({
		url: "/getdata",
		type: "GET",
		success: function(item){
			new Vue({
				el: "#app",
				data: {
					live: item.data
				}
			})
		}
	})

	setTimeout(function(){
		var cards = $(".live_card");
		var objArray = [];
		for(var i = 0; i < cards.length; i++){
			objArray.push(".card-"+i);
		}
		TweenMax.staggerTo(objArray, 0.5, {opacity: 1}, 0.2);
	},500);

	$(".live_list").on("click",".go-live-btn",function(){
		TweenMax.to(".live_list", 0.5, {left: "-100%",ease: Expo.easeInOut}, 0.5);
		TweenMax.to(".live_detail", 0.5, {left: "0%",ease: Expo.easeInOut}, 0.5);
	})
	$(".back_to_list").on("click",function(){
		TweenMax.to(".live_list", 0.5, {left: "0%",ease: Expo.easeInOut}, 0.5);
		TweenMax.to(".live_detail", 0.5, {left: "100%",ease: Expo.easeInOut}, 0.5);
	})

	$(".go-out-btn").on("click",function(){
		$(".loading").fadeIn();
		$(".overlay").fadeIn();
		setTimeout(function(){
			$(".loading").hide();
			$(".overlay").fadeOut();
			window.location.href = "/route";
		},3000)
	})

	$('.plans').flickity({
	  contain: true,
	  wrapAround: true,
	  pageDots: false
	});

	$(".back-list").on("click",function(){
		window.location.href = "/";
	});

	$(".fav-btn").on("click",function(){
		$(this).html('<i class="fa fa-heart fa-2x" aria-hidden="true"></i>');
		$(".overlay").fadeIn();
		$(".love").fadeIn();
		setTimeout(function(){
			$(".overlay").fadeOut();
			$(".love").fadeOut();
		},1500)
	})

})(jQuery);