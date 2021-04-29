const inputs = document.querySelectorAll(".audio-elements input");

function radioUpdate() {
  //retrieve value = station
  let station = inputs[0]["value"];
  console.log(typeof(station));
  let id = ""
  //autoplay the specific file
  if (station === "0") {
    id = '1rvXZGGuG0ohU5cy97cvtoowObmMoNuNd';
  }
  else if (station === "1") {
    id = '1ZcjPpYRNieWd_cRbHqKEjbSjQmPzJJAN';
  }
  else if (station === "2") {
    id = '1qZrwHI1i9_-iAe_phCR_Oo_6vD5PcHqC';
  }
  else if (station === "3") {
    id = '1CaCxsQCEAupe2uaIwRVDIOnpeimrjjcx';
  }
  else if (station === "4") {
    id = '1E-2urkXhqa2uIXRYchA2ztcH0doltaO_';
  }
  else if (station === "5") {
    id = '1shxm3tDf1Yi6a0CajZa9n1472MMLpNAE';
  };
  document.getElementById('radio').innerHTML = `<audio controls autoplay><source src='https://docs.google.com/uc?export=download&id=${id}'></audio><p>Channel ${parseInt(station) + 1}</p>`;
};
inputs.forEach(input => input.addEventListener('change', radioUpdate));

export { radioUpdate };