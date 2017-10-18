$(function() {
	$('span.collapsible').each(function(i, obj){
		if($(obj).attr('id').match(/-hide$/)){
			$(obj).hide();
	        $("div#"+$(obj).attr('id').replace('-hide', '')).hide();
		} else {
			$(obj).show();
		}
	});
	$(document).on('click', 'span.collapsible', function(){
		if($(this).attr('id') .match(/-show$/)){
			var collapse_id = $(this).attr('id').replace('-show', '');
			$(this).hide();
			$("span#"+collapse_id+"-hide").show();
			$("div#"+collapse_id).fadeToggle(150);
		} else {
            var collapse_id = $(this).attr('id').replace('-hide', '');
            $(this).hide();
			$("span#"+collapse_id+"-show").show();
			$("div#"+collapse_id).fadeToggle(150);
		}
	});
});