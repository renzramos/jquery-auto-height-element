$(window).resize(function(){
	initArticleBox(".box");
});
	
$(window).load(function(){
	initArticleBox(".box");
});
function initArticleBox(selector){
	var box = $(selector)
	box.height("auto");

	if ($(window).width() > 768){
		var maxHeight = 0;
		var article = box.each(function(){

		    maxHeight = Math.max(maxHeight, jQuery(this).height());

		}).height(maxHeight);;

	}else{
		box.height("auto");
	}
}
