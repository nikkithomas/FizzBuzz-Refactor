$(document).ready(function(){

		var fizzBuzz=function(numVal){

			

			for(var i=1; i<=numVal; i++){
				var textVal=""
				if(i%3===0 && i%5===0){
					textVal +="FizzBuzz";
				}
				else if(i%3===0){
					textVal+="Fizz";
				}
				 else if(i%5===0){
					textVal+="Buzz";
				}
				else {
					textVal=i;
				}

				

				$("body").append("<p>"+textVal+"</p>");

				};
				
		};




	var numVal=prompt("Enter a whole number")
	var answer=parseFloat(numVal);
	while (isNaN(answer)){
		if(isNaN(answer)){
			while(isNaN(answer)){
				numVal=prompt("Please enter only whole numbers");
				answer=parseFloat(numVal);
			};
		};
	};

	fizzBuzz(numVal);



});


	


	
	