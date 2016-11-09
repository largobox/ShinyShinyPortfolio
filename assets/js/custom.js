$(function() {
	smoothScroll(300);
	workBelt();
	workLoad();
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function workBelt() {

	$('.work_el').click(function(){
		$('.work_belt').css('left', '-100%');
		$('.work_desc_cnt').show();
	});

	$('.work_return').click(function(){
		$('.work_belt').css('left', '0%');
		$('.work_desc_cnt').hide(500);
	});	

}

function workLoad() {

	$.ajaxSetup({ cache: true });

	$('.work_el').click(function(){

		var newTitle = $(this).find('strong').text(),
				newFolder = $(this).data('folder'),
				spinner = '<div class="loader">Loading...</div>',
				newHtml = '/work/'+ newFolder +'.html';

		$('.project_load').html(spinner).load(newHtml);
		$('.porject_title').text(newTitle);

	});

}