$(document).ready(function() {

$('#submit').click(colorblocks);

function colorblocks(){

	//Number of blocks

	var numberOfBlocks = $('[name="blockNumber"]').val();


	//Size of canvas element

	var frameWidth;

	if ($('[name="fillWindow"]').is(":checked")) {
		var width = $(window).width()
		var height = $(window).height()

	}
	else{
		width = $('[name="frameWidth"]').val();
		height = $('[name="frameWidth"]').val();
	}

	$('#canvas').css({
	 'width' : width, 
	'height' : height});


	//Color range

	var colorRange;

	if( !$('[name="colorRange"]').val()){
		colorRange = 0;
	}
	else{
		colorRange = $('[name="colorRange"]').val();
	}

	var pixelRangeSwitch = null;
	var pixelRange = $('[name="pixelSizeRange"]').val();
	var pixelGiven = $('[name="pixelSize"]').val();


		if( !$('[name="pixelSizeRange"]').val()){
			pixelSize = $('[name="pixelSize"]').val();
			pixelRangeSwitch = false;
		}
		else{
			pixelRangeSwitch = true;

		}


	//var rgbRange1, rgbRange2, rgbRange3;

	var num = [];

	for(i=0; i<3; i++){
	num[i] = Math.floor(Math.random() * 255);
	}


	//Append Divs


	for(i=numberOfBlocks; i>0; i--){

		var rgb = [];

		for(j=0; j<3; j++){
			var rgbMin, rgbMax;
			var rgbValue = num[j];
			var intColorRange = Math.floor(colorRange/2);
			var rgbRemainder = (parseInt(rgbValue) + parseInt(intColorRange)) - 255;

		if(parseInt(rgbValue) - parseInt(intColorRange) < 0 && parseInt(rgbValue) + parseInt(intColorRange) < 255){
			rgbMin = 0;
			rgbMax = parseInt(colorRange);
		}
		else if(parseInt(rgbValue) + parseInt(intColorRange) > 255 && parseInt(rgbValue) - parseInt(intColorRange) > 0){
			rgbMin = 255 - parseInt(colorRange);
			rgbMax = 255;
		}
		else if(parseInt(rgbValue) + parseInt(intColorRange) > 255 && parseInt(rgbValue) - parseInt(intColorRange) < 0){
			rgbMin = 0;
			rgbMax = 255;
		}
		else{
			rgbMin = parseInt(rgbValue) - parseInt(intColorRange);
			rgbMax = parseInt(rgbValue) + parseInt(intColorRange);
		}

		rgb[j] = Math.floor(Math.random() * (parseInt(rgbMax) - parseInt(rgbMin))) + parseInt(rgbMin);
		}

	var rgbCode = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";

	var pixelSize;

	if(pixelRangeSwitch == true){
		var intPixelRangeHalf = Math.floor(pixelRange/2);
		if((pixelGiven - intPixelRangeHalf) < 1){
			pixelSize = Math.floor(Math.random() * pixelRange);
		}
		else{
			var pixelMin = parseInt(pixelGiven) - parseInt(intPixelRangeHalf);
			var pixelMax = parseInt(pixelGiven) + parseInt(intPixelRangeHalf);
			pixelSize = Math.floor(Math.random() * (pixelMax - pixelMin)) + pixelMin;
		}
	}


	$('#canvas').append(
  	$('<div/>').css({
   'background-color' : rgbCode,
   'width' : pixelSize,
   'height' :  pixelSize,
   'display' : 'inline-block'}));
	}


	$("html, body").animate({ scrollTop: $(document).height() }, 0);

};

$(document).keypress(function(e) {
    if(e.which == 13) {
        colorblocks();
    }
});


});
