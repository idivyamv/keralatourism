//function to validate user signup input
function validate(event)
{   
   /*  var mailformat  = '/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3}?)$/';
    var email       = document.getElementById('emailId');
    if(mailformat.test(email.value))
    {
        email.classList.remove("invalid");
    }
    else{
        email.classList.add("invalid"); 
        return false;
    } 
    
    var phoneformat = '/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/';
    var phoneno     = document.getElementById('Phone');
    if(phoneformat.test(phoneno.value))
    {
        phoneno.classList.remove("invalid");
    }
    else{
        phoneno.classList.add("invalid"); 
        return false;
    }  

*/
    var inputs = document.getElementById("my-form").elements;
    // Iterate over the form controls
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].nodeName === "INPUT") {       
            var value = inputs[i].value;
            if (!(inputs[i].checkValidity()) || value.trim()=='' ) {
                inputs[i].reportValidity();
                inputs[i].classList.add("invalid"); 
                return false;
            }
            else {  inputs[i].classList.remove("invalid"); }
        }
    }

    var pswd_check = 0;                        
    const inpObj =  document.querySelector("#password");
    const inpcnfmObj =  document.getElementById("confirmpassword");
   
    var pswd       = inpObj.value;
    var cnfrm_pswd = inpcnfmObj.value;
    if (!inpObj.checkValidity() || pswd.trim()=='' ) {
        inpObj.reportValidity();
        return false;

      }
    else {
      if (!inpcnfmObj.checkValidity() || (cnfrm_pswd.trim()) =='' ) {
        inpcnfmObj.reportValidity();
          return false;
      }
    } 
    
    if(pswd===cnfrm_pswd && (pswd.trim())!='' && (cnfrm_pswd.trim())!='')
      {
          pswd_check =1;  
          document.getElementById("pswd_err").innerHTML = '';
      }
      else {
          pswd_check = 0;
          document.getElementById("pswd_err").innerHTML = 'Passwords do not match';
          event.preventDefault();
          return false;
      }
  //
  if(pswd_check==1){
      alert('Thank you for creating an account with us.');
      return true;
  }  

}
function passwordCheck() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}
function validatelogin(){
   // var mailformat  = '/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3}?)$/';
   
    var email       = document.getElementById('emailId');
    var pswd        = document.getElementById('Password');   
    if (!(email.checkValidity())) {
        email.reportValidity();
        return false;
      }
    else if(!(pswd.checkValidity())){
        pswd.reportValidity();
        return false
    }
    else return true;

}