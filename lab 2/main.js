var  value = 0; 

document.getElementById("increment").onclick = function() {

    value +=1 ;
    document.getElementById("value").innerHTML = value;
}

document.getElementById("decrement").onclick = function() {

    value -=1 ;
    document.getElementById("value").innerHTML = value;
}

document.getElementById("reset").onclick = function() {

    value = 0 ;
    document.getElementById("value").innerHTML = value;
}