var opened = false;
//questa variabile mi serve per capire se ho aperto il menu o meno
var subjectClicked = false;
var menuCompresso = false;
var main = function() {
	//menu di navigazione
	$("#menu").click(function(e) {
		e.preventDefault();
		if (opened === false) {
			open();
		} else {
			close();
		}
	});
	$("#project-link").click(function() {
		close();
		scroll('#progetti');
	});
	$("#about-link").click(function() {
		close();
		scroll('#about-me');
	});
	$("#contact-link").click(function() {
		close();
		scroll('#contact');
	});
	$("#subjects").click(function() {
		close();
		scroll('#experiences');
	});

	$(".sidebar-nav a").hover(function() {
		var i = document.createElement("i");
		$(i).addClass("fa fa-hand-o-right").insertBefore(this);
	}, function() {
		$(this).prev().remove();
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() >= 42 && menuCompresso === false) {
			$('#bar-menu h4').css('display', 'none');
			TweenLite.to($('#bar-menu'), 2, {
				width : '150px'
			});

			menuCompresso = true;
		} else if ($(window).scrollTop() < 40 && menuCompresso === true) {
			var tl = new TimelineMax();
			tl.to($('#bar-menu'), 2, {
				width : '100%'
			}).addCallback(function() {
				$('#bar-menu h4').css('display', 'block');
				menuCompresso = false;
			});
		}
	});

};
var scroll = function(id) {
	var scrollY = $(id).offset().top;
	TweenMax.to(window, 2.5, {
		scrollTo : {
			y : scrollY,
			x : 0
		},
		ease : Power4.easeOut
	});
};
var open = function() {
	var tl = new TimelineMax();
	tl.to($("#sidebar-wrapper"), 1, {
		'margin-left' : "0px",
		left : '0px',
		width : '250px',
	}, 'feature').addCallback(function() {
		$('.sidebar-nav').toggle(400);
		$('#sidebar-wrapper h1').fadeIn(400);
	});
	opened = true;
};
var close = function() {
	$('#page-content-wrapper').css('opacity', '1');
	$('#sidebar-wrapper h1').fadeOut(400);
	$('.sidebar-nav').toggle(400, function() {
		var tl = new TimelineMax();
		tl.to($("#sidebar-wrapper"), 1, {
			'margin-left' : "-250px",
			left : '250px',
			width : '0px'
		}, 'feature');
		tl.to($('#page-content-wrapper'), 1, {
			opacity : 1
		});
	});
	opened = false;
};

$(document).ready(main);
