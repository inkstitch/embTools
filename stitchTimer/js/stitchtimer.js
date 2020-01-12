
// Final Calculations

let timer = document.querySelector("#stitchSpeed");
timer.addEventListener('click', stitchSpeedTrim);

function stitchSpeedTrim() {
  let stitches = document.getElementById("stitches").value,
      speed = document.getElementById("speed").value,
      trims = document.getElementById("trims").value,
      trimSpeed = document.getElementById("trimSpeed").value;

    document.getElementById("speedWithTrims").innerHTML =((stitches / speed) + ((trims * trimSpeed) / 60));
}
