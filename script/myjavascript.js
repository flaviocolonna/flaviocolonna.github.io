var opened = false;
//questa variabile mi serve per capire se ho aperto il menu o meno
var subjectClicked = false;
var menuCompresso = false;
var mobile = navigator.userAgent.indexOf("Mobile");
var main = function() {
	if(mobile>0) {
		$(".brand-logo").addClass("right");
	}else {
		$(".brand-logo").addClass("left");
	}
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left'
    }
  );
};
function scrollToId(id) {
	var scrollY = $(id).offset().top-80;
	TweenMax.to(window, 0.5, {
		scrollTo : {
			'y' : scrollY,
			'x' : 0
		},
		ease : Power4.easeOut
	});
	$('.button-collapse').sideNav('hide');
};
$(document).ready(main);
