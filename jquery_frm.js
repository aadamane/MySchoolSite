$(document).ready(function(){
	$('#modular_form').hide();

});

$(function(){
	$( "#modular_form" ).dialog({
		autoOpen: false,
		modal: true
	
	});
	
	$("button").remove(":contains('close')");
	
	$( "#frm_joinus" ).button().click(function() {
		$( "#modular_form" ).dialog("open");
	});
	
	$("#frm_cancel").button().click(function() {
		$("#modular_form").dialog("close");
		
	});
	
});
 