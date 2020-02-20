
// conversions

  // Inches to MM

var inch = document.querySelector("#inputIN");
var mm = document.querySelector("#inputMM");

inch.addEventListener('input', function(){
  let input = parseFloat(document.getElementById("inputIN").value);

  let answer = document.getElementById("inputMM");
  answer.value = input * 25.4;
})

mm.addEventListener("input", function(){
    let input = parseFloat(document.getElementById("inputMM").value);

    let answer = document.getElementById("inputIN");

    answer.value = input / 25.4;
})

  // Inches to CM

var inch2 = document.querySelector("#inputin");
var cm = document.querySelector("#inputCM");

inch2.addEventListener('input', function(){
   let input = parseFloat(document.getElementById("inputin").value);

   let answer = document.getElementById("inputCM");
   answer.value = input / 0.39370;

})

cm.addEventListener('input', function(){

   let input = parseFloat(document.getElementById("inputCM").value);

   let answer = document.getElementById("inputin");

   answer.value = input * 0.39370;

})

// Pixels to MM

var px = document.querySelector("#inputPX");
var mm2 = document.querySelector("#inputMm");

px.addEventListener('input', function(){
  let input = parseFloat(document.getElementById("inputPX").value);
  let answer = document.getElementById("inputMm");
  answer.value = input * 0.2645833333;
})

mm2.addEventListener('input', function(){
  let input = parseFloat(document.getElementById("inputMm").value);
  let answer = document.getElementById("inputPX");
  answer.value = input / 0.2645833333;
})
