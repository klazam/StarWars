$(document).ready(function(){
	$("form").submit(function( event ) {

		/* usuniecie kakofoni */

		if ($("audio")) {
			$("audio").remove();
		}

		var $yoda = $("input#checkbox_yoda[type=checkbox]:checked").length;
		var $inputs = $("input[type=checkbox]:checked").length;

		var licz = function() {
			$yoda = $("input#checkbox_yoda[type=checkbox]:checked").length;
			$inputs = $("input[type=checkbox]:checked").length;
		}
		
  		$("input[type=checkbox]").on("click", licz);

		if ($yoda == 1 || $inputs == 0) {
			true;
			
		} else {
			event.preventDefault();

			var $marsz = $("<audio></audio>").attr({
				"src": "./imperial_march.mp3",
				"autoplay": "autoplay"
			});

			$("body").append($marsz);

		}

	});
});






