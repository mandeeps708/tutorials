/*
 * NAME: SpriteNav(jQuery)
 * AUTHOR: Jay Blanchard
 * DATE: 2011-01-10
 * BUSINESS RULE: 	<if applicable>
 *
 * REVISION:	a20110110jb
 * STATUS: 		open
 * USAGE:		call from web interface page
 
 *
 * REVISION HISTORY
 *
 * a20110110jb  - create CSS and XHTML for initial testing layout
 * 
 */

 $(document).ready(function() {


$(function() {
	/* set original rules */
	$("#spriteNav span").css("opacity", "0");
	$("#spriteNav span.selected").css("opacity", "1");

	/* how do we hover? let me count the ways... */
	$("#spriteNav span").hover(function() {
		if($(this).attr("class").length == 0) {
			$(this).stop().animate({
				opacity: 1
			}, 75); // end mousein
		} else {
			$(this).css("opacity", "1"); // end mousein
		}; // end if
	}, function() {
		if($(this).attr("class").length == 0) {
			$(this).stop().animate({
				opacity: 0
			}, 250); // end mouseout
		} else {
			$(this).css("opacity", "1"); // end mouseout
		}; // end if
	}); // end hover function

		/* click me! click me! */
			$("#spriteNav span").click(function() {
				/* we clicked, so remove the selected class from all */
				$("#spriteNav span").removeClass("selected");
				/* then add it to the last one */
				$(this).addClass("selected");
				/* then fade out the previously selected item */
				/* be specific about the ones to be faded out */
				$("#spriteNav span:not(.selected)").stop().animate({
					opacity: 0
				}, 500);
			}); // end click function
		}); // end function
 	}); // end document ready function