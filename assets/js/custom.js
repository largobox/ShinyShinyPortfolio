$(function() {
	smoothScroll(300);
	workBelt();
	workLoad();
	clientSelector();
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

function clientSelector(){

	$('.client_el').first().addClass('active_client');
	$('.client_logo').first().addClass('active_logo');

	$('.client_logo').click(function(){
		var $this = $(this),
				$siblings = $this.parent().children(),
				position = $siblings.index($this);

		$('.client_el').removeClass('active_client').eq(position).addClass('active_client');
		$siblings.removeClass('active_logo');
		$this.addClass('active_logo');
	});


	$('.client_control_next, .client_control_prev').click(function(){
		var $this = $(this),
				currentActiveClient = $('.clients_belt').find('.active_client'),
				position = $('.clients_belt').children().index(currentActiveClient),
				clientNum = $('.client_el').length;

		if ( $this.hasClass('client_control_next') ) {
			if ( position < clientNum-1 ) {
				$('.active_client').removeClass('active_client').next().addClass('active_client');
				$('.active_logo').removeClass('active_logo').next().addClass('active_logo');
			}
			else {
				$('.client_el').removeClass('active_client').first().addClass('active_client');
				$('.client_logo').removeClass('active_logo').first().addClass('active_logo');
			}
		}

		else {
			if ( position > 0 ) {
				$('.active_client').removeClass('active_client').prev().addClass('active_client');
				$('.active_logo').removeClass('active_logo').prev().addClass('active_logo');
			}
			else {
				$('.client_el').removeClass('active_client').last().addClass('active_client');
				$('.client_logo').removeClass('active_logo').last().addClass('active_logo');
			}
		}

	});

}