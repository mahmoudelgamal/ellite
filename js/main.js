$(function () {
	//carousel
	var windowHe = $(window).height(),
	    upperHe = $(".upper-header").innerHeight(),
		navbarHe =$(".navbar").innerHeight()
	$('.carousel,.carousel-item').height(windowHe - (upperHe + navbarHe))
	//shuffle image
	$('.featured-work ul li').on('click', function () {
    $(this).addClass('activation').siblings().removeClass('activation');
    if ($(this).data('class') === '.all') {
      $('.shuffle-img .col-sm').css('opacity', 1);
    } else {
      $('.shuffle-img .col-sm').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });
})