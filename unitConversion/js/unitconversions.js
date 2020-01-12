
// conversions

var inputIN = document.querySelector("#inputIN");

inputIN.addEventListener('input', function() {
       let input = parseFloat(document.getElementById("inputIN").value);
   let answer = document.getElementById("outputMM");
   
   answer.innerHTML = input * 25.4;
    
});


var inputin = document.querySelector("#inputin");

inputin.addEventListener('input' , function(){
    
    let input = parseFloat(document.getElementById("inputin").value);
    let answer = document.getElementById("outputCM");
    
    answer.innerHTML = input / 0.39370;
    
    
});


var inputMM = document.querySelector("#inputMM");

inputMM.addEventListener('input' , function(){
    
    let input = parseFloat(document.getElementById("inputMM").value);
    let answer = document.getElementById("outputIN");
    
    answer.innerHTML = input / 25.4;
    
});


var inputCM = document.querySelector("#inputCM");

inputCM.addEventListener('input' , function(){
    
    let input = parseFloat(document.getElementById("inputCM").value);
    let answer = document.getElementById("outputIn");
    
    answer.innerHTML = input * 0.39370;
    
    
});

