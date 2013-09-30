(function($) {

	$.fn.kdubModal = function(options) {
	
		var defaults = {
			closeButtonClick : false,
			olcolor : '#000',
			width : '',
			inline : true,
			ContentSetsWidth: true,
			fixed : false
		};
		
		options = $.extend(defaults, options);
		
		var $body = $('body');
		var $window = $(window);
		
		var modal = {
			overlay: $('<div id="overlay" />'),
			window : $('<div id="kdubModal" />'),
		}
		
		$body.append(modal.overlay, modal.window);
		modal.content = modal.window.children();
		
		modal.init = function() {
			this.overlay.bind('click', modal.Hide);
			this.overlay.css({ 'background' : options.olcolor });
			$window.bind('resize', modal.setPosition);
		}
	
		modal.setPosition = function() {
			console.log(modal.window);
			var modalHeight = modal.window.outerHeight();
			var modalWidth = modal.window.outerWidth();
			var viewportWidth = $(window).width();
			var viewportHeight = $(window).height();
			modal.overlay.height(viewportHeight);
			modal.window.animate({
				'top' : (viewportHeight - modalHeight) / 2,
				'left' : (viewportWidth - modalWidth) / 2
			},50);
		}
		
		modal.Show = function()  {
			this.overlay.show();
			this.window.fadeIn(); 
			this.setPosition();
			return false;
		}
		
		modal.Hide = function() {
			modal.window.fadeOut(function() { 
				modal.overlay.hide();
			});
			return false;
		}
		
		
		if ( options.ContentSetsWidth == true ) {
			modal.window.css({
				'width' : modal.content.width(),
			});	
		}
		else {
			modal.window.css({
				'width' : options.width,
				'background' : options.modalBg,
			});
		}
		
		return this.each(function() {
			
			var $this = $(this);
			
			$this.click(function() {
				var target = $this.attr('href');
				
				if (options.inline === true) {
					var targetClone = $(target).clone();
					targetClone.css('display', 'block');
					modal.window.html(targetClone);
					modal.content.show();
					modal.Show();
					return false;
				}
			});
			modal.init();
		});
		
	}


})(jQuery)