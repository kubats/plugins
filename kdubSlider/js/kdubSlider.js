(function($) {

	$.fn.kdubSlider = function(options) {
		
		var defaults = {
			speed 		: 1000,
			pause 		: 3000,
			transition 	: 'fade',
		},
		
		options = $.extend(defaults, options);
		
		this.each(function() {
			
			var $this = $(this);
			var caption;
			
			$this.wrap('<div class="slider-wrap">');
			
			if (options.transition === 'slide') {
				$this.css({
					'width'	: '99999px',
					'position' : 'relative',
					'padding' : 0
				});
				
				$this.children().css({
					'float' : 'left',
					'list-style' : 'none'
				});	
				
				$('.slider-wrap').css({
					'width' : $this.children().width(),
					'overflow': 'hidden'
				});
			} // end slide if
			
			if (options.transition === 'fade') {
				$this.css({
					'width'	: $this.children().find('img').width(),
					'position' : 'relative',
					'padding' : 0
				});
				
				$this.children().css({
					'width' : $this.children().find('img').width(),
					'position' : 'absolute',
					'left' : 0
				});
				
				$('.slider-wrap').css({
					'width' : $this.children().width(),
					'height' : $this.children().height(),
				});

				$this.children().hide();
				$this.children(':first').show().addClass('active');
				
				
				function fade() {
					setInterval(function() {
						var current = $this.children('.active');
						var next = ($this.children(':last').hasClass('active')) ? $this.children(':first') : current.next();
						
						next.addClass('active').fadeIn(options.speed);
						current.removeClass('active').fadeOut(options.speed);
						
					}, options.pause);
				}
				
				fade();
				
				
				
			} // end fade if
			
			
		});
		
		
	}

})(jQuery)