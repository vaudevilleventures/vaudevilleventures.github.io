function main(){
//change fish pic

$('.fish').mouseover(function(){
	$('img').attr('src',"flyfish.png");
});
$('.fish').mouseleave(function(){
	$('img').attr('src',"fish.png");
});



};
$(document).ready(main);
