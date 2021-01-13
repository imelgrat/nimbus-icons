
$(".js-icon").click(function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass('active').find(".js-icon-modal").fadeOut();
	} else {
		$(".js-icon-modal").fadeOut();
		$(".js-icon").removeClass('active');
		$(this).addClass('active').find(".js-icon-modal").fadeIn();
	}
});