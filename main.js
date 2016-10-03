var parentMorning = confirm("Is today going to be a good day?")
if (parentMorning === true) {
	var confirmMessage = confirm("Did Marco wake up happy?")
	if (confirmMessage === true) {
		var confirmMessage = prompt("What does Marco have to eat for breakfast yogurt, bread or both?")
		
		if (confirmMessage === 'yogurt') {
            var confirmMessage = alert("He will be satisfied for now but will be hungry very soon")
		}
		
		else if (confirmMessage === 'bread') {
            alert("He will be satisfied for now but will be hungry very soon")
		}
		
		else if (confirmMessage === 'both') {
			
			var confirmMessage = prompt("He's a happy camper. Do you take Marco to the park, backyard or stay inside?")
			 
			if (confirmMessage === 'park') {
				var confirmMessage = prompt("Great job he's going to be ready for a nap, How long does he need to nap for 1, 1 1/2, 2 hours?")
			}

			else if(confirmMessage === 'backyard'){
				alert("He's happy but probably not ready for a nap")
			}

			else if(confirmMessage === 'stay inside') {
				alert("He's happy but probably not ready for a nap")	
			}

			else{
				alert("choose one")
			}
			
		}

		else {
			alert("you have to choose one")
		}		
	} 
	else {
		alert("Put on Mickey Mouse Clubhouse")
	}
} 

else {
	alert("Go and pray")
}

//var  = alert("This day is over pray to get thru it")




// prompt
// alert
// confirm