// box auto-height
  	$(window).resize(function(){
		initArticleBox();
		console.log("check");
	});
	
    $(window).load(function(){
        initArticleBox();
    });

	function initArticleBox(){
		$(".article-auto-height .content-container").height("auto");
		$(".article-auto-height .content-container .content").height("auto");
		$(".article-auto-height .content-container .image").height("auto");
		$(".article-auto-height h2").height("auto");
		$(".article-auto-height h3").height("auto");
		
		if ($(window).width() > 768){
			var maxHeight = 0;
			var article = $(".article-auto-height .content-container").each(function(){
			
			    maxHeight = Math.max(maxHeight, jQuery(this).height());
			    
			}).height(maxHeight);;
			
			var maxHeight = 0;
			var article = $(".article-auto-height .content-container .content").each(function(){
			
			    maxHeight = Math.max(maxHeight, jQuery(this).height());
			    
			}).height(maxHeight);;
			
// 			var maxHeight = 0;
// 			var article = $(".article-auto-height .content-container .image").each(function(){
			
// 			    maxHeight = Math.max(maxHeight, jQuery(this).height());
			    
// 			}).height(maxHeight);;
			
			
			var maxHeight = 0;
			var article = $(".article-auto-height h2").each(function(){
			
			    maxHeight = Math.max(maxHeight, jQuery(this).height());
			    
			}).height(maxHeight);;
			
			var maxHeight = 0;
			var article = $(".article-auto-height h3").each(function(){
			
			    maxHeight = Math.max(maxHeight, jQuery(this).height());
			    
			}).height(maxHeight);;
			
			
			
		}else{
			$(".article-auto-height .content-container").height("auto");
			$(".article-auto-height .content-container .content").height("auto");
			$(".article-auto-height .content-container .image").height("auto");
			$(".article-auto-height h2").height("auto");
			$(".article-auto-height h3").height("auto");
		}
	}