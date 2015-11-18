$(document).ready(function(){
	$(function(){
	
		var note = $('#note'),
			ts = new Date(2015, 10, 1),
			newYear = true;
		
		if((new Date()) > ts){
			// The new year is here! Count towards something else.
			// Notice the *1000 at the end - time must be in milliseconds
			ts = (new Date()).getTime() + 10*24*60*60*1000;
			newYear = false;
		}
			
		$('#countdown').countdown({
			timestamp	: ts,
			callback	: function(days, hours, minutes, seconds){
				
				var message = "";
				
				message += days + " day" + ( days==1 ? '':'s' ) + ", ";
				message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
				message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
				message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
				
				if(newYear){
					message += "left until the new year!";
				}
				else {
					message += "left to 10 days from now!";
				}
				
				note.html(message);
			}
		});
		
	});
	
	var head = $('header').outerHeight();
	var topNavHeight = $('.topNav').outerHeight();
	var topNav = $('.topNav');
	var top;
	$(window).on('scroll' , function(){
		top = $(this).scrollTop();
		if((head-top) <= topNavHeight){
			$('.ownerName').stop().show(700);
			topNav.addClass('fixed').stop().animate({'opacity':'0.95'},700);
		}
		else{
			$('.ownerName').stop().hide(700);
			topNav.removeClass('fixed').stop().animate({'opacity':'1'},700);
		}
	})
	
	/* $('.nav li a').hover(function(){
		$(this).parent().find('.hover').stop().animate({'bottom':'5px','opacity':'1'},200);
	},function(){
		$(this).parent().find('.hover').stop().animate({'bottom':'-5px','opacity':'0'},200);
	}) */
	
})
