
$(document).ready(function() {
	skrollr.init({
		smoothScrolling: true,
		smoothScrollingDuration: 1,
		mobileCheck: function() {
			return false;
		}
	});

	$(function () {
		$('[data-toggle="popover"]').popover()
	});

});
