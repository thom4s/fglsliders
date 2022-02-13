Drupal.behaviors.autocompleteSupervisor = {
			    attach: function (context) {
			      $('#edit-field-oeuvre-und-0-nid', context).bind('autocompleteSelect', function(event, node) {

			        // Do custom stuff here...
			        var entity_id = $(this).val().replace($(node).text().trim(), '');
		        	// admin/fgl/json/oeuvre
			        jQuery.ajax({
						url: "/admin/fgl/json/oeuvre",
						type: "POST",
						dataType: "json",
						data: { nid: entity_id},
						success: function(data){
							// technique
							// dimensions
							// collection
							// auteur
							if(data.nid>0){
								$("#edit-field-poi-artiste-und-0-value").val(data.auteur).attr("readonly","readonly").addClass("resource");
								$("#edit-field-infos-technique-und-0-value").val(data.infos_technique).attr("readonly","readonly").addClass("resource");
								$("#edit-field-dimensions-und-0-value").val(data.dimensions).attr("readonly","readonly").addClass("resource");
								$("#edit-field-collection-und-0-value").val(data.collection).attr("readonly","readonly").addClass("resource");
								$("#edit-field-courtesy-und-0-value").val(data.courtesy).attr("readonly","readonly").addClass("resource");
								$("#edit-field-date-oeuvre-und-0-value").val(data.date_oeuvre).attr("readonly","readonly").addClass("resource");
								$("#edit-field-poi-exposition-und-0-value").val(data.exposition).attr("readonly","readonly").addClass("resource");
								/*
								var url = Drupal.settings.media.browserUrl;
							    var i = url.indexOf("?"); 
								Drupal.settings.media.browserUrl = url.slice(0,i+1) + "nid="+ data.nid + "&" + url.slice(i+1);		
								*/
								$("body").attr("data-nid-oeuvre",data.nid);
								 var url = Drupal.settings.media.browserUrl;
								 var i = url.indexOf("?"); 
								 Drupal.settings.media.browserUrl = url.slice(0,i+1) + "nid="+ data.nid + "&" + url.slice(i+1);
								}
							
						},
						error: function (xhr, ajaxOptions, thrownError) {
							
				        }
					});
			      });
			    }
			  };

function loadBrowser(){
	
			
			    var url = Drupal.settings.media.browserUrl;
			    console.log(url);
			    //var i = url.indexOf("?"); 
			
			    var nid = document.body.className.match(/(page-node-)(\d+)/)[2];
			    console.log('nid : '+nid);
			    if (!$.isNumeric(nid)) return;
			    if($("body").attr("data-nid-oeuvre")>0){
			    	nid=$("body").attr("data-nid-oeuvre");
			    }
			    // use query string "?" and not "/" or you break Media Pop-up at last screen
			    //Drupal.settings.media.browserUrl = url.slice(0,i+1) + "nid="+ nid + "&" + url.slice(i+1);
			    Drupal.settings.media.browserUrl +="&nid="+nid;
			
	
}

function load_stories(){
	$(".field-name-field-story .field-multiple-table > tbody > tr").each(function(i){
		var wrapper=$(this);
		wrapper.find(".field-name-field-titre label").html("Story "+(i+1));
	});
}

function load_bloc_page(){

	//jQuery('.filter-wrapper').hide();
	
	$(".field-name-field-blocs .field-multiple-table > tbody > tr").each(function(i){
		var wrapper=$(this);
		var type=$(this).find(".field-name-field-colonne select").val();
		wrapper.find("fieldset.group-col-2,fieldset.group-col-23").hide();
		if(type==1){
			wrapper.find("fieldset.group-col-2").show();
		}
		if(type==2){
			wrapper.find("fieldset.group-col-23").show();
		}
	});
	
	$(".field-name-field-colonne select").on("change", function(){
		var wrapper=$(this).parent().parent().parent();
		wrapper.find("fieldset.group-col-2,fieldset.group-col-23").hide();
		if($(this).val()==1){
			wrapper.find("fieldset.group-col-2").show();
		}else{
			wrapper.find("fieldset.group-col-23").show();
		}
	});
	
	
	$(".field-name-field-blocs-1 .field-multiple-table > tbody > tr").each(function(i){

		var wrapper=$(this).find(".field-name-field-bloc-type").parent();
		wrapper.find(".field-name-field-contenu-ancre-titre").hide();

		wrapper.find(".field-name-field-bloc-description,.field-name-field-bloc-media,.field-name-field-bloc-template").addClass("page_bloc_element").hide();
		var type=$(this).find(".field-name-field-bloc-type select").val();

		if(type=='description' || type=='media' || type=='template'){
			wrapper.find(".field-name-field-bloc-"+type).show();
		}

	});
	
	$(".field-name-field-blocs-2 .field-multiple-table > tbody > tr").each(function(i){

		var wrapper=$(this).find(".field-name-field-bloc-type").parent();
		wrapper.find(".field-name-field-contenu-ancre-titre").hide();

		wrapper.find(".field-name-field-bloc-description,.field-name-field-bloc-media,.field-name-field-bloc-template").addClass("page_bloc_element").hide();
		var type=$(this).find(".field-name-field-bloc-type select").val();

		if(type=='description' || type=='media' || type=='template'){
			wrapper.find(".field-name-field-bloc-"+type).show();
		}

	});
	
	$(".field-name-field-blocs-3 .field-multiple-table > tbody > tr").each(function(i){

		var wrapper=$(this).find(".field-name-field-bloc-type").parent();
		wrapper.find(".field-name-field-contenu-ancre-titre").hide();

		wrapper.find(".field-name-field-bloc-description,.field-name-field-bloc-media,.field-name-field-bloc-template").addClass("page_bloc_element").hide();
		var type=$(this).find(".field-name-field-bloc-type select").val();

		if(type=='description' || type=='media' || type=='template'){
			wrapper.find(".field-name-field-bloc-"+type).show();
		}

	});


	$(".field-name-field-bloc-type select").on("change", function(){
		var wrapper=$(this).parent().parent().parent();
		wrapper.find(".page_bloc_element").hide();
		if($(this).val()!='_none'){
			wrapper.find(".field-name-field-bloc-"+jQuery(this).val()).show();
		}
	});
	/*
	$(".field-name-field-blocs fieldset a").on("click", function(){
		console.log("zzzzgffdg");
		$(".field-name-field-blocs fieldset").addClass("collapsed");
		$(this).parent().parent().parent().removeClass("collapsed");
	});
	*/
	
}



$ = jQuery;

$(document).ready(function() {
	
	var language=$("html").attr("xml:lang");	
	
	$('.synchro_collection:not(.active)').on('click', function(event) {
		$(this).css('opacity',0.5).addClass('active');
		var nid=$(this).attr('data-nid');
		document.location.href='/'+language+'/node/'+nid+'/synchro_collection_exec/edit';
	});
	
	$('.synchro_ressource:not(.active)').on('click', function(event) {
		$(this).css('opacity',0.5).addClass('active');
		var nid=$(this).attr('data-nid');
		document.location.href='/'+language+'/node/'+nid+'/synchro_exec/edit';
	});
	
	$('.synchro_digitick:not(.active)').on('click', function(event) {
		$(this).css('opacity',0.5).addClass('active');
		var nid=$(this).attr('data-nid');
		document.location.href='/'+language+'/node/'+nid+'/synchro_digitick_exec/edit';
	});
	
	$('.synchro_localisation:not(.active)').on('click', function(event) {
		if(confirm('Attention, la synchronisation FR -> EN va remplacer l\'ensemble des champs éditables par ceux de la version française')){
			$(this).css('opacity',0.5).addClass('active');
			var nid=$(this).attr('data-nid');
			document.location.href='/'+language+'/node/'+nid+'/synchro_localisation_exec';
		}
	});
	
	
	$('body').on('click', '.vbo-table-select-all', function(event) {
		$(".vbo-select ").prop('checked',false);
		if($(this).prop('checked')){
			$(".vbo-select ").prop('checked',true);
		}
	});
	
	/*
	$('body').on('click', '.form-item-archive input', function(event) {
		if($(this).prop('checked')){
			$(".form-item-status input").prop('checked',false);
		}
	});
	
	$('body').on('click', '.form-item-status input', function(event) {
		if($(this).prop('checked')){
			$(".form-item-archive input").prop('checked',false);
		}
	});
	*/
	
	$('.field-type-image .preview .media-thumbnail img').show();
	if($(".node-exposition-form").length>0){
		$("#exposition-node-form .field-name-field-date-expo input").attr("readonly","readonly").addClass("resource");	
	}
	
	if($("#fgl-sys-settings").length>0){
		if(window.location.hash){
		
			var tab=window.location.hash.slice(1);
			$('ul.vertical-tabs-list li:eq('+(tab-1)+') a').trigger('click');
		}
			
		
	}
	
	if($(".page-node-edit").length>0){
		$(".tabs.primary li:eq(0) a").attr("href","javascript:;");
		$('body').on('click', '.tabs.primary li:eq(0) a', function(event) {
			$(".node-form #edit-submit").trigger("click");
			
			
		});
	}
	if($(".node-event-form").length>0){
		$(".i18n-fr .node-event-form .form-item-title input").attr("readonly","readonly").addClass("resource");
		$(".node-event-form .field-name-field-digitick input").attr("readonly","readonly").addClass("resource");
		$(".i18n-fr .node-event-form .field-name-field-description-courte textarea").attr("readonly","readonly").addClass("resource");
		$(".i18n-fr .node-event-form .field-name-field-description textarea").attr("readonly","readonly").addClass("resource");
		$("#edit-group_date").prepend($("#edit-field-event-date-recurrence"));
		
		
		$(".delete_past_date").click(function(){
			var index=$(this).attr("data-index");
			if(confirm("Confirmez la suppression ?")){
				$(".form-item-date-past-start-"+index+",.form-item-date-past-end-"+index+",.delete_past_date[data-index="+index+"]").hide();
        		$(".node-event-form #edit-field-event-datetime-3 tbody .draggable:eq("+index+") input").val("");
			}
		});

   
		
		
	}
	

	$('field-name-field-video-exposition th label').css('display','block');	
	$('field-name-field-video-artiste th label').css('display','block');
	$('field-name-field-video-oeuvre th label').css('display','block');	
	$('field-name-field-video-representation th label').css('display','block');	
	$('field-name-field-video-edition th label').css('display','block');
	
		//$('.field-name-field-video-exposition,.field-name-field-video-artiste,.field-name-field-video-oeuvre,.field-name-field-video-representation,.field-name-field-video-edition').append('<div class="lien_principal_video"><input type="checkbox">Lien principal (1er lien)</div>');
	$("body").on("change", "input[id^='edit-field-video-lien']", function(event) {
		var state = $(this).prop('checked');
		$("input[id^='edit-field-video-lien']").prop('checked',false);
		if(state == true){
			$(this).prop('checked',true);
		}
		// console.log("sqdqsdqsdqsdqdqsdqsd");
		//var lien= $('.field-name-field-video-exposition tbody tr:first .form-type-textfield input[type=text]').val();
		//console.log('lien', lien);
		//$('.field-name-field-video-lien-principal input[type=text]').val(lien);
		
	});
		
		
	
	
	
	
	if($(".node-event-formz").length>0){
		
		$(".node-event-form .form-item-field-event-datetime-und-0-value-date label").html("Date début");
		$(".node-event-form .form-item-field-event-datetime-und-0-value-time label").html("Heure début");
		$(".node-event-form .form-item-field-event-datetime-und-0-value2-date label").html("Date fin");
		$(".node-event-form .form-item-field-event-datetime-und-0-value2-time label").html("Heure fin");
		$(".node-event-form div[class$=field-event-bloc-datetime-und-0-value-date] label").html("Date début");
		$(".node-event-form div[class$=field-event-bloc-datetime-und-0-value-time] label").html("Heure début");
		$(".node-event-form div[class$=field-event-bloc-datetime-und-0-value2-date] label").html("Date fin");
		$(".node-event-form div[class$=field-event-bloc-datetime-und-0-value2-time] label").html("Heure fin");
		$(".node-event-form .field-name-field-event-bloc-datetime .date-padding").prev().hide();
		$(".node-event-form #edit-field-event-datetime-2 thead").hide();
		$(".node-event-form #edit-field-event-datetime-2 .field-multiple-drag").hide();
		$(".form-item-field-event-datetime-und-0 .end-date-wrapper").after($("#edit-field-event-focus"));
	
		

    	$("body").on("change", "#edit-field-event-date-type-und", function(event) {
    		var type=$(this).val();
    		load_type_date(type);
    		
    	});
    	var type_date=$("#edit-field-event-date-type-und").val();
    	load_type_date(type_date);
    	function load_type_date(type){
    		$('#edit-field-event-datetime-2').hide();
    		$('.form-item-field-event-datetime-und-0-value2-date').hide();
    		$('#edit-field-event-datetime-und-0-show-repeat-settings').prop("checked",false);
			$("#repeat-settings-fieldset").hide();
			if(type==1){
    			$("#edit-field-event-datetime-und-0-value2-datepicker-popup-0").val($("#edit-field-event-datetime-und-0-value-datepicker-popup-0").val());
    		}else if(type==2){
    			$('.form-item-field-event-datetime-und-0-value2-date').show();
    		}else if(type==3){
    			$('#edit-field-event-datetime-2').show();
    			
    		}else if(type==4){
    			$('#edit-field-event-datetime-und-0-show-repeat-settings').prop("checked",true);
    			$("#repeat-settings-fieldset").show();
    		}
    	}
    	
    	
		
		
	}
	
	if($(".node-news-form").length>0){
		
		$(".node-news-form .form-item-field-event-datetime-und-0-value-date label").html("Date début");
		$(".node-news-form .form-item-field-event-datetime-und-0-value-time label").html("Heure début");
		$(".node-news-form .form-item-field-event-datetime-und-0-value2-date label").html("Date fin");
		$(".node-news-form .form-item-field-event-datetime-und-0-value2-time label").html("Heure fin");
		$(".node-news-form div[class$=field-event-bloc-datetime-und-0-value-date] label").html("Date début");
		$(".node-news-form div[class$=field-event-bloc-datetime-und-0-value-time] label").html("Heure début");
		$(".node-news-form div[class$=field-event-bloc-datetime-und-0-value2-date] label").html("Date fin");
		$(".node-news-form div[class$=field-event-bloc-datetime-und-0-value2-time] label").html("Heure fin");
		$(".node-news-form .field-name-field-event-bloc-datetime .date-padding").prev().hide();
		$(".node-news-form #edit-field-event-datetime-2 thead").hide();
		$(".node-news-form #edit-field-event-datetime-2 .field-multiple-drag").hide();
		$(".form-item-field-event-datetime-und-0 .end-date-wrapper").after($("#edit-field-event-focus"));
	
		

    	$("body").on("change", "#edit-field-event-date-type-und", function(event) {
    		var type=$(this).val();
    		load_type_date(type);
    		
    	});
    	var type_date=$("#edit-field-event-date-type-und").val();
    	load_type_date(type_date);
    	function load_type_date(type){
    		$('#edit-field-event-datetime-2').hide();
    		$('.form-item-field-event-datetime-und-0-value2-date').hide();
    		$('#edit-field-event-datetime-und-0-show-repeat-settings').prop("checked",false);
			$("#repeat-settings-fieldset").hide();
			if(type==1){
    			$("#edit-field-event-datetime-und-0-value2-datepicker-popup-0").val($("#edit-field-event-datetime-und-0-value-datepicker-popup-0").val());
    		}else if(type==2){
    			$('.form-item-field-event-datetime-und-0-value2-date').show();
    		}else if(type==3){
    			$('#edit-field-event-datetime-2').show();
    			
    		}else if(type==4){
    			$('#edit-field-event-datetime-und-0-show-repeat-settings').prop("checked",true);
    			$("#repeat-settings-fieldset").show();
    		}
    	}
    	
    	
		
		
	}
	
	if($(".node-poi_festival-form").length>0){
		
		
		$(".node-poi_festival-form .form-item-title input").attr("maxlength","50");
		$('<div class="description">50 caractères max.</div>').appendTo($(".node-poi_festival-form .form-item-title"));	
		
		
		$(".node-poi_festival-form .form-item-field-event-datetime-und-0-value-date label").html("Date début");
		$(".node-poi_festival-form .form-item-field-event-datetime-und-0-value-time label").html("Heure début");
		$(".node-poi_festival-form .form-item-field-event-datetime-und-0-value2-date label").html("Date fin");
		$(".node-poi_festival-form .form-item-field-event-datetime-und-0-value2-time label").html("Heure fin");
		$(".node-poi_festival-form div[class$=field-event-bloc-datetime-und-0-value-date] label").html("Date début");
		$(".node-poi_festival-form div[class$=field-event-bloc-datetime-und-0-value-time] label").html("Heure début");
		$(".node-poi_festival-form div[class$=field-event-bloc-datetime-und-0-value2-date] label").html("Date fin");
		$(".node-poi_festival-form div[class$=field-event-bloc-datetime-und-0-value2-time] label").html("Heure fin");
		$(".node-poi_festival-form .field-name-field-event-bloc-datetime .date-padding").prev().hide();
		$(".node-poi_festival-form #edit-field-event-datetime-2 thead").hide();
		$(".node-poi_festival-form #edit-field-event-datetime-2 .field-multiple-drag").hide();
		$(".form-item-field-event-datetime-und-0 .end-date-wrapper").after($("#edit-field-event-focus"));
	
		

    	$("body").on("change", "#edit-field-event-date-type-und", function(event) {
    		var type=$(this).val();
    		load_type_date(type);
    		
    	});
    	var type_date=$("#edit-field-event-date-type-und").val();
    	load_type_date(type_date);
    	function load_type_date(type){
    		$('#edit-field-event-datetime-2').hide();
    		$('.form-item-field-event-datetime-und-0-value2-date').hide();
    		$('#edit-field-event-datetime-und-0-show-repeat-settings').prop("checked",false);
			$("#repeat-settings-fieldset").hide();
			if(type==1){
    			$("#edit-field-event-datetime-und-0-value2-datepicker-popup-0").val($("#edit-field-event-datetime-und-0-value-datepicker-popup-0").val());
    		}else if(type==2){
    			$('.form-item-field-event-datetime-und-0-value2-date').show();
    		}else if(type==3){
    			$('#edit-field-event-datetime-2').show();
    			
    		}else if(type==4){
    			$('#edit-field-event-datetime-und-0-show-repeat-settings').prop("checked",true);
    			$("#repeat-settings-fieldset").show();
    		}
    	}
    	
    	
		
		
	}
	
	
	if($(".node-homepage-form").length>0){
		
		

		

    	$("body").on("change", ".field-name-field-lien-structure", function(event) {
    		load_type_lien_structure($(this));
    	});
    	
    	
    	function load_type_lien_structure(elmt){
    		var wrapper=elmt.parent();
    		wrapper.find('.field-name-field-video-categorie').hide();
    		wrapper.find('.field-name-field-event-type').hide();
    		var type_lien = elmt.find('select').val();
			if(type_lien=='agenda'){
				wrapper.find('.field-name-field-event-type').show();
    		}else if(type_lien == 'mediatheque'){
    			wrapper.find('.field-name-field-video-categorie').show();
    		}
    	}
    	
    	$(".field-name-field-lien-structure").each(function(){
    		load_type_lien_structure($(this));
    	});
		
		
	}
	
	
	
	
	if($(".node-home-form").length>0){
		
		
		$("body").on("change", "#edit-field-double-exposition-und", function(event) {
			if($(this).is(":checked")){
				$('.group-double').show();
			}else{
				$('.group-double').hide();
			}
		});
		if($("#edit-field-double-exposition-und").is(":checked")){
			$('.group-double').show();
		}else{
			$('.group-double').hide();
		}
		
		
		
		$(".node-home-form .form-item-field-event-datetime-und-0-value-date label").html("Date début");
		$(".node-home-form .form-item-field-event-datetime-und-0-value-time label").html("Heure début");
		$(".node-home-form .form-item-field-event-datetime-und-0-value2-date label").html("Date fin");
		$(".node-home-form .form-item-field-event-datetime-und-0-value2-time label").html("Heure fin");
		$(".node-home-form div[class$=field-event-bloc-datetime-und-0-value-date] label").html("Date début");
		$(".node-home-form div[class$=field-event-bloc-datetime-und-0-value-time] label").html("Heure début");
		$(".node-home-form div[class$=field-event-bloc-datetime-und-0-value2-date] label").html("Date fin");
		$(".node-home-form div[class$=field-event-bloc-datetime-und-0-value2-time] label").html("Heure fin");
		$(".node-home-form .field-name-field-event-bloc-datetime .date-padding").prev().hide();
		$(".node-home-form #edit-field-event-datetime-2 thead").hide();
		$(".node-home-form #edit-field-event-datetime-2 .field-multiple-drag").hide();
		$(".form-item-field-event-datetime-und-0 .end-date-wrapper").after($("#edit-field-event-focus"));
	
		

    	$("body").on("change", "#edit-field-event-date-type-und", function(event) {
    		var type=$(this).val();
    		load_type_date(type);
    		
    	});
    	var type_date=$("#edit-field-event-date-type-und").val();
    	load_type_date(type_date);
    	function load_type_date(type){
    		$('#edit-field-event-datetime-2').hide();
    		$('.form-item-field-event-datetime-und-0-value2-date').hide();
    		$('#edit-field-event-datetime-und-0-show-repeat-settings').prop("checked",false);
			$("#repeat-settings-fieldset").hide();
			if(type==1){
    			$("#edit-field-event-datetime-und-0-value2-datepicker-popup-0").val($("#edit-field-event-datetime-und-0-value-datepicker-popup-0").val());
    		}else if(type==2){
    			$('.form-item-field-event-datetime-und-0-value2-date').show();
    		}else if(type==3){
    			$('#edit-field-event-datetime-2').show();
    			
    		}else if(type==4){
    			$('#edit-field-event-datetime-und-0-show-repeat-settings').prop("checked",true);
    			$("#repeat-settings-fieldset").show();
    		}
    	}
    	
    	
		
		
	}
	
	if($(".node-exposition-form").length>0){
		loadBrowser();
		
        $("#edit-field-expo-festival-und").change(function(){
        	ShowBilleterieExpo();
      });

      function ShowBilleterieExpo(){
            $("#edit-field-billeterie").hide();
            $("#edit-field-digitick-exposition").hide();
           
            if($("#edit-field-expo-festival-und").is(":checked")){
                $("#edit-field-billeterie").show();
            }else{
                $("#edit-field-digitick-exposition").show();
            }
      }

      ShowBilleterieExpo();
		
	}	
	
	if($(".node-oeuvre-form").length>0){
		

		
		loadBrowser();
		$(".node-oeuvre-form .field-name-field-date-oeuvre input").attr("readonly","readonly").addClass("resource");
		$(".node-oeuvre-form .field-name-field-exposition input").attr("readonly","readonly").addClass("resource");
		$(".node-oeuvre-form .field-name-field-courtesy input").attr("readonly","readonly").addClass("resource");
		$(".node-oeuvre-form .field-name-field-auteurs input").attr("readonly","readonly").addClass("resource");
		$(".node-oeuvre-form .field-name-field-participants input").attr("readonly","readonly").addClass("resource");
		
	}
	
	if($(".node-acteur-form").length>0){
		loadBrowser();
		$(".node-acteur-form .field-name-field-date-naissance input").attr("readonly","readonly").addClass("resource");
		$(".node-acteur-form .field-name-field-membres input").attr("readonly","readonly").addClass("resource");
		$(".node-acteur-form .field-name-field-date-naissance label").html("Date de naissance");
		
	}
	
	if($(".node-oeuvre_collection-form").length>0){
		$(".node-oeuvre_collection-form .form-item-field-date-acquisition-und-0-value input").attr("readonly","readonly").addClass("resource");
	}
	
	if($(".node-poi-form").length>0){
		
		$(".node-poi-form .field-name-field-poi-id input").attr("maxlength","3");
		$(".node-poi-form .form-item-title input").attr("maxlength","35");
		$('<div class="description">35 caractères max.</div>').appendTo($(".node-poi-form .form-item-title"));	
		$(".node-poi-form .field-name-field-url-beacon input").attr("readonly","readonly").addClass("resource");
		load_stories();
		
		if($("#edit-field-oeuvre-und-0-nid").val()!=''){
			$("#edit-field-poi-artiste-und-0-value").attr("readonly","readonly").addClass("resource");
			$("#edit-field-infos-technique-und-0-value").attr("readonly","readonly").addClass("resource");
			$("#edit-field-dimensions-und-0-value").attr("readonly","readonly").addClass("resource");
			$("#edit-field-collection-und-0-value").attr("readonly","readonly").addClass("resource");
			$("#edit-field-courtesy-und-0-value").attr("readonly","readonly").addClass("resource");
			$("#edit-field-date-oeuvre-und-0-value").attr("readonly","readonly").addClass("resource");
			$("#edit-field-poi-exposition-und-0-value").attr("readonly","readonly").addClass("resource");
		}
		
	}
	

	
	
	
	$(".form-item-test input").on("click",function(){
		var id_parent=$("#views-exposed-form-media-default-media-browser-1 input[name=id_parent]").val();
		$("#views-exposed-form-media-default-media-browser-1 #edit-field-idr-parent-value").val("");
		if($(this).prop('checked')){
			$("#views-exposed-form-media-default-media-browser-1 #edit-field-idr-parent-value").val(id_parent);
		}
	});
	if($(".node-page-form").length>0){
		load_bloc_page();
	}
	
	if($("#fgl-res-batch-form").length>0){
		
		$("#fgl-res-batch-form #edit-submit").on("click",function(){
			if($(this).hasClass("unactive")){
				return false;
			}else{
				$(this).addClass("unactive");
				$("#fgl-res-batch-form .loader").show();
			}
			

		});
		
		
	}
	
});



$(document).ajaxComplete(function(){
	
	
	if($(".node-page-form").length>0){
		load_bloc_page();
	}
	
	if($(".node-event-formz").length>0){
		$(".node-event-form div[class$=field-event-bloc-datetime-und-0-value-date] label").html("Date début");
		$(".node-event-form div[class$=field-event-bloc-datetime-und-0-value-time] label").html("Heure début");
		$(".node-event-form div[class$=field-event-bloc-datetime-und-0-value2-date] label").html("Date fin");
		$(".node-event-form div[class$=field-event-bloc-datetime-und-0-value2-time] label").html("Heure fin");
		$(".node-event-form .field-name-field-event-bloc-datetime .date-padding").prev().hide();
		$(".node-event-form #edit-field-event-datetime-2 thead").hide();
		$(".node-event-form #edit-field-event-datetime-2 .field-multiple-drag").hide();
	}	
	
	if($(".node-news-form").length>0){
		$(".node-news-form div[class$=field-event-bloc-datetime-und-0-value-date] label").html("Date début");
		$(".node-news-form div[class$=field-event-bloc-datetime-und-0-value-time] label").html("Heure début");
		$(".node-news-form div[class$=field-event-bloc-datetime-und-0-value2-date] label").html("Date fin");
		$(".node-news-form div[class$=field-event-bloc-datetime-und-0-value2-time] label").html("Heure fin");
		$(".node-news-form .field-name-field-event-bloc-datetime .date-padding").prev().hide();
		$(".node-news-form #edit-field-event-datetime-2 thead").hide();
		$(".node-news-form #edit-field-event-datetime-2 .field-multiple-drag").hide();
	}	
	
	if($(".node-poi_festival-form").length>0){
		$(".node-poi_festival-form div[class$=field-event-bloc-datetime-und-0-value-date] label").html("Date début");
		$(".node-poi_festival-form div[class$=field-event-bloc-datetime-und-0-value-time] label").html("Heure début");
		$(".node-poi_festival-form div[class$=field-event-bloc-datetime-und-0-value2-date] label").html("Date fin");
		$(".node-poi_festival-form div[class$=field-event-bloc-datetime-und-0-value2-time] label").html("Heure fin");
		$(".node-poi_festival-form .field-name-field-event-bloc-datetime .date-padding").prev().hide();
		$(".node-poi_festival-form #edit-field-event-datetime-2 thead").hide();
		$(".node-poi_festival-form #edit-field-event-datetime-2 .field-multiple-drag").hide();
	}	
	
	if($(".node-home-form").length>0){
		$(".node-home-form div[class$=field-event-bloc-datetime-und-0-value-date] label").html("Date début");
		$(".node-home-form div[class$=field-event-bloc-datetime-und-0-value-time] label").html("Heure début");
		$(".node-home-form div[class$=field-event-bloc-datetime-und-0-value2-date] label").html("Date fin");
		$(".node-home-form div[class$=field-event-bloc-datetime-und-0-value2-time] label").html("Heure fin");
		$(".node-home-form .field-name-field-event-bloc-datetime .date-padding").prev().hide();
		$(".node-home-form #edit-field-event-datetime-2 thead").hide();
		$(".node-home-form #edit-field-event-datetime-2 .field-multiple-drag").hide();
	}	
	
	if($(".node-poi-form").length>0){
		load_stories();	
	}
	
	if($(".node-exposition-form").length>0){
		loadBrowser();
	}	
	
	if($(".node-acteur-form").length>0){
		loadBrowser();
	}	
	
	if($(".node-oeuvre-form").length>0){
		loadBrowser();
	}	
	
});