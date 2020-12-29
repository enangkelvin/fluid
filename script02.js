$(document).ready(function(){
	$(".sidebar_btn").click(function(){
		$(".sidebar").toggleClass("active");
		$(".sidebar_btn").toggleClass("toggle_is");
	});
});


$('#clock').countdown('2020/11/01 16:00:00' , function(event){
	var $this = $(this).html(event.strftime(''
		+'<div><span>%d</span><span>Day(s)</span></div>'
		+'<div><span>%H</span><span>Hour(s)</span></div>'
		+'<div><span>%M</span><span>Minute(s)</span></div>'
		+'<div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease"><span>%S</span><span>Second(s)</span></div>'
		))
})