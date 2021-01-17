
function sprawdzEmail(AdresEmail) 
{ 
    var TestEmail = /^(.[A-Za-z0-9\-\_\.]*)+@+([A-Za-z0-9\-\.\_]*\w)+(\.[A-Za-z]*\w)$/; 
    var Wynik = AdresEmail.val().match(TestEmail); 

    if (Wynik == null) 
    { 
		AdresEmail.val('Wprowadź poprawny adres email');
        return false; 
    }   
    return true; 
} 
                                                                                    
function check_input(inp)
{
    if (inp.val() == ''){
		inp.val('Wprowadź dane');
        return false;
    } 
    else if (inp.val() == 'Wprowadź dane'){
        return false;
    } 
    else if (inp.val() == 'Wprowadź telefon'){
        return false;
    }
    else if (inp.val() == 'Wprowadź wiadomosć'){
        return false;	
	}
    else if (inp.val() == 'Wprowadź imię i nazwisko'){
        return false;
    } else {
        return true;
    }	
}


function contactform() { 
	name = $('#name').val();
    email = $('#email').val();
    message = $('#message').val();
    subject = $('#subject').val();
	
	
    w1 = check_input($('#name'));
	w2 = check_input($('#subject'));
	w3 = sprawdzEmail($('#email'));
	
	

	
	
    if (w1 == true && w2 == true && w3 == true) {                                                                       
        jQuery.ajax( { 
            type: "POST", 
            url: "/mailer/mailer", 
                                                                                                 
            data: 'email=' +email  +'&name='+name +'&subject='+subject +'&message='+message, 
                                                                                     
            success: function(result) {                                                                            
                $("#sendmessage").show();
				$('input#email').val('');
				$('input#name').val('');
				$('input#subject').val('');
				$('#message').val('');
				
            } 
        } ) ; 
                                                                                        
    }

    if (w3 == false) { 
        email = $('input#email').val('Wprowadź poprawny adres email');
    }

       

    return false ; 
} 


                                                                                                                                                       
	