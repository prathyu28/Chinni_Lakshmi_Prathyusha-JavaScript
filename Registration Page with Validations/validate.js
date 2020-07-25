function validateEmail()
{
 if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.Email.value)))
 alert("Invalid email address! Please enter valid email..")
}
function validatePhoneNumber(){
  if(!(myForm.PhoneNumber.value.match(/^\d{10}$/)))
  alert("Invalid phone number! Please enter valid phone number..")
}
function validateDOB(){
  if(!(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/.test(myForm.DOB.value)))
  alert("Invalid date of birth! Please enter valid date of birth in the format DD-MM-YYYY")
}
function validatePassword(){
  if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(myForm.Password.value)))
  alert("Invalid Password! [Minimum number of characters should be 8 and maximum of 15.Password should contain alteast one numeric,one lowercase and one uppercase character,one special character] Please enter valid password..")
}
function final(){
  if(myForm.Password.value==myForm.ConfirmPassword.value)
  alert("Yay! Registered successfully!!");
  else {
    alert("The Password is not matched!! Pleae fill the form again with valid details..")
  }
}
