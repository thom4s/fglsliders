
/*
magneticScroll v1.0
by Maxime Gaul
https://github.com/maximegaul/magnetic-scroll
*/

jQuery.fn.reverse = [].reverse;

// custom 'scrolldelta' event extends 'scroll' event
jQuery.event.special.scrolldelta = {
    delegateType: "scroll",
    bindType: "scroll",
    handle: function (event) {
        var handleObj = event.handleObj;
        var targetData = jQuery.data(event.target);
        var ret = null;
        var elem = event.target;
        var isDoc = elem === document;
        var oldTop = targetData.top || 0;
        var oldLeft = targetData.left || 0;
        targetData.top = isDoc ? elem.documentElement.scrollTop + elem.body.scrollTop : elem.scrollTop;
        targetData.left = isDoc ? elem.documentElement.scrollLeft + elem.body.scrollLeft : elem.scrollLeft;
        event.scrollTopDelta = targetData.top - oldTop;
        event.scrollTop = targetData.top;
        event.scrollLeftDelta = targetData.left - oldLeft;
        event.scrollLeft = targetData.left;
        event.type = handleObj.origType;
        ret = handleObj.handler.apply(this, arguments);
        event.type = handleObj.type;
        return ret;
    }
};


(function($)
{
    $.magneticScroll = function(options)
    {

            var defauts =
            {
                "selector": ".magnetic",
                "easing": "swing",
                "speed": 500,
                "timeout": 200,
                beforeScroll: $.noop,
                afterScroll: $.noop
            };

            var params = $.extend(defauts, options);


            var methods = {

                animateScroll: function($el, offset, direction){

                    params.beforeScroll();

                    $("html, body").stop().animate({'scrollTop': offset+'px'}, params.speed, params.easing, function() {

                        setTimeout(function() {

                            $("html,body").stop().removeClass('magnetic-scrolling');
                            params.afterScroll($el, direction);

                        }, params.timeout);

                    });

                }
            };


            $(params.selector).each(function() {

                $(this).attr("data-offset", $(this).offset().top);

            });


            $(window).on('scrolldelta', function(e){
                
                e.preventDefault(); // fix jump on Chrome


                if( !$('body').hasClass('magnetic-scrolling') ) {

                    $('body').addClass('magnetic-scrolling');

                    var st = e.scrollTop;
                    var evt = window.event || e; //equalize event object
    								var topDelta = e.scrollTopDelta;

                    console.log(topDelta);

                    if( delta > 0 ) {

                        if($(window).scrollTop() > 0) {

                            $(params.selector).reverse().each(function() {

                                var scrolled = 0;

                                if( Math.round($(this).attr("data-offset"))<Math.round(st)) {

                                    methods.animateScroll($(this), $(this).attr("data-offset"), 'up');
                                    scrolled = 1;
                                    return false; //break
                                }

                                if(scrolled === 0) {
                                    methods.animateScroll($(this), 0, 'up');
                                }
                            });

                        } else {
                            $("html,body").stop().removeClass('magnetic-scrolling');
                        }
                    }
                    else {

                        var allFinished = true;

                        $(params.selector).each(function() {

                            if(Math.round($(this).attr("data-offset"))>Math.round(st)) {
                                allFinished = false;
                                methods.animateScroll($(this), $(this).attr("data-offset"), 'down');
                                return false; //break
                            }
                        });

                        if(allFinished) $("html,body").stop().removeClass('magnetic-scrolling');
                    }


                } else {
                    e.preventDefault();
                }

                e.stopPropagation();
                return;

            });


    };
    
})(jQuery);






/*
 * VARIABLES
 *******************/ 
	var lang = $("html").attr("xml:lang");


	var window_width = window.innerWidth;
	var window_height = window.innerHeight - 200;
	var mobile_window;

	var body = $('body');

	var header_container = $('.site-header');
	var header_height = header_container.innerHeight();
	var scroll_top = $(window).scrollTop();

	var main_content_container = $('#main-content');
	
	var exposition = $('.wrap_exposition'),
			home = $('.wrap_home'),
			agenda = $('.wrap_agenda');



  if( window_width < 880 ) {
  	mobile_window = true;
  } else {
  	mobile_window = false;
  }

	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;



/*
 * FUNCTIONS
 *******************/ 

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 * jQuery.browser.mobile will be true if the browser is a mobile device
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);


(function () {var f={};var g=/iPhone/i,i=/iPod/i,j=/iPad/i,k=/\biOS-universal(?:.+)Mac\b/i,h=/\bAndroid(?:.+)Mobile\b/i,m=/Android/i,c=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,d=/Silk/i,b=/Windows Phone/i,n=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,q=/BB10/i,s=/Opera Mini/i,t=/\b(CriOS|Chrome)(?:.+)Mobile/i,u=/Mobile(?:.+)Firefox\b/i,v=function(l){return void 0!==l&&"MacIntel"===l.platform&&"number"==typeof l.maxTouchPoints&&l.maxTouchPoints>1&&"undefined"==typeof MSStream;};function w(l){return function($){return $.test(l);};}function x(l){var $={userAgent:"",platform:"",maxTouchPoints:0};l||"undefined"==typeof navigator?"string"==typeof l?$.userAgent=l:l.userAgent&&($={userAgent:l.userAgent,platform:l.platform,maxTouchPoints:l.maxTouchPoints||0}):$={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var a=$.userAgent,e=a.split("[FBAN");void 0!==e[1]&&(a=e[0]),void 0!==(e=a.split("Twitter"))[1]&&(a=e[0]);var r=w(a),o={apple:{phone:r(g)&&!r(b),ipod:r(i),tablet:!r(g)&&(r(j)||v($))&&!r(b),universal:r(k),device:(r(g)||r(i)||r(j)||r(k)||v($))&&!r(b)},amazon:{phone:r(c),tablet:!r(c)&&r(d),device:r(c)||r(d)},android:{phone:!r(b)&&r(c)||!r(b)&&r(h),tablet:!r(b)&&!r(c)&&!r(h)&&(r(d)||r(m)),device:!r(b)&&(r(c)||r(d)||r(h)||r(m))||r(/\bokhttp\b/i)},windows:{phone:r(b),tablet:r(n),device:r(b)||r(n)},other:{blackberry:r(p),blackberry10:r(q),opera:r(s),firefox:r(u),chrome:r(t),device:r(p)||r(q)||r(s)||r(u)||r(t)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o;}f=x();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f;}else if(typeof define==="function"&&define.amd){define(function(){return f;});}else{this['isMobile']=f;}})();



/*
 * HELPERS : IS ON SCREEN 
 *******************/


	$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight() / 2;

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};


	$.fn.isOnCenterScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + ( win.height() / 3 * 2 );
    viewport.top = viewport.top + ( win.height() / 3 );

    // Emplacement de l'élément 
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight() / 2;

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};



/*
 * Function for mediatheque iframes 
 *******************/

	var mediatheque_countdown;
	var hover_in_timeout;
	var hover_out_timeout;
	var teaser_player;
	var teaser_iframe;
	var teaser_btn;
	var teaser_count = 0;
	var data_time_chromless = 10;

	if( $('[data-time-chromless]').length > 0 ) {
		data_time_chromless = $('[data-time-chromless]').attr('data-time-chromless');
	}	

	var launch_video_preview = function( that ) {

 		if( teaser_player ) {
			teaser_player.unload();
			teaser_player = null;
		}

			teaser_iframe = that.find('iframe');
			teaser_player = new Vimeo.Player(teaser_iframe);

			teaser_btn = that.find('.teaser_media_play');
			teaser_btn.addClass('hidden');

			hover_in_timeout = setTimeout( function() {

				if( teaser_player ) {

					teaser_player.play().then( function() {
						teaser_player.setVolume(0.7);
					});

					mediatheque_countdown = setInterval(myTimer, 1000);
					teaser_count = 0;

					function myTimer() {

						if( teaser_count == data_time_chromless ) {
							if( teaser_player ) {
								teaser_player.unload().then(function() {
									teaser_btn.removeClass('hidden');
									clearInterval(mediatheque_countdown);
									return;
								});
							}

						}
						else {
							teaser_count++;
						}
					  
					}
				}

			},

			500);

	};

	var unload_video_preview = function( that ) {

		clearTimeout(hover_in_timeout);

		hover_out_timeout = setTimeout( function() {

			if( teaser_player ) {

				teaser_player.unload().then(function() {
					$('.teaser_media_play').addClass('hidden');
					clearInterval(mediatheque_countdown);
					teaser_count = 0;
					return;
				});

			}

		},
		50);

	};

	var teaser_autoplay = function( els ) {

		els.each( function( ) {

			var that = $(this);
			var that_vid_id = that.parents('.teaser_manif_virtual').attr('data-id');
			var video_in;

			if( that.parents('.teaser_manif_virtual').attr('data-type-media') == 'video' ) {

				if( isMobile.any ) {

					$(window).scroll(function() {

					  if( $(that).isOnCenterScreen() == true && that_vid_id != video_in ) {

					  	//console.log( that_vid_id + ' is in !' );
					  	
					  	video_in = that_vid_id;

					  	launch_video_preview( $(that) );

					  }
					  else if( $(that).isOnCenterScreen()&& that_vid_id == video_in ) {
							//console.log( that_vid_id  + ' is still in !');

					  }
					  else {

					  	if( that_vid_id == video_in ) {
					  		// console.log( that_vid_id  + ' is out !');
					  		
					  		video_in = null;
					  		unload_video_preview( $(that) );

					  	}
					  	else {

					  	}

					  }

					});

				}

				else {

						$(this).hover( 

						  function() {

						  	launch_video_preview( $(this) );

						  }, 

						  function() {

						  	unload_video_preview( $(this) );

						  } 

						); 

					}
			} 

		}); 

	};



	var save_media_progression = function( player ) {

		var media_id = $('.page_header--live').attr('data-id');
		var media_progression = $('.page_header--live').attr('data-progression');
		var media_duration = $('.page_header--live').attr('data-duree');
		var media_type = $('.page_header--live').attr('data-type-media');

		if(typeof localStorage!='undefined') {

			player.getDuration().then(function(duration) {
			  media_duration = duration;
			});

			window.setInterval(function(){
				
				player.getCurrentTime().then(function(seconds) {

 					media_progression = Math.floor(seconds / media_duration * 100);

					var media_progression_data = {
					  progression: media_progression
					};

					var media_progression_json = JSON.stringify(media_progression_data);
					var media_progression_key = "media_progression_" + media_id;

					localStorage.setItem(media_progression_key ,media_progression_json);

					$('.page_header--live').attr('data-progression', media_progression);

				});

			}, 5000);


		}

	};


	var get_media_progression = function( els ) {

		els.each( function() {

			var that = $(this);

			var media_id = that.attr('data-id');
			var media_progression_key = "media_progression_" + media_id;
			var media_progression_json = localStorage.getItem(media_progression_key);
			var media_progression = JSON.parse(media_progression_json);

			if( media_progression ) {
				that.attr('data-progression', media_progression.progression);
				that.find('.progression_status').css('width', media_progression.progression + '%');
			}
			else {
				that.find('.teaser_progressionbar').hide();
			}

		});

	};




	// Handle page visibility change events
	function handleVisibilityChange() {

	  if( teaser_player ) {

	   	teaser_player.unload();
	   	teaser_player = null;
	   	
	   	$('.teaser_media_play').addClass('hidden');

	  }
	
	}

	document.addEventListener('visibilitychange', handleVisibilityChange, false);
 	window.addEventListener('blur', handleVisibilityChange);




jQuery.fn.extend({


/**
 * jQuery function to prevent default anchor event and take the href * and the title to make a share popup
 *
 * @param  {[object]} e           [Mouse event]
 * @param  {[integer]} intWidth   [Popup width defalut 500]
 * @param  {[integer]} intHeight  [Popup height defalut 400]
 * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
 */
  customerPopup: function (e, intWidth, intHeight, blnResize) {

    // Prevent default anchor event
    e.preventDefault();
    
    // Set values for window
    intWidth = intWidth || '500';
    intHeight = intHeight || '400';
    strResize = (blnResize ? 'yes' : 'no');

    // Set title and open popup with focus on it
    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,            
        objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
  },

 
  textMetrics: function(el) {
    
    var tm = document.createElement('span'),
      $tm = $(tm);
    $tm.css({
      border: 0,
      padding: 0,
      position: 'absolute',
      visibility: 'hidden'
    });
    
    tm.appendChild(
      document.createTextNode(el.textContent || el.innerText)
    );
    
    el.appendChild(tm);
    var rect = tm.getClientRects()[0];
    $tm.remove();
    
    return {
      height: rect.bottom - rect.top,
      width: rect.right - rect.left
    };
  }
  



});



function get_hour() {

	$('.clock').each(function() {

      var hours = $(this).attr('data-hour');
      var mins =  $(this).attr('data-min');

			if( hours == 'close' ) {
	      $(this).find(".hour").css({ "transform": 'scale(0)'});
	      $(this).find(".min").css({ "transform" : 'scale(0)' });
 			} 
 			else {
	      var hdegree = hours * 30 + (mins / 2);
	      var hrotate = "rotate(" + hdegree + "deg)";

	      var mdegree = mins * 6;
	      var mrotate = "rotate(" + mdegree + "deg)";

	      $(this).find(".hour").css({ "transform": hrotate});
	      $(this).find(".min").css({ "transform" : mrotate });
 			}


 	});

}


function close_nav() {

	if( jQuery.browser.mobile || mobile_window ) {
		$('html, body').animate( { scrollTop: $('.agenda_today').offset().top -150 }, 250 );
	} 
	else {
		$('html, body').animate( { scrollTop: 0 }, 250 );
	}

}


function set_agenda_pins() {

	var pins = $('.pinned.agenda_date');

	pins.each(function( index ) {

		var this_height = $(this).innerHeight();
		var this_parent = $(this).closest('.scene');
		var this_parent_height = this_parent.innerHeight();

		if( this_parent_height > window_height) {
			  $(this).hcSticky({
			    stickTo: this_parent[0],
			    top: 0,
			    bottom: 50,
			  });
		}
	});

} 

function set_pins( outer ) {

	var pins = $('.pinned');

	pins.each(function( index ) {

		if( $(this).closest('.oeuvre_carnet').length > 0 ) {
			return;
		}


		if( $(this).is(":visible") ) {

			var this_height = $(this).innerHeight();
			var this_parent = $(this).closest('.scene');
			var this_parent_height = this_parent.innerHeight();


			if( this_parent_height > window_height ) {

				if( $(this).hasClass("expo_dates_inner") ) {
				  $(this).hcSticky({
				    stickTo: this_parent[0],
				    top: 340,
				    bottom: 50,
				    followScroll: false,
				    queries: {
			        768: {
			          disable: true
			        }
			      },
			      onStart: function() {
			      	$('.expo_practical').addClass('fixed').removeClass('released');
			      },
			      onStop: function() {
			      	$('.expo_practical').addClass('released').removeClass('fixed');
			      }
			      // onStart: function() {
			      // 	$('.expo_practical').css('opacity', '1').addClass('fixed').removeClass('released');
			      // },
			      // onStop: function() {
			      // 	$('.expo_practical').css('opacity', '1').addClass('released').removeClass('fixed');
			      // }
				  });
				} 
				else {

				  $(this).hcSticky({
				    stickTo: this_parent[0],
				    top: 140,
				    bottom: 50,
				    followScroll: false,
				    queries: {
			        768: {
			          disable: true
			        }
			      }
				  });
				}
			}

		}
	
	});

}








  // SCROLLING ANIMATIONS


  $('.js-up-trigger').on('click', function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow", function() {
    	$( ".btn--up" ).removeClass( "active" );
	  });
    return false;
  });

 

	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 20;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	function handle_scroll_for_header() {

		setInterval(function() {
		    if (didScroll) {
		        hasScrolled();
		        didScroll = false;
		    }
		}, 250);

	}

	function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        $('#backtomediatheque').addClass('hide');
        $( ".btn--up" ).removeClass( "active" );
        $('.news_feed.top').addClass('fixed_top');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        		$('#backtomediatheque').removeClass('hide');
            $( ".btn--up" ).addClass( "active" );
        		$('.news_feed.top').removeClass('fixed_top');
        }
    }
    
    lastScrollTop = st;
	}





jQuery( document ).ready(function( ) {



	/*
	 * remove admin toolbar for thomas
	 *******************/ 	
    
	if ( document.location.host == 'fgl.local') {

		console.log('hello thomas');

		$('#admin-menu-wrapper').css('display', 'none');
		$('.localtask').css('display', 'none');
		body.css('padding-top', '0');
		body.removeClass('admin-menu adminimal-menu');

	}



/*
 * SCROLL Thing
 *******************/ 	

	if( jQuery.browser.mobile || mobile_window ) {
		setTimeout( set_agenda_pins(), 1000 );
	  document.addEventListener("touchmove", handle_scroll_for_header, false);
	  document.addEventListener("scroll", handle_scroll_for_header, false);
	  document.addEventListener("touchend", handle_scroll_for_header, false);

	} else { 
		setTimeout( set_pins(), 1000 );
	}





/*
 * Clock icons
 *******************/ 

 	get_hour();




/*
 * On Scroll
 *******************/ 

	var hp_offset_trigger = $(window).height() / 2;

	$( window ).scroll(function() {

		// MENU ON SCROLLING

	  if( $(window).scrollTop() > 20 ){
	    header_container.addClass('white');
	    $('#backtomediatheque').addClass('white');

	    body.addClass('scrolling');

	  }
		else {
	    body.removeClass('scrolling');

			if( agenda.length > 0 ) {
				
			} else {
				header_container.removeClass('white');
	    $('#backtomediatheque').removeClass('white');
			}
	  }

	  if( $('.site-header').hasClass('open') ) {
		  $('.menu_child').slideUp(50,
    		function(){
    			$('.menuparent').removeClass('open');
					$('.site-header').removeClass('open');
		  	});
		  $('.active-trail').removeClass('disable');
	  }



		// Add Class for home bg


	  if( $(window).scrollTop() > hp_offset_trigger ){

	    body.addClass('hp_scrolling');

	  }
		else {
	    body.removeClass('hp_scrolling');

	  }




	});



	if( agenda.length === 1 ) {
		header_container.addClass('white');
	}

	$('.js-trigger').on('click', function(event) {
		$(this).siblings('.js-dropdown').slideToggle();
		$(this).find('h2 > span').toggleClass('icon-down icon-up');
	});


	$(".js-trigger-height").bind("click", function(event){
		$(".agenda_trigger").toggleClass('open');
		$(this).find('span').toggleClass('icon-down icon-up');

		if( $(".agenda_trigger").hasClass('open') ) {
		}
		else {
		}
	});



/*
 * CARNET SCRIPTS
 *******************/ 






	var carnetIntro_height = $('.carnet_intro').outerHeight();
	$('.oeuvre_carnet').css( 'max-height', carnetIntro_height + 80);
	
	$("#js-openCarnet").on('click', function(event) {
		event.preventDefault();

		if( $(".oeuvre_carnet").hasClass('open') ) {
			$(".oeuvre_carnet").css('max-height', carnetIntro_height + 80);
		}
		else {
			$(".oeuvre_carnet").css('max-height', '100000px');
			set_pins( );
		}

		$(".oeuvre_carnet").toggleClass('open');
		$('.btn-openCarnet').toggleClass('icon-down icon-up');

	});

	$('.btn-openCarnet').on('click', function(event) {
		event.preventDefault();

		if( $(".oeuvre_carnet").hasClass('open') ) {
			$(".oeuvre_carnet").css('max-height', carnetIntro_height + 80);
		}
		else {
			$(".oeuvre_carnet").css('max-height', '100000px');
			set_pins( );
		}

		$(".oeuvre_carnet").toggleClass('open');
		$('.btn-openCarnet').toggleClass('icon-down icon-up');
		
	});

	var previous_idr;
	var slider;


	$(".cst-slide-item").click(function(event){
		event.preventDefault();
		
		var that_idr = $(this).attr('data-idr');

		var language=$("html").attr("xml:lang");
		var url = '/'+language+'/ajax/carnet?idr='+that_idr;

		var that_img_id = parseInt($(this).attr('data-id'));

	  $.ajax({
	     url : url,
	     type : 'GET',
	     dataType : 'json',

	     success : function(data, statut){

        	body.addClass('no-scroll');
					var items = [];
					var output;

					$('#slide-modal_title').html('');
					$('#slide-modal_credits').html('');
					$('#slide-modal_caption').html('');

			    if( that_idr != previous_idr ) { // IF IDR CALLED FOR THE FIRST TIME

	        	if( data.length === 1 ) { // IF SINGLE IMAGE
					  
						  $.each( data, function( key, val ) {
						  	//console.log(val);
						  	slide_nbr = key + 1;
						    items.push( '<li id="' + key + '" data-title="' + val.title + '" data-credits="' + val.credits + '" data-description="' + val.description + '"><img src="' + val.url_modal + '"  alt="" class="mb-02"></li>'
						   	);

							    var title = val.title;
							    var credits = val.credits;
							    var description = val.description;

							    $('#slide-modal_title').html(title);

							    if( credits != '' ) {
							      $('#slide-modal_credits').html('<span class="sep">|</span>' + credits);
							    }
							    if( description != '' ) {
							      $('#slide-modal_caption').html('<span class="sep">|</span>' + description);
							    }

						  });

						  output = $( "<ul/>", {
						    "class": "no-bullets single-img",
						    html: items.join( "" )
						  });


						}
						else { // IF MULTIPLE IMAGE

						  $.each( data, function( key, val ) {
						  	//console.log(val);
						  	slide_nbr = key + 1;
						  	console.log(val.title);

						    items.push( '<li id="' + key + '" data-title="' + val.title + '" data-credits="' + val.credits + '" data-description="' + val.description + '"><img src="' + val.url_modal + '"  alt="" class="mb-02"></li>'
						   	);
						  });

						  output = $( "<ul/>", {
						    "class": "no-bullets modal-slider",
						    html: items.join( "" )
						  });

						  $('#data_length').html( data.length );

						}

						// ADD MARKUP AND DISPLAY
					  $( ".modalslide_outer" ).html(output);
	        	$('.slide-modal').css('display', 'flex');


	        	if( data.length !== 1 ) { // TRIGGER SLIDER

				      slider = $('.modalslide_outer ul').bxSlider({
				          pager: false,
				          nextSelector: "#js-item_next--modal",
				          prevSelector: "#js-item_prev--modal",
				          nextText: " > ",
				          prevText: " < ",
				          startSlide:0,
				          useCSS:false,
				          onSliderLoad: function(currentIndex) {

							      $('#slide_nbr').html( currentIndex + 1 );

							      var slide_title = $('#' + currentIndex).attr('data-title');
							      var slide_credits = $('#' + currentIndex).attr('data-credits');
							      var slide_description = $('#' + currentIndex).attr('data-description');

							      $('#slide-modal_title').html(slide_title);
								    
								    if( slide_credits != '' ) {
								      $('#slide-modal_credits').html('<span class="sep">|</span>' + slide_credits);
								    }
								    if( slide_description != '' ) {
								      $('#slide-modal_caption').html('<span class="sep">|</span>' + slide_description);
								    }

				          },
									onSlideAfter: function($slideElement, oldIndex, newIndex) {

							       var slide_title = $slideElement.attr('data-title');
							       var slide_credits = $slideElement.attr('data-credits');
							       var slide_description = $slideElement.attr('data-description');

							       $('#slide-modal_title').html(slide_title);
							       
								    if( slide_credits != '' ) {
								      $('#slide-modal_credits').html('<span class="sep">|</span>' + slide_credits);
								    }
								    if( slide_description != '' ) {
								      $('#slide-modal_caption').html('<span class="sep">|</span>' + slide_description);
								    }

							       $('#slide_nbr').html( newIndex + 1 );

							    },
				      });
				      slider.goToSlide(that_img_id);
				      $('.modal_nav').show();

	        	}
	        	else { // JUSTE HIDE NAV FOR SINGLE IMAGE
	        		$('.modal_nav').hide();
	        	}
			    } 

			    else { // IF SAME IDR CALLED


				    // SHOW
				    $('.modal_nav').show();
	        	$('.slide-modal').css('display', 'flex');
	        	

			    	// GO TO SLIDE
	        	slider.reloadSlider();
	        	slider.goToSlide(that_img_id);


			    }

					previous_idr = that_idr;

	     },

	     error : function(resultat, statut, erreur){
	     },

	     complete : function(resultat, statut){
	     }

	  });

	});

	$('body').on('click', '#modal_close', function() {
		$('#js-item_next--modal').html('');
		$('#js-item_prev--modal').html('');
	});


   // CHARGEMENT PDF CARNET DE PRODUCTION
    $("body").on("click", ".pdf-link", function(event) {
  		
  		window.frames['pdf_viewer_frame'].location = 'https://docs.google.com/gview?url='+$(this).attr("data-href")+'&embedded=true&toolbar=hide';

  		//window.frames['pdf_viewer'].location = '/file?url='+$(this).attr("data-href")+'&mime=application/pdf';
  		$("#pdf_viewer").css("display","block");
      $('body').addClass('no-scroll');

    }); 

  	// FERMETURE PDF CARNET DE PRODUCTION
  	$("body").on("click", ".close_pdf_viewer", function(event) {
      $("#pdf_viewer").hide();   
      $('body').removeClass('no-scroll');
  	}); 





  if( iOS && mobile_window ) {

    $('.item-vid').each( function() {

      $(this).remove();

    });
  }



/*
 * MENU
 *******************/ 


	$('.menuparent > a').on('click', function(event) {
		event.preventDefault();
		var parent = $(this).parent();

		if( parent.hasClass('active-trail') ) {

		} 
		else {
			$('.active-trail').addClass('disable');
		}

		if( parent.hasClass('open') ) {
			$('.site-header').removeClass('open');
			parent.find('.menu_child').hide();
			parent.removeClass('open');
			//$('body').removeClass('no-scroll')
			$('.active-trail').removeClass('disable');
		}
		else {
			$('.menu_child').slideUp(100,
    		function(){
		  	});			
			parent.find('.menu_child').slideToggle('slow');
			$('.site-header').addClass('open');
			parent.siblings().removeClass('open');
			parent.addClass('open');
			//$('body').addClass('no-scroll')
		}
	});

	$('.after_header').click(function() {
			$('.site-header').removeClass('open');
			$('.menu_child').hide();
			$('.menuparent').removeClass('open');
			$('.active-trail').removeClass('disable');
	});


	if( mobile_window ) {

		if( $('#back_collection_search').length > 0 ) {
			$('.padtop-2').not('.js-stay').css('padding-top', header_height);

		}
		else {
			$('.padtop-2').not('.js-stay').css('padding-top', header_height + 30);
		}
		//$('.menu_child').css('top', header_height + 30);
	}




/*
 * Design stuffs
 *******************/ 

	if( exposition.length > 0 ) {

		if( jQuery.browser.mobile || mobile_window) {
		} 
		else {
			var page_header_caption_height = $('.page_header_caption').outerHeight();

			var event_date_position = $('.event_date_start').position().top;

			var event_dates_height = $('.event_date_start').outerHeight() + event_date_position + 56 + 14 + page_header_caption_height;

			$('.page_mainInfos').css('margin-top', - event_dates_height);
		}
	
	}


	if( jQuery.browser.mobile || mobile_window ) {

		$('.site-title').html('LA');

		$('.agenda_trigger').find('br').remove();
		
		$('.fh_1').find('br').remove();

		if( $('.node-type-acteur').length > 0 ) {
			$('.nav_page-prev').html($('.nav_page-prev').text().replace('artiste précédent','<span class="el icon-lien_interne--left"></span><br/>artiste<br/>précédent')); 
			$('.nav_page-next').html($('.nav_page-next').text().replace('artiste suivant','<span class="el icon-lien_interne"></span><br>artiste<br/>suivant<br/>')); 
		}
		if( $('.node-type-oeuvre').length > 0 ) {
			$('.nav_page-prev').html($('.nav_page-prev').text().replace('œuvre précédente','<span class="el icon-lien_interne--left"></span><br/>œuvre<br/>précédente')); 
			$('.nav_page-next').html($('.nav_page-next').text().replace('œuvre suivante','<span class="el icon-lien_interne"></span><br>œuvre<br/>suivante'));
		}


		if(agenda) {
			$('.site-header').removeClass('white');
		}

		if( $('.widget_adresse').length > 0 && $('.widget_map').length > 0 ) {
			$('.widget_adresse').insertBefore( $('.widget_map').closest('.layer') );
			$('.widget_map').insertBefore( $('.widget_adresse').closest('.layer') );
		}

		if( $('.widget_restaurant').length > 0 && $('.widget_boutique').length > 0 ) {

			var media_text = $('.widget_restaurant').closest('.scene').find('.flex-s-3').find('.pinned');
			media_text.insertBefore( $('.widget_restaurant') );

			media_text = $('.widget_boutique').closest('.scene').find('.flex-s-3').find('.pinned');
			media_text.insertBefore( $('.widget_boutique') );

		}
		
	}

	$('.nextEvents_card .card').removeClass('card-bordered');






/*
 * Social Sharing buttons
 *******************/ 

    $('.share').on("click", function(e) {
      $(this).customerPopup(e);
    });
       
		$('.share_bymail').on("click", function(event) {
			event.preventDefault();
      $('.modal_share_bymail').css('display', 'flex');
    });
		$('#share_bymail_close').on("click", function(event) {
			event.preventDefault();
      $('.modal_share_bymail').hide();
    });

		$('body').on('click', '#share_bymail_submit', function(event) {
			var form = $('#share_bymail_form');
			form.find(".msg_valid").hide();
			form.find(".msg_error").hide();
			var nom = $('#share_bymail_name').val();
			var email = $('#share_bymail_email').val();
			var message = $('#share_bymail_message').val();
			var titre = form.find("#share_title").val();
			var lien = form.find("#share_link").val();
			var language=$("html").attr("xml:lang");	
			
			
			var nb_error=0;

			if(message.length == 0){
				form.find("input,textarea").blur();
				form.find("textarea").focus().addClass('error');
				nb_error++;
			}
			
			if(!isEmail(email)){
				form.find("input,textarea").blur();
				form.find("input[type=text]:eq(1)").focus().addClass('error');
				nb_error++;
			}
			
			if(nom==''){
				form.find("input,textarea").blur();
				form.find("input[type=text]:eq(0)").focus().addClass('error');
				nb_error++;
			}
			
			if(nb_error>0){
				form.find(".msg_error").show();
				return false;
			}
		
			form.find(".msg_error").hide();
			form.find(".btn").attr("disabled",true);
			form.css("opacity","0.5");
			jQuery.ajax({
				url: "/"+language+"/partage/courriel",
				type: "POST",
				dataType: "json",
				data: { email: email, nom : nom, message : message, titre : titre, lien : lien},
				success: function(data){
					
					form.find(".btn").attr("disabled",false);
					form.css("opacity","1");
					form.find("input[type=text],textarea").val("");
					form.find("label,input,textarea,.description_mandatory").hide();
					form.find(".form_msg").show();
					form.find(".msg_valid").show();
				},
				error: function (xhr, ajaxOptions, thrownError) {
					form.css("opacity","1");
					form.find(".msg_error").show();
		    }
			});
		});	






/*
 * Date picker for agenda
 *******************/ 


	function unavailable(date) {

		var q = new Date();
		var m = date.getMonth();
		var d = date.getDate();
		var y = date.getFullYear();

		var dmy = new Date(y,m,d);
	  today = new Date();

		if( dmy < today )
		{
	    return [true,"passed",""];
		} 
		else 
		{
	    return [true,"",""];
		} 
	}

	if( $('.datepicker').length > 0 ) {

		var language=$("html").attr("xml:lang");	

    $( ".datepicker" ).each( function() {
    	$(this).datepicker({
	      inline: true,
	      autoSize: true,
	      firstDay: 1,
	      beforeShowDay: unavailable,
	      onSelect: function(){
	          $(".agenda_meta_filters .meta-gray").trigger("click");
	          var nid_expo=$("#agenda_exposition").attr("data-nid");
	          var date=$(this).val();
	          jQuery.ajax({
	          				url: "/"+language+"/ajax/agenda_exposition",
	          				type: "POST",
	          				dataType: "json",
	          				data: { date: date, nid_expo : nid_expo},
	          				success: function(data){
	          					if(data.nid_expo>0 && nid_expo!=data.nid_expo){
	          						$("#wrapper_agenda_exposition #agenda_exposition").remove();
	          						$("#wrapper_agenda_exposition").prepend(data.expo);
	          					}else if(data.nid_expo==0){
	          					$("#wrapper_agenda_exposition #agenda_exposition").remove();
	          					}

	          					close_nav();

	          				},
	          				error: function (xhr, ajaxOptions, thrownError) {
	          					
	          		        }
	          			});
	                
	      }, 
    	});
    });

    $('.ui-datepicker-unselectable').html('<span>&nbsp;</span>');
    
  }


  // MOVE SOME DIV FOR MOBILE

		if( jQuery.browser.mobile || mobile_window) {
			var datepicker_widget = $('#datepicker');
			$('#datepicker_clone').html( datepicker_widget );
			
			var exhibition_todayEvent = $('#exhibition_eventToday');
			$('#exhibition_todayEvent').html( exhibition_todayEvent ).addClass('mb-1');
		} 







/*
 * EDITIONS
 *******************/ 



	$('body').on('click', '.js-openReader', function(event) {
		event.preventDefault();

		var reader_url = $(this).attr('href');

		$('#js-ReaderIframe').attr('src', reader_url);
		$('#js-Reader').removeClass('hidden');
		$('body').addClass('reader_open no-scroll');

	});

	$('body').on('click', '#js-closeReader', function(event) {
		event.preventDefault();

		$('#js-ReaderIframe').attr('src', '');
		$('#js-Reader').addClass('hidden');
		$('body').removeClass('reader_open no-scroll');

	});









/*
 * LIVES // VIRTUALS
 *******************/ 




	var countdown;
	var fades_stopped = false;
	var header_live = $('.page_header--live');
	var data_live = header_live.attr('data-live');
	var data_live_url = header_live.attr('data-live-url');

	
	function trigger_fade_in() {

		if( !( isMobile.any || mobile_window ) ) {
			$("#header").removeClass('hide');
		}

		$('#backtomediatheque').removeClass('hide');
		$('#header_wearelive_title').removeClass('hide');

		if( fades_stopped ) {
			clearInterval(countdown);
		}
		else {
			trigger_fade_out();
		}
	}

	function trigger_fade_out() {
		clearInterval(countdown);
		countdown = setInterval(function() {

			if( !( isMobile.any || mobile_window )  ) {
				$("#header").addClass('hide');
			}

			$('#backtomediatheque').addClass('hide');
			$('#header_wearelive_title').addClass('hide');

		}, 3000);
	}


	function trigger_hidden_header_for_played_video() {

		fades_stopped = false;

		$(window).scroll(function() {

		  if ($('.page_header--live').isOnScreen() == true) {
		  	fades_stopped = false;
				
				clearInterval(countdown);
				countdown = setInterval(function() {

					if( !( isMobile.any || mobile_window )  ) {
			  		$("#header").addClass('hide');
					}

					$('#backtomediatheque').addClass('hide');
					$('#header_wearelive_title').addClass('hide');

			 	}, 3000);

		  }

		  else {
				clearInterval(countdown);

		  	if( !fades_stopped ) {

					if( !( isMobile.any || mobile_window ) ) {
			  		$("#header").removeClass('hide');
					}

					$('#backtomediatheque').removeClass('hide');
					$('#header_wearelive_title').removeClass('hide');
		  	}

		  	fades_stopped = true;

		  }

		});

	}




	function trigger_event_video() {

		$(window).scroll(function() {

			if ( $('.mod-playerfull').isOnCenterScreen() == true) {
				console.log('mod-playerfull on screen')
				$('.mod-playerfull').addClass('open');
		  	}

			else {
				$('.mod-playerfull').removeClass('open');
			}

		});

	}

	if( $('.mod-playerfull').length > 0 ) {
		trigger_event_video();
	}






	$('body').on('click', '#play_live', function() {

		$('#video_upper_layer').hide();

    var iframe = $('#video_layer');
    var player = new Vimeo.Player(iframe);

    $('#videoonpause_layer').hide();

		player.play().then(function() {
			player.setVolume(0.5);

			$('.page_header--live').attr('data-live', '1');

			// HIDE HEADER WHEN MOUSE NOT MOVING

			$('html, body, .header_video_live_inner').mousemove( function() {
				trigger_fade_in();
			});

			trigger_fade_in();

			trigger_hidden_header_for_played_video();


		}).catch(function(error) {

		  switch (error.name) {
		    case 'PasswordError':
		        // The video is password-protected
		        break;

		    case 'PrivacyError':
		        // The video is private
		        break;

		    default:
		        // Some other error occurred
		        break;
		  }

		});

	});






	function test_live_state( ) {

		var live_player;
		var live_iframe;

	  // NOUS SOMMES EN MODE PREVIEW / CHROMLESS
	  ///////////

    if( data_live == '' || data_live == '0' ) {

		    var data_nid = parseInt(header_live.attr('data-nid'));
		    live_iframe = header_live.find('iframe');
				var rand = Math.floor((Math.random()*1000000)+1);

				var url = '/ajax/test_online';

				jQuery.ajax({
					url: url,
					type: "POST",
					dataType: "json",
					data: { 
						nid: data_nid
					},
					success: function(data){

						if (data.live == 1) {

							// NOUS PASSONS EN LIVE
							if ( live_iframe.length > 0 ) {

								console.log('we are live now !');

								data_live_url = data.live_url+'?uid='+rand;
								header_live.find('iframe').attr( 'src', data_live_url );

								live_player = new Vimeo.Player(live_iframe);
								live_player.setVolume(0.7);

								trigger_hidden_header_for_played_video();

								$('html, body, .header_video_live_inner').mousemove( function() {
									trigger_fade_in();
								});

							}

							else {
								data_live_url = data.live_url+'?uid='+rand;

								$('.header_video_live').html('<div><iframe src="' + data_live_url + '" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>');
								$('.header_video_live').removeClass('hidden');

								live_player = new Vimeo.Player( $('.header_video_live iframe') );
								live_player.setVolume(0.7);

								trigger_hidden_header_for_played_video();

								$('html, body, .header_video_live_inner').mousemove( function() {
									trigger_fade_in();
								});

							}

							data_live = '1';
							header_live.attr('data-live', '1');
							$('.header_arrow').hide();

						}
						else {
							console.log('we are not live now...');

						}

					},
					error: function (xhr, ajaxOptions, thrownError) {

			    }

				});

		}

		// NOUS SOMMES EN LIVE OU EN REPLAY
		else {

			if( $('[data-replay]').length === 0 ) {

				console.log('we are live...');

				trigger_hidden_header_for_played_video();

			  live_iframe = header_live.find('iframe');
				live_player = new Vimeo.Player(live_iframe);
				
				// live_player.setVolume(0).then( function() {
				// 	live_player.play();
				// });

				$('.header_arrow').hide();
			
			}
			else {

				console.log('we are on replay...');
			
			}

			$('html, body, .header_video_live_inner').mousemove( function() {
				trigger_fade_in();
			});

		}
	}



	if( $('.header_video_live').length > 0 && $('.page-file').length === 0 && $('.front').length == 0 ) {

			test_live_state();

	}



	function compte_a_rebours(date_evenement, element) {

    var date_actuelle = new Date();
    var total_secondes = (date_evenement - date_actuelle) / 1000;
    total_secondes = Math.floor(total_secondes);

    if (total_secondes > 0) {

      var jours = Math.floor(total_secondes / (60 * 60 * 24));
      var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
      minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
      secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

			if( jours == 1 || jours == 0 ) {
				if( lang == 'fr') {
					label_days = 'jour';
				}
				else {
					label_days = 'day';
				}
			}
			else {
				if( lang == 'fr') {
					label_days = 'jours';
				}
				else {
					label_days = 'days';
				}
			}

			if( heures == 1 || heures == 0 ) {
				if( lang == 'fr') {
					label_hours = 'heure';
				}
				else {
					label_hours = 'hour';
				}
			}
			else {
				if( lang == 'fr') {
					label_hours = 'heures';
				}
				else {
					label_hours = 'hours';
				}
			}

			if( minutes == 1 || minutes == 0 ) {
				label_minutes = 'minute';
			}
			else {
				label_minutes = 'minutes';
			}

			if( secondes == 1 || secondes == 0) {
				if( lang == 'fr') {
					label_secondes = 'seconde';
				}
				else {
					label_secondes = 'second';
				}
			}
			else {
				if( lang == 'fr') {
					label_secondes = 'secondes';
				}
				else {
					label_secondes = 'seconds';
				}
			}


			if( jours.toString().length == 1 ) {
				jours = '0' + jours;
			}
			if( minutes.toString().length == 1 ) {
				minutes = '0' + minutes;
			}
			if( secondes.toString().length == 1 ) {
				secondes = '0' + secondes;
			}
			if( heures.toString().length == 1 ) {
				heures = '0' + heures;
			}

      $(element).find('.days .count').html( jours );
      $(element).find('.days .clock_label').html( label_days );

      $(element).find('.hours .count').html( heures );
      $(element).find('.hours .clock_label').html( label_hours );

      $(element).find('.minutes .count').html( minutes );
      $(element).find('.minutes .clock_label').html( label_minutes );

      $(element).find('.seconds .count').html( secondes );
      $(element).find('.seconds .clock_label').html( label_secondes );


      var fiveminutes = 60 * 5;
      var twominutes = 60 * 2;


      //if ( total_secondes == fiveminutes || total_secondes == twominutes ) {
      if ( total_secondes % 30 == 0 && $('.front').length == 0 ) {

      	test_live_state( );

      }

    }

    else {

      $('.page_header_contents').hide();
			$('#header_wearelive_title').show();
			$('.header_video_live .header_blur').hide();

			$(element).html('On air');
			$(element).addClass('on_air');

			data_live = '1';
			header_live.attr('data-live', '1');
			
    }

	}

	function launch_compte_a_rebours(date_evenement, element) {
			window.setInterval(function(){
			  compte_a_rebours(date_evenement, element );
			}, 1000);
	}


	var date_actuelle = new Date();

	if( $('#header_eventdate').length > 0 ) {

		var date_evenement_attr = $('#header_eventdate').attr('data-eventdate');
	  var date_evenement = new Date( date_evenement_attr );
	  var element = $('#header_eventdate');

		if( date_actuelle < date_evenement) {
			launch_compte_a_rebours(date_evenement, element);
			$('#header_wearelive_title').hide();
		} else {
			$('.page_header_contents').hide();
			$('#header_wearelive_title').show();
			$('.header_video_live .header_blur').hide();
		}
	}


	$('.teaser_clock').each( function() {

	  var date_evenement = new Date( $(this).attr('data-eventdate') );
	  var element = $(this);

		if( date_actuelle < date_evenement) {
			launch_compte_a_rebours(date_evenement, element);
		} 
		else {
			$(element).html('On air');
		}

	}); 


	var set_transcription = function() {

			var transcription_height = $('#virtual_transcription').outerHeight() + 1000;
			var transcription_maxheight = '32rem';

			$('.virtual_transcription').css( 'max-height', transcription_maxheight );

			$('#js-openTranscription, #transcription_icon').on('click', function(event) {
				event.preventDefault();

				if( $(".virtual_transcription").hasClass('open') ) {
					$(".virtual_transcription").css('max-height', transcription_maxheight );
					var transciption_offset_top = $(".virtual_transcription").offset().top - 300;
					$('html, body').animate( { scrollTop: transciption_offset_top }, 500 );

				}
				else {
					$(".virtual_transcription").css('max-height', transcription_height);
				}

				$(".virtual_transcription").toggleClass('open');
				$('#transcription_icon').toggleClass('icon-down icon-up');
				
			});

	};

	if( $('#virtual_transcription').length > 0 ) {
		setTimeout( set_transcription(), 1000 );
	}







	/* 
	* MEDIATHEQUE
	*******************/ 



	var $teaser_medias = $('.teaser_media');

	teaser_autoplay( $teaser_medias );


	if( $('.medias_grid').length > 0 ) {

			if( $('.teaser_manif_virtual').length % 3 !== 0 ) {
				$('.medias_grid').append('<div></div>');
			}

			var teaser_els =  $('.teaser_manif_virtual');			
			get_media_progression( teaser_els );

	}


	if( $('[data-autoload]').length > 0 ) {

		if( $('[data-type-media="video"]').length > 0 ) {
			var autoload_player = new Vimeo.Player( $('#video_layer iframe') );
			save_media_progression( autoload_player );
		}

		// autoload_player.setVolume(0).then( function() {
		// 	autoload_player.play()
		// });

		$('#video_upper_layer').hide();

		trigger_fade_in();
		trigger_hidden_header_for_played_video();

		data_live = '1';
		header_live.attr('data-live', '1');

		$('html, body, .page_header--live').mousemove( function() {
			trigger_fade_in();

		});
				
	}






	/* 
	* HOMEPAGE (12/2020)
	*******************/ 

	var $hphead_menu_item = $('.hphead_menu_item');
	var $hphead_menu_link = $('.hphead_menu_link');
	var vitesse_defilement = parseInt( $('#hphead_menu').attr('data-vitesse') );
	var hover_latence = parseInt( $('#hphead_menu').attr('data-latence') );
	var highlight_hp_interval;
	var next_el; 
	var display_link_content, remove_link_content; 
	var autoSizeText;



// AUTO RESIZE EVENT FONT SIZE

	var autoSizeText = function() {
		
		console.log('autoSizeText');

	  var el, elements, _i, _len, _results;
	  elements = $('.resize');

	  if (elements.length < 0) {
	    return;
	  }

	  _results = [];
	  for (_i = 0, _len = elements.length; _i < _len; _i++) {
	    el = elements[_i];
	    _results.push((function(el) {
	      var resizeText, _results1;
	      resizeText = function() {
	        var elNewFontSize;
	        elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
	        return $(el).css('font-size', elNewFontSize);
	      };
	      _results1 = [];
	      while (el.scrollHeight > el.offsetHeight) {
	        _results1.push(resizeText());
	      }
	      _results1.push(resizeText());
	      return _results1;
	    })(el));
	  }
	  return _results;
	};






	var highlight_hp_links = function( els ) {

			if( $('.focused').length > 0 ) {

				if( next_el === undefined ) {
					next_el = next_el = els.first();
				}

				next_el.removeClass('focused');

				if( next_el.next().length === 0) {
					next_el = els.first();
				}
				else {
					next_el = next_el.next();
				}

				next_el.addClass('focused');
			}
			else {
				next_el = els.first();
				next_el.addClass('focused');			
			}

	}; 




	var launch_hp_links_focus = function( els ) {

		if( vitesse_defilement !== 0 ) {

			highlight_hp_links( els );  

			highlight_hp_interval = setInterval( function() {

				highlight_hp_links( els );  

			}, vitesse_defilement);

		}

	};


	var set_hp_pins = function( ) {

		var pins = $('.hp_pinned');

		pins.each(function( index ) {

			$(this).hcSticky({
			  stickTo: $('#hp_news_scene')[0],
			  top: 150,
			  bottom: 50,
			  followScroll: false,
			  queries: {
			    768: {
			      disable: true
			    }
			  }
			});
		
		});

	};




// New HomePage loaded...

	if( $('.node-type-homepage').length > 0 ) {

		if( ! isMobile.any ) {

			launch_hp_links_focus( $hphead_menu_item );

			set_hp_pins();

			autoSizeText();


// Handle Hover & Out events

			$('body').on('mouseover', '.hphead_menu_link', function(event) {

				var that = $(this);

				var link_img = $(this).attr('data-img');

				// clearTimeout(remove_link_content);

				display_link_content = setTimeout( function() {

					clearInterval(highlight_hp_interval);

					$hphead_menu_item.not( that ).removeClass('focused');
					$hphead_menu_link.not( that ).removeClass('focused');
					$hphead_menu_link.not( that ).parent().addClass('hide');

					$('#hphead_content_bg').css('background-image', 'url(' + link_img + ')');
					$('#hphead_content_bg').addClass('transition');

					that.addClass('focused');

				}, hover_latence);

			});


			$('body').on('mouseout', '.hphead_menu_link', function(event) {

					var that = $(this);

					$hphead_menu_link.removeClass('focused');
					$hphead_menu_item.removeClass('focused hide');

					$('#hphead_content_bg').css('background-image', 'unset');
					$('#hphead_content_bg').removeClass('transition');

					clearTimeout(display_link_content);

					launch_hp_links_focus( $hphead_menu_item );

			});


		}

	}




// HP MOBILE FUNCTIONS

	if( isMobile.any ) {

		$hphead_menu_link.each(function() {

			var that = $(this);
			var link_img = that.attr('data-img-mobile');

			var that_hpscreen_id = that.parents('.hphead_menu_item').attr('data-id');
			var hpscreen_in;
			var bg_screen_isactive = false;

			that.parents('.hphead_menu_item').css('background-image', 'url(' + link_img + ')');

			if( that.find('.link_text--mobile').length === 0 ) {
				that.parents('.hphead_menu_item').hide();
			}
			

		});


	}




// NEWS TICKER

	var news_feed_speed = $('#news_feed').attr('data-vitesse');
	var news_feed_color = $('#news_feed').attr('data-color-text');
	var news_feed_bg = $('#news_feed').attr('data-color-bkg');

	if( news_feed_speed == '' ) {
		news_feed_speed = 20000;
	}
	else {
		news_feed_speed = parseInt(news_feed_speed);
	}

	if( news_feed_color != '' ) {
		$('#news_feed').css('color', news_feed_color);
	}

	if( news_feed_bg != '' ) {
		$('#news_feed').css('background-color', news_feed_bg);
	}	

  $('#news_feed').marquee({
  	duration: news_feed_speed,
  	startVisible: true,
  	delayBeforeStart: 500,
  	duplicated: true,
  });







	/* 
	* COLLECTIONS TPL (05/2021)
	*******************/ 


	var $coll_slide_imgs = $('.collections_slider--img');

	if( $coll_slide_imgs.length > 0 ) {

		$coll_slide_imgs.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			if(slick.slideCount != 1 && slick.slideCount>0) {
				$('.slider_outer').css('opacity', '1');
			}
		});


		$coll_slide_imgs.slick( {
			centerMode: true,
			centerPadding: '60px',
			infinite: true,
  		slidesToShow: 3,
  		variableWidth: true,
  		adaptiveHeight: false,
  		asNavFor: '.collections_slider--caption',
  		arrows: false,
  		speed: 600,
			responsive: [
			    {
			      breakpoint: 600,
			      settings: {
  						slidesToShow: 3,
							centerMode: true,
			      }
			    },
			  ]
 		});


		$coll_slide_imgs.find('a').on('click', function(e){

			var parent_slide = $(this).parents('.slick-slide');

			if( ! $(parent_slide).hasClass('slick-center') ) {
				e.preventDefault();

				var slideIndex = $(parent_slide).attr("data-slick-index");
				$coll_slide_imgs.slick('slickGoTo', slideIndex);	
			}

		});


		var cookie_collection_slider = readCookie("collection-slider");
		if (cookie_collection_slider) {

				var slide_active = $('[data-nid=' + cookie_collection_slider + ']');
				var slide_active_index = $(slide_active).parents('.slick-slide').attr("data-slick-index");

       	setTimeout(function() {
           $coll_slide_imgs.slick('slickGoTo', slide_active_index);	
       	}, 1000);

		}
		eraseCookie("collection-slider");


		var $coll_slide_captions = $('.collections_slider--caption');
		if( $coll_slide_captions.length > 0 ) {

			$coll_slide_captions.slick( {
				infinite: true,
				fade: true,
	  		asNavFor: '.collections_slider--img',
	  		prevArrow: '<button type="button" class="slick-prev"></button>',
	  		nextArrow: '<button type="button" class="slick-next"></button>',
			});

		}


	} // end if($coll_slide_imgs.length)





	/* 
	 * NEW SLIDERS (02/2022)
	 *******************/ 


	const slide_mediums = document.querySelectorAll('.slide_medium');

	if( slide_mediums.length > 0 ) {

		for( slide of slide_mediums ) {
			var slider_medium = tns({
				container: slide,
				items: 1.4,
				autoplay: false,
				loop: false,
				mouseDrag: true,
				controlsText: ['', ''],
				responsive: {
					880: {
						items: 2.2
					}
				}
			});
		}
	}


	const slide_smalls = document.querySelectorAll('.slide_small');

	if( slide_smalls.length > 0 ) {

		for( slide of slide_smalls ) {
			var slide_small = tns({
				container: slide,
				items: 1.4,
				autoplay: false,
				loop: false,
				mouseDrag: true,
				controlsText: ['', ''],
				responsive: {
					880: {
						items: 3
					}
				}
			});
		}
	}



	const slide_artworks = document.querySelectorAll('.slide_medium--artworks');

	if( slide_artworks.length > 0 ) {

		for( slide of slide_artworks ) {
			var slider_medium = tns({
				container: slide,
				items: 1.4,
				autoplay: false,
				loop: false,
				mouseDrag: true,
				autoWidth: true,
				controlsText: ['', ''],
				gutter: 40,
				responsive: {
					880: {
						items: 2.2
					}
				}
			});
		}
	}

	
	


	// EVENTS > Open COPY 

	const openContent = document.querySelector('#js-openContent')

	if( openContent !== null ) {

		openContent.addEventListener('click', (e) => {
		e.preventDefault();

		openContent.classList.toggle('reversed');
		document.querySelector('.mod-copy').classList.toggle('open')

		if( openContent.classList.contains('reversed') ) {
			openContent.querySelector('.c-more-label').innerText = 'voir moins';
		}
		else {
			openContent.querySelector('.c-more-label').innerText = 'voir plus';

		}
		})
	}



	/* 
	* END READY
	*******************/ 

});








/*
 * On Window REsize
 *******************/ 

$(window).on('resize', function(){
	var win = $(this); 
	if (win.height() < 880) { 
		$('.site-logo h1').html('LA');
	}
	if (win.width() >= 880) { 
		$('.site-logo h1').html('Lafayette <br>Anticipations');
	}
});




/*
 * LazyLoading
 *******************/ 

;(function() {
    // Initialize lazyloading
    var bLazy = new Blazy();
})();


;(function() {

    var bLazy_carnet = new Blazy({
      
        selector: '.b-lazy--cst',

        success: function(ele){

          var id_slide = ele.closest('.item-image--slide');
      		var cst_slide_inner_height = $(id_slide).find('.cst-slide_inner').outerHeight();
      		var max_height = 0;

          $(id_slide).find('.cst-slide_inner img').each(function() {

            $(this).css('max-height', cst_slide_inner_height - 50);
            var that_height = $(this).outerHeight();
            if( that_height > max_height ) {
              max_height = that_height;
            }
          });

          if( typeof max_height !== 'undefined' ) {
            $(id_slide).find('.cst-slide_inner').css('height', max_height + 50 ).removeClass('square-content');
            $(id_slide).find('.cst-slide').removeClass('square');  
          }


        }, 
      error: function(ele, msg){
            if(msg === 'missing'){
                // Data-src is missing
            }
            else if(msg === 'invalid'){
                // Data-src is invalid
            }  
        }
    });
})();





/*
 * Scripts after complete loading
 *******************/ 

$( window ).load(function() {

 
	var images = $('.event_media img');
	images.each( function() {
		
		this_width = $(this).width();
		container_width = $(this).parent().width();

		if( this_width < container_width ) {
			$(this).siblings('.media_caption').width(this_width);
		}
	});


	// Masonry Archives

	$('.grid').masonry({
  // options
  	columnWidth: '.grid-sizer',
	  itemSelector: '.archive_item',
	  percentPosition: true
	});


  if( window_width > 768 ) {

		$('.grid_edition').masonry({
	  // options
	  	columnWidth: '.grid-sizer',
		  itemSelector: '.edition_item',
		  percentPosition: true
		});

  }

});



if ('ontouchstart' in document) {
  $('body').removeClass('no-touch');
}


