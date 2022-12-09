// let fullName = "Le Van hanh"; 

// let firstName = fullName.slice(fullName.lastIndexOf(" ") + 1);
// let lastName  = fullName.slice(0, fullName.lastIndexOf(" "));

// console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase());
// console.log(fullName.replaceAll(" ", "*"));

document.getElementById("btnSubmit").onclick = function() {
    let cardMaster = document.getElementById("cardMaster");
    let cardVisa = document.getElementById("cardVisa");
    let cardPaypal = document.getElementById("cardPaypal");

   if(cardMaster.checked) {
        console.log('card master'); 
   } else if(cardVisa.checked) {

   } else if(cardPaypal.checked) {
        console.log('card paypal');
   } else {
        console.log('no choose'); 
   }
   

}

// template literal 
let firstName= 'Hanh'
let text = `My name is ${firstName}`;
console.log(text); 