const inputs = document.querySelectorAll(".audio-elements input");

function radioUpdate() {
  //retrieve value = station
  let station = inputs[0]["value"];
  console.log(typeof(station));
  //autoplay the specific file
  if (station === "0") {
    document.getElementById('radio').innerHTML = "<audio controls autoplay><source src='https://docs.google.com/uc?export=download&id=1rvXZGGuG0ohU5cy97cvtoowObmMoNuNd'></audio>";
    console.log("Hey");
  }
  else if (station === "1") {
    document.getElementById('radio').innerHTML = "<audio controls autoplay><source src='https://docs.google.com/uc?export=download&id=1ZcjPpYRNieWd_cRbHqKEjbSjQmPzJJAN'></audio>";
  }
  else if (station === "2") {
    document.getElementById('radio').innerHTML = "<audio controls autoplay><source src='https://docs.google.com/uc?export=download&id=1qZrwHI1i9_-iAe_phCR_Oo_6vD5PcHqC'></audio>";
  }
  else if (station === "3") {
    document.getElementById('radio').innerHTML = "<audio controls autoplay><source src='https://docs.google.com/uc?export=download&id=1CaCxsQCEAupe2uaIwRVDIOnpeimrjjcx'></audio>";
  }
  else if (station === "4") {
    document.getElementById('radio').innerHTML = "<audio controls autoplay><source src='https://docs.google.com/uc?export=download&id=1E-2urkXhqa2uIXRYchA2ztcH0doltaO_'></audio>";
  }
  else if (station === "5") {
    document.getElementById('radio').innerHTML = "<audio controls autoplay><source src='https://docs.google.com/uc?export=download&id=1shxm3tDf1Yi6a0CajZa9n1472MMLpNAE'></audio>";
  };
  // let newStation = document.getElementById('radio')
  // newStation.play
};
inputs.forEach(input => input.addEventListener('change', radioUpdate));

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

export { radioUpdate };