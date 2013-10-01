(function($) {

$.fn.kdHighlighter = function(options) {
	
	// Set plugin defaults
	
	var defaults = {
		color: 'yellow',
		method : 'click'
	};
	
	options = $.extend(defaults, options);
	
	this.each(function() {
		var $this = $(this);
		var currentBg = $this.css('background-color');
		
		if (options.method == 'click') {
			$this.toggle(function() {
				$this.css('background', options.color);
			}, function() {
				$this.css('background', currentBg);
			});
		}
		
		if (options.method == 'hover') {
			$this.hover(function() {
				$this.css('background', options.color);
			}, function() {
				$this.css('background', currentBg);
			});
		}
	});
	
}

})(jQuery)