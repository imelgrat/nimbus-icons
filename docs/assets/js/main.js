
$(".js-icon").click(function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass('active').find(".js-icon-modal").fadeOut().removeClass('js-icon-modal-active');;
	} else {
		$(".js-icon-modal").fadeOut().addClass('js-icon-modal-active');
		$(".js-icon").removeClass('active');
		$(this).addClass('active').find(".js-icon-modal").fadeIn();
	}
});

$(".js-close-modal").click(function () {
	$(this).closest(".js-icon-modal").fadeOut();
});


$(document).scroll(function() {
	var globalPosition = $(window).scrollTop()+$(window).height();
	var iconsEnd = $('.js-icon-gallery-end').offset().top+$('.js-icon-gallery-end').height();

	if( globalPosition > iconsEnd) {
		$('.js-icon-modal').addClass('modal-absolute');
	} else {
		$('.js-icon-modal').removeClass('modal-absolute');
	}
});
