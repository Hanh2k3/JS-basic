document.getElementById("submit").onclick = function() {
    let a = document.getElementById("a").value; 
   

    let b = document.getElementById("b").value; 
    b = Number(b);

    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); 

    console.log(a, b, c);

    let result = document.getElementById("c");

    result.innerHTML = "C = " + c ; 


}