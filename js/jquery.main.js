jQuery(function() {
	initModalWindow();
});

function initModalWindow() {
	var activeClass = 'active';
	var activeClassGlobal = 'scroll-disabled';
	var body = jQuery('body');
	
	jQuery('.lightbox-opener').each(function() {
		var opener = jQuery(this);
		var target = jQuery(opener.attr('href'));
		var close = target.find('.close, .overlay');
		
		opener.on('click', function(e) {
			e.preventDefault();
			if (!target.hasClass(activeClass)) {
				body.addClass(activeClassGlobal);
				target.addClass(activeClass).siblings('.' + activeClass).removeClass(activeClass);
			} else {
				body.removeClass(activeClassGlobal);
				target.removeClass(activeClass);
			}
		});
		close.on('click', function(e) {
			e.preventDefault();
			body.removeClass(activeClassGlobal);
			target.removeClass(activeClass);
		});
	});
}
