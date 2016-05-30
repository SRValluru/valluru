function clicked() {
	
	var user=document.getElementById('Name');
	var email=document.getElementById('Email ID');
	var phone=document.getElementById('Phone');
	var feedback=document.getElementById('Feedback');
	
	var corname = "Srinivas Raviteja Valluru ";
	var coremail = "SRValluru@my.harrisburgu.edu ";
	var corphone =  "1234567890";
	var corfeedback = "Thank you";
	
	if(user.value.length > 3) {
		
		if(email.value.length > 3)  {
			
			if(phone.value.length > 3) {
				
				if(feedback.value.length > 3) {
					
					window.alert("Thank you for your Feedback on Fibernet,we will keep in touch with you...Have a good Day :)");
					
					
				}else {
					
					window.alert("No Data!");
					
					
				}
				
			}else {
				
				window.alert("No Data!");
				
				
			}
			
		}else {
			
			window.alert("No Data!");
			
		}
		
	}else {
			
			window.alert("No Data!");
			
		}
	
}