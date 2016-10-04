var parentMorning = confirm("Do you think you would be a good parent of a 2 year old?")
if (parentMorning === true) {
	var confirmMessage = confirm("Did you wake up on the right side of the bed?")
	if (confirmMessage === true) {
		var confirmMessage = prompt("How do you prepare eggs for a 2 year old, scrambled eggs, eggs over easy, or both?")
		
		if (confirmMessage === 'eggs over easy') {
             alert("Hopefully you have no kids cuz he/she would be dead")
		}
		
		else if (confirmMessage === 'both') {
            alert("You are half right but raw yolk will not be good for your child")
		}
		
		else if (confirmMessage === 'scrambled eggs') {
			
			var confirmMessage = prompt("Great job you got some common sense. Here's another easy one(hopefully). Do you let your child play with a ball, dead animal or samurai sword?")
			 
			if (confirmMessage === 'ball') {
				var confirmMessage = prompt("Great job your kid lives to play another day, Where is a good place to let your child sleep in July while you grocery shop in the car because you were afraid of waking him or do you put him in a stroller with you in the grocery?")
				if (confirmMessage === 'car'){
					alert("Your child will have heat stroke and you will be in jail for awhile")
				}
				else if (confirmMessage === 'stroller'){
					var confirmMessage = prompt("Thats amazing because some real parents dont even know that, Heres a hard one whats a good snack for your child grapes or french fries?")
					if (confirmMessage === 'grapes'){
						alert("Got you!!! your child could be choking children dont really like chewing and a grape is slippery and skin is tough it could just slip down they're throat")
					}
					if (confirmMessage === 'french fries'){
                        var confirmMessage = prompt("French fries are not healthy but they do chew easier, What would you do if your child was acting up in the grocery would you ignore him, give him a spanking or give him his toy?")
                        if (confirmMessage === 'ignore him'){
                        	alert("All the books may tell you this but it doesnt work on a 2 year old")
                        }
                        else if (confirmMessage === 'give him a spanking'){
                        	alert("Honestly this is my choice but there is these child abuse laws you may go to jail")
                        }
                        else if (confirmMessage === 'give him his toy'){
                            var confirmMessage = alert("I hate to say it but this does work and trust me the last thing you want is to be that parent with the annoying child, YOU WON!!!!!! Congrats you may become a parent.")
                        }
                        else{ 
                        	alert('choose one')
                        }
					}
					else{
						alert("choose one")
					}
				}
				else{
					alert("choose one")
				}

			}

			else if(confirmMessage === 'samurai sword'){
				alert("Sorry he/she are dead your pets are probably dead too")
			}

			else if(confirmMessage === 'dead animal') {
				alert("Sorry your kid has rabbies and you do too")	
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
		alert("This day is over pray to get thru it")
	}
} 

else {
	alert("Please dont have any children")
}






// prompt
// alert
// confirm