/* =======================================*/
/* COOKIES
/* =======================================*/
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(";");
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==" ") c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

/* =======================================*/
/* MAIL
/* =======================================*/
function isEmail(myVar){
	// La 1ère étape consiste à définir l'expression régulière d'une adresse email
	var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
	return regEmail.test(myVar);
}


$ = jQuery;



$(document).ready(function() {
	
	
	var language=$("html").attr("xml:lang");
	
	 $('a[href^="mailto:"]').each(function() {
		  this.href = this.href.replace('(at)', '@').replace(/\(dotty\)/g, '.');
		  // Remove this line if you don't want to set the email address as link text:
		  // this.innerHTML = this.href.replace('mailto:', '');
	 });
	
	
	/* =======================================*/
	/* COOKIE
	/* =======================================*/
	var cookie_fegl = readCookie("cookie-agreed");
	if (cookie_fegl) {
        //
	}else{
		
		$("#sliding-popup").animate({bottom: "0px"});
	}
	
	$('body').on('click', '#cookie_accept', function(event) {
		createCookie("cookie-agreed","1",90);
		$("#sliding-popup").animate({bottom: "-300px"});
	});
	
	
	/* =======================================*/
	/* RETOUR RECHERCHE COLLECTION
	/* =======================================*/
	
	if($('body').hasClass('node-type-oeuvre-collection') || $('body').hasClass('node-type-oeuvre') || $('body').hasClass('node-type-acteur') || $('body').hasClass('node-type-acteur-collection')){
		
		var cookie_collection = readCookie("collection-recherche");
		if (cookie_collection) {
			var res = cookie_collection.split("-");
			if(res[0]!='' && res[1]>0){
				$('#back_collection_search').css('display', 'flex');
				if($('body').hasClass('node-type-oeuvre-collection') || $('body').hasClass('node-type-acteur') || $('body').hasClass('node-type-acteur-collection')){
					var nav_nid=$('#main-content').attr('data-nid');
					// Navigation
					jQuery.ajax({
						url: "/"+language+"/ajax/collection",
						type: "POST",
						dataType: "json",
						data: { string : res[0], limit:res[1], acquisition : res[3], nav : 1, nav_nid : nav_nid},
						success: function(data){
							
							if(data.prev.nid>0 || data.next.nid>0){
								if(data.prev.nid>0){
									$('#nav_collection .nav_page-prev').attr('title', data.prev.title).attr('href', data.prev.url);
								}else{
									$('#nav_collection .nav_page-prev').hide();
								}
								if(data.next.nid>0){
									$('#nav_collection .nav_page-next').attr('title', data.next.title).attr('href', data.next.url);
								}else{
									$('#nav_collection .nav_page-next').hide();
								}
								$('#nav_collection').show();
							}
							
						},
						error: function (xhr, ajaxOptions, thrownError) {
							
				        }
					});
				}
				
				
			}
		}
		
		var cookie_collection_slider = readCookie("collection-slider");
		if (cookie_collection_slider) {
			$('#back_collection_search').css('display', 'flex');
			if($('body').hasClass('node-type-oeuvre-collection')){
				var nav_nid=$('#main-content').attr('data-nid');
				// Navigation
				jQuery.ajax({
					url: "/"+language+"/ajax/collection-nav-slider",
					type: "POST",
					dataType: "json",
					data: { nav_nid : nav_nid},
					success: function(data){
						
						if(data.prev.nid>0 || data.next.nid>0){
							if(data.prev.nid>0){
								$('#nav_collection .nav_page-prev').attr('title', data.prev.title).attr('href', data.prev.url);
							}else{
								$('#nav_collection .nav_page-prev').hide();
							}
							if(data.next.nid>0){
								$('#nav_collection .nav_page-next').attr('title', data.next.title).attr('href', data.next.url);
							}else{
								$('#nav_collection .nav_page-next').hide();
							}
							$('#nav_collection').show();
						}
						
					},
					error: function (xhr, ajaxOptions, thrownError) {
						
			        }
				});
			}
		}
		
	}

	$('body').on('click', '#kill_collection_search', function(event) {
		$(this).parent().slideUp();
		$('#nav_collection').hide();
		eraseCookie("collection-recherche");
		eraseCookie("collection-slider");
	});
	
	
	
	$('body').on('click','#collections_search #autocomplete li', function(event) {
		$('#btn_search').trigger('click');
	});
	
	
	/* =======================================*/
	/* RETOUR COLLECTION ARTISTE
	/* =======================================*/
	
	if($('body').hasClass('node-type-oeuvre-collection') || $('body').hasClass('node-type-oeuvre') || $('body').hasClass('node-type-acteur') || $('body').hasClass('node-type-acteur-collection')){
		
		var cookie_collection_artiste = readCookie("collection-artiste");
		if (cookie_collection_artiste) {
			$('#back_collection_artist').css('display', 'flex');
		}
	}

	$('body').on('click', '#kill_collection_artist', function(event) {
		$(this).parent().slideUp();
		$('#nav_collection').hide();
		eraseCookie("collection-artiste");
	});

	
	$('audio,video').bind('play', function() {
	    activated = this;
	    $('audio,video').each(function() {
	        if(this != activated) this.pause();
	    });
	});
	
	$('body').on('click', '.settings_node', function(event) {
		var url = $(this).attr('data-href'); 
		event.preventDefault();
		document.location.href=url;
		
	});
	
	$('body').on('click', '.js-scrollTo', function(event) {
		var page = $(this).attr('data-href'); 
		if(page!=''){
			var speed = 250; 
			$('html, body').animate( { scrollTop: $(page).offset().top-250 }, speed ); // Go
		}
		
	});
	
	$('.js-modal-trigger').on('click', function(event) {
		var id=$(this).attr("data-id");
		event.preventDefault();
		$(id).addClass('open');
		$('body').addClass('no-scroll');
	});
	
	$('.modal .close').on('click', function(event) {
		event.preventDefault();
		$('.modal').removeClass('open');
		$('body').removeClass('no-scroll');
	});
	
	
	
	/* =======================================*/
	/* NEWSLETTER
	/* =======================================*/

	$('.newsletter_form input[type=text]').keydown(function(e){
		if (e.keyCode == 13) {
			$(this).parent().find("input[type=button]").trigger("click");
			return false;
        }
    });
	
	$('.newsletter_form input[type=text]').blur(function(e){
		var email=$(".newsletter_form input.email").val();
		var prenom=$(".newsletter_form input.firstname").val();
		var nom=$(".newsletter_form input.lastname").val();
		
		
		if(email!='' && prenom!='' && nom!=''){
			$('#valid_newsletter').removeClass('disabled');
		}else{
			$('#valid_newsletter').addClass('disabled');
		}
    });
	
	
	$('body').on('click', '#valid_newsletter:not(.disabled)', function(event) {
		var form=$(this).parent().parent();
		
		form.find(".msg_valid").hide();
		form.find(".msg_error").hide();
		form.find("input[type=text]").removeClass('error');
		var email=form.find("input.email").val();
		var prenom=form.find("input.firstname").val();
		var nom=form.find("input.lastname").val();
		
		console.log('Email',email);
		if(email=='' || prenom=='' || nom==''){
			 
			 if(!isEmail(email)){
				form.find("input.email").focus().addClass('error');
			 }
			 if(prenom==''){
				form.find("input.firstname").focus().addClass('error');
			 }
			 
			 if(nom==''){
				form.find("input.lastname").focus().addClass('error');
			 }
			 	
		}else if(!isEmail(email)){
				 
				form.find("input.email").focus().addClass('error');
				form.find(".msg_error").show();	
			
		
		}else{
			form.find(".msg_error").hide();
			form.find(".btn").attr("disabled",true);
			form.css("opacity","0.5");
			jQuery.ajax({
				url: "/newsletter/inscription",
				type: "POST",
				dataType: "json",
				data: { email: email, prenom : prenom, nom : nom, language : language},
				success: function(data){
					form.find(".msg_valid").show();
					form.find(".btn").attr("disabled",false);
					form.css("opacity","1");
					form.find("input[type=text]").val("");
				},
				error: function (xhr, ajaxOptions, thrownError) {
					
		        }
			});
		}
		
	});	
	
	
	$('body').on('click', '#unvalid_newsletter', function(event) {
		var form=$(this).parent().parent();
		
		form.find(".msg_valid").hide();
		form.find(".msg_error").hide();
		form.find("input[type=text]").removeClass('error');
		var email=form.find("input[type=text]").val();
		
		console.log('Email',email);
		if(!isEmail(email)){
			form.find(".msg_error").show();
			form.find("input[type=text]").focus().addClass('error');
		}else{
			form.find(".msg_error").hide();
			form.find(".btn").attr("disabled",true);
			form.css("opacity","0.5");
			jQuery.ajax({
				url: "/newsletter/desinscription",
				type: "POST",
				dataType: "json",
				data: { email: email, language : language},
				success: function(data){
					form.find(".msg_valid").show();
					form.find(".btn").attr("disabled",false);
					form.css("opacity","1");
					form.find("input[type=text]").val("");
				},
				error: function (xhr, ajaxOptions, thrownError) {
					
		        }
			});
		}
		
	});	
	
	/* =======================================*/
	/* PRESSE
	/* =======================================*/
	
	$('#presse_code_form input[type=text]').keydown(function(e){
		if (e.keyCode == 13) {
			$(this).parent().find("input[type=button]").trigger("click");
			return false;
        }
    });
		
	$('body').on('click', '#presse_code_form #valid_code', function(event) {
		
		var form=$(this).parent().parent();
		
		var code=form.find('input[type=text]').val();
		form.find(".msg_code_acces").hide();
		if(code==''){
			form.find("input[type=text]").val("").focus();
			return false;
		}else{
			form.find(".btn").attr("disabled",true);
			jQuery.ajax({
				url: "/presse/acces",
				type: "POST",
				dataType: "json",
				data: { code : code},
				success: function(data){
					if(data.acces==1){
						//document.location.href=url_ressource+'?code='+code;
						form.attr("action",data.url)
						form.submit();
					}else{
						form.find(".btn").attr("disabled",false);
						form.find("input[type=text]").val("").focus();
						form.find(".msg_code_acces").show();
						return false;
					}
				},
				error: function (xhr, ajaxOptions, thrownError) {
					
		        }
			});
		}
	});
	
	
	
	$('body').on('click', '#more_artwork', function(event) {
		
		//$('.type_event').removeClass('right_arrow');
		//$(this).addClass('right_arrow');
		$('.event_artists_inner').css("opacity",0.5).addClass("loader");
		var nid=$(this).attr("data-nid");
		var limit=$(this).attr("data-limit");
			jQuery.ajax({
				url: "/"+language+"/ajax/oeuvre",
				type: "POST",
				dataType: "json",
				data: { nid: nid, limit : limit},
				success: function(data){
					$('#more_artwork').remove();
					$('.event_artists_inner').css("opacity",1).removeClass("loader").append(data.output);
					bLazy.revalidate();
				},
				error: function (xhr, ajaxOptions, thrownError) {
					
		        }
			});
		
	});	
	
	/* =======================================*/
	/* AGENDA
	/* =======================================*/
	
	$('body.page-agenda').on('click', '.agenda_meta_filters a', function(event) {
		
		$('.agenda_meta_filters a').removeClass('fc_12').removeClass('meta-gray');
		$('.agenda_meta_filters a').addClass('fc_11').removeClass('no-margin');
		$(this).addClass('fc_12').addClass('meta-gray');
		$('.list_manifestations').css("opacity",0.5).addClass("loader");
		var tid=$(this).attr("data-tid");
		var date=$("#datepicker").datepicker().val();
		createCookie("agenda",tid,0);
		
		jQuery.ajax({
			url: "/"+language+"/ajax/agenda",
			type: "POST",
			dataType: "json",
			data: { tid: tid, date : date, limit : 0},
			success: function(data){
				
				$('.list_manifestations').css("opacity",1).removeClass("loader").html(data.output);
				//bLazy.revalidate();
				get_hour();
				set_pins();
				close_nav();

				//$('.ui-datepicker-unselectable').html('<span>&nbsp;</span>');
			},
			error: function (xhr, ajaxOptions, thrownError) {
				
			}
		});
		
	});	
	
	
	$('body').on('click', '#more_agenda', function(event) {
		var button=$(this);
		var date=$("#datepicker").datepicker().val();
		
		$('.list_manifestations').css("opacity",0.5).addClass("loader");
		var tid=$('.agenda_meta_filters a.meta-gray').attr("data-tid");
		var date=button.attr("data-date");
		var limit=button.attr("data-limit");
			jQuery.ajax({
				url: "/"+language+"/ajax/agenda",
				type: "POST",
				dataType: "json",
				data: { tid: tid, date : date, limit : limit},
				success: function(data){
					button.remove();
					
					
					$('.list_manifestations').css("opacity",1).removeClass("loader").append($(data.output));
					$(".list_manifestations h2").each(function(index) {
						var timestamp=$(this).attr("data-timestamp");
						
						if($("h2[data-timestamp="+timestamp+"]").length>1){
							$("h2[data-timestamp="+timestamp+"]:last").html("&nbsp;");
						}
					});
					//bLazy.revalidate();
					get_hour();
					set_pins();
					//if()
					//$('.ui-datepicker-unselectable').html('<span>&nbsp;</span>');
				},
				error: function (xhr, ajaxOptions, thrownError) {
					
		        }
			});
		
	});	
	
	var cookie_agenda = readCookie("agenda");
	if (parseInt(cookie_agenda)>0){
		if($('.agenda_meta_filters a[data-tid='+parseInt(cookie_agenda)+']:visible').length>0){
			$('.agenda_meta_filters a[data-tid='+parseInt(cookie_agenda)+']:visible').trigger('click');
		}
	}
	
	/* =======================================*/
	/* HOMEPAGE VIDEO MENU LINK
	/* =======================================*/
	$('body').on('click', '.hphead_menu_link', function(event) {
		if(parseInt($(this).attr('data-categorie-media'))>0){
			event.preventDefault();
			createCookie("mediatheque",$(this).attr('data-categorie-media')+'-1',0);
			document.location.href=$(this).attr('href');
			return false;
		}
		
		if(parseInt($(this).attr('data-categorie-agenda'))>0){
			event.preventDefault();
			createCookie("agenda",$(this).attr('data-categorie-agenda'),0);
			document.location.href=$(this).attr('href');
			return false;
		}
	});
	
	
	
	
	

	
	//if($('body.page-file').length>0){
	//	$('.page-content').append($('.bloc_bottom_expo_agenda'));
	//	$('.bloc_bottom_expo_agenda').show();
	//}
	
	/* =======================================*/
	/* MEDIATHEQUE
	/* =======================================*/
	
	$('body').on('click', '.teaser_manif_virtual a', function(event) {
		event.preventDefault();
		var tid=$('.mediatheque_meta_filters a.meta-gray').attr("data-tid");	
		document.location.href=$(this).attr('href')+'&tid='+tid;
		return false;
	});
	
	$('body.page-mediatheque ').on('click', '.mediatheque_meta_filters a:not(.disabled)', function(event) {
		var button=$(this);
		$('.mediatheque_meta_filters a').removeClass('fc_12').removeClass('meta-gray');
		$('.mediatheque_meta_filters a').addClass('fc_11').removeClass('no-margin');
		button.addClass('fc_12').addClass('meta-gray').addClass('disabled');
		$('.medias_grid').css("opacity",0.5).addClass("loader");
		var tid=button.attr("data-tid");

		$('.medias_grid').attr('data-nb-medias', button.attr('data-nb-medias'));	
		
		media_load(tid, 1, button);	
		
	});	
	
	
	$('body').on('click', '.medias_pagination a:not(.disabled)', function(event) {
		var button=$(this);
		button.addClass('disabled');
		
		$('.medias_grid').css("opacity",0.5).addClass("loader");
		var tid=$('.mediatheque_meta_filters a.meta-gray').attr("data-tid");
		var num_page = $(this).attr('data-num-page');
		
		media_load(tid, num_page, button);	
		
	});	
	
	function media_load(tid, num_page, button){
		jQuery.ajax({
			url: "/"+language+"/ajax/media",
			type: "POST",
			dataType: "json",
			data: { tid: tid, num_page : num_page},
			success: function(data){
				if(button !== null){
					button.removeClass('disabled');
				}
				$('.medias_grid').attr('data-current-page', num_page);
				$('.medias_grid').attr('data-nb-medias', data.nb_medias);	
				$('.medias_grid').css("opacity",1).removeClass("loader").html(data.output);
				media_nav();
				createCookie("mediatheque",tid+'-'+num_page,0);
				
				if( $('.teaser_manif_virtual').length % 3 !== 0 ) {
					$('.medias_grid').append('<div></div>');
				}

				var els = $('.teaser_media');
				teaser_autoplay( els );

				get_media_progression( $('.teaser_manif_virtual') );


				if( isMobile.any ) {
					$('html, body').animate( { scrollTop: $('.medias_grid').offset().top -200 }, 250 );
				}
				else {
					set_pins();
				}


			},
			error: function (xhr, ajaxOptions, thrownError) {
				
			}
		});
	}
	
	function media_nav(){
		var nb_medias=parseInt($('.medias_grid').attr('data-nb-medias'));
		var range=parseInt($('.medias_grid').attr('data-range'));
		var current_page=parseInt($('.medias_grid').attr('data-current-page'));
		
		$('.medias_pagination a').hide();
		$('.medias_pagination a:not(.nav_media)').parent().remove();
		
		
		if(nb_medias>range){
			$('.medias_pagination').show();
			
			var nb_page = Math.ceil(nb_medias/range);
			console.log('medias_grid', nb_medias, 'range', range, 'nb_page' , nb_page, 'current page', current_page);
			var page_start = 1;
			var page_end = nb_page;
			
			if(nb_page>10){
				var page_start=current_page-4;
				var page_end=current_page+4;
				if(page_start<1){
					page_start=1;
				}
				
				if(page_end<9){
					page_end=9;
				}
				
				if(page_end>nb_page){
					page_end=nb_page;
				}
			}
			for(i=page_start;i<=page_end;i++){
				var class_media='';
				if(i==current_page){
					class_media='active';
				}
				$('.medias_pagination a.next').parent().before('<li><a href="javascript:;" data-num-page="'+ i +'" class="'+class_media+'">'+ i +'</a></li>');
			}
			if((current_page*range)<nb_medias){
				$('.medias_pagination a.next').attr('data-num-page',(current_page+1)).show();
				$('.medias_pagination a.last').attr('data-num-page',nb_page).show();
			}
			
			if(current_page>1){
				$('.medias_pagination a.prev').attr('data-num-page',(current_page-1)).show();
				$('.medias_pagination a.first').attr('data-num-page',1).show();
			}
			
			
			
		}
	}
	
	$('body').on('click', '#kill_media_nav', function(event) {
		$(this).parent().parent().parent().slideUp();
		eraseCookie("mediatheque")
	});
	
	if($('body').hasClass('page-mediatheque')){
		
		var cookie_mediatheque = readCookie("mediatheque");
		if (cookie_mediatheque) {
			var res = cookie_mediatheque.split("-");
			if(parseInt(res[0])>0 || parseInt(res[1])>1){
				var tid=res[0];	
				var num_page=res[1];
				$('.medias_grid').html("").addClass("loader");
				$('.mediatheque_meta_filters a').removeClass('fc_12').removeClass('meta-gray');
				if($('.mediatheque_meta_filters a[data-tid='+tid+']').length==0){
					tid=0;
				}
				$('.mediatheque_meta_filters a[data-tid='+tid+']').addClass('fc_12').addClass("meta-gray");
				media_load(tid, num_page, null);	
				
				
				
			}else{
			media_load(0, 1, null);
			}
		}else{
			media_load(0, 1, null);
		}
		
	}
	
	
	
	
		$('body').on('click', '#form-presse .btn', function(event) {
			
		var form = $(this).closest('form');
		
		form.find(".msg_valid").hide();
		form.find(".msg_error").hide();
		form.find("input,textarea").removeClass('error');
		var prenom=form.find("#firstname").val();
		var nom=form.find("#name").val();
		var email1=form.find("#email1").val();
		var email2=form.find("#email2").val();
		var media=form.find("#media").val();
		
		var language=$("html").attr("xml:lang");	
		
		var nb_error=0;
	
		
		if(media==''){
			form.find("input,textarea").blur();
			form.find("#media").focus().addClass('error');
			nb_error++;
		}

		if(email1!=email2){
			form.find("input,textarea").blur();
			form.find("#email2").focus().addClass('error');
			nb_error++;
		}
		
		if(!isEmail(email2)){
			form.find("input,textarea").blur();
			form.find("#email2").focus().addClass('error');
		}
		
		if(!isEmail(email1)){
			form.find("input,textarea").blur();
			form.find("#email1").focus().addClass('error');
			nb_error++;
		}
		
		
		
		if(nom==''){
			form.find("input,textarea").blur();
			form.find("#name").focus().addClass('error');
			nb_error++;
		}
		
		
		if(prenom==''){
			form.find("input,textarea").blur();
			form.find("#firstname").focus().addClass('error');
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
			url: "/presse/envoi",
			type: "POST",
			dataType: "json",
			data: { email: email1, nom : prenom+" "+nom, media : media},
			success: function(data){
				
				form.find(".btn").attr("disabled",false);
				form.css("opacity","1");
				form.find("input[type=text],textarea").val("");
				form.find("label,input,textarea,.description_mandatory").hide();
				form.find(".msg_valid").show();
			},
			error: function (xhr, ajaxOptions, thrownError) {
				
	        }
		});
		
		
	});	
		
		
		$('body').on('click', '#form-contact .btn', function(event) {
			
			var form = $(this).closest('form');
			
			form.find(".msg_valid").hide();
			form.find(".msg_error").hide();
			form.find("input,textarea").removeClass('error');
			var prenom=form.find("#firstname").val();
			var nom=form.find("#name").val();
			var email1=form.find("#email1").val();
			var email2=form.find("#email2").val();
			var cp=form.find("#cp").val();
			var pays=form.find("#pays").val();
			var objet=form.find("#objet").val();
			var message=form.find("#message").val();
			
			var language=$("html").attr("xml:lang");	
			
			var nb_error=0;
			
			if(message==''){
				form.find("input,textarea").blur();
				form.find("#message").focus().addClass('error');
				nb_error++;
			}
			
			if(objet==''){
				form.find("input,textarea").blur();
				form.find("#objet").focus().addClass('error');
				nb_error++;
			}
			
			
			if(pays==''){
				form.find("input,textarea").blur();
				form.find("#pays").focus().addClass('error');
				nb_error++;
			}
			
			if(cp==''){
				form.find("input,textarea").blur();
				form.find("#cp").focus().addClass('error');
				nb_error++;
			}
		

			if(email1!=email2){
				form.find("input,textarea").blur();
				form.find("#email1").focus().addClass('error');
				nb_error++;
			}
			
			if(!isEmail(email2)){
				form.find("input,textarea").blur();
				form.find("#email2").focus().addClass('error');
			}
			
			if(!isEmail(email1)){
				form.find("input,textarea").blur();
				form.find("#email1").focus().addClass('error');
				nb_error++;
			}
			
			
			
			if(nom==''){
				
				form.find("input,textarea").blur();
				form.find("#name").focus().addClass('error');
				nb_error++;
			}
			
			
			if(prenom==''){
				form.find("input,textarea").blur();
				form.find("#firstname").focus().addClass('error');
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
				url: "/contact/envoi",
				type: "POST",
				dataType: "json",
				data: { email: email1, nom : prenom+" "+nom, cp : cp, pays : pays, objet : objet, message : message},
				success: function(data){
					
					form.find(".btn").attr("disabled",false);
					form.css("opacity","1");
					form.find("input[type=text],textarea").val("");
					form.find("label,input,textarea,.description_mandatory").hide();
					form.find(".msg_valid").show();
				},
				error: function (xhr, ajaxOptions, thrownError) {
					
		        }
			});
			
			
		});	
	
	
	
	
	
	
});		
	