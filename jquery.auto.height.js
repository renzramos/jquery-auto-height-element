<!DOCTYPE html>
<html>
	<head>
	<style>
	.grid {
	    width: 25%;    
	    float: left;
	}
	.grid .content{
	    border: 1px solid #333;
	    padding: 15px;
	    margin-bottom: 10px;
	    margin:5px;
	}
	</style>
	</head>
<body>

<div class="grid">
	<div class="content">
	apien et malesuada laoreet, eros enim mattis mi, at tempor lorem tortor non turpis. Nam elit urna, vehicula quis fringilla vel, elementum tincidunt arcu. Sed semper est at fringilla tincidunt
	</div>
</div>
<div class="grid">
	<div class="content"></div>
</div>
<div class="grid">
	<div class="content"></div>
</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	
	<script>

	$.fn.autoHeight = function(options) {
	 	
		var settings = $.extend({
		    min:768,
	    	max:5000,
		}, options );

		var windowWidth = $(window).width();

		this.height("auto");
		if (windowWidth => settings.min && windowWidth <= settings.max){
			var maxHeight = 0;
			var article = this.each(function(){

			    maxHeight = Math.max(maxHeight, $(this).height());

			}).height(maxHeight);;

		}else{
			this.height("auto");
		}
	};


	$(document).ready(function(){
		
		$options = {
	    	min:768,
	    	max:1600,
	    };

	    $('.grid').autoHeight($options);
	    $('.grid .content').autoHeight($options);

	    $(window).resize(function(){
	    	$('.grid').autoHeight($options);
	    	$('.grid .content').autoHeight($options);
	    });
	    
	});

	</script>
</body>
</html>
