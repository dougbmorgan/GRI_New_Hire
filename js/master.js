$(document).ready(function() {	$('a[href=#trees]').click( function(){		$('html, body').stop().animate({scrollTop: 750},1000);		return false;	});	setTimeout(function(){		$(window).scroll( function(){			if ($(this).scrollTop() > 100) {				$('#trees li').addClass('animate');			}			if ($(this).scrollTop() > 300) {				$('.svgLoaded').addClass('start');			}		});	}, 1000);	$('#graph li').load('images/chart.svg', function(){		$(this).addClass("svgLoaded");	});	});