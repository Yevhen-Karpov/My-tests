// document.forms.convPpmG.oninput = convert;

// function convert(event) {
//   const field = this.elements;
//   const input = event.target;
//   const awt = field.aWt;
//   const ppm = field.pPM;
//   const grv = field.grv;
//   const gtp = field.gToP;
//   const ptg = field.pToG;
//   let AWT = parseFloat(awt.value);
//   let PPMin = parseFloat(ppm.value);
//   let GRVin = parseFloat(grv.value);

//   if (input.matches('#aWt')) {
// log(AWT, "Assay Weight");
//   }

//   if (input.matches('#pPM')) {
// log(PPMin, "PPM Input");
// let GRVout = (PPMin * AWT) / 1000;
// log(GRVout, "Grav Output");
// ptg.value = GRVout.toFixed(4);
//   }

//   if (input.matches('#grv')) {
//     // log(GRVin, "Grav Input");
//     let PPMout = (GRVin * 1000) / AWT;
//     // log(PPMout, "PPM Output");
//     gtp.value = PPMout.toFixed(4);
//   }
// }

// // A utility logger - not required
// const log = (data, key = 'Field') =>
//   console.log(JSON.stringify(key + ': ' + data));

function change() {
  var inputValue = document.getElementById('input').value;
  var inputUnit = document.getElementById('inputOptions').value;
  var outputUnit = document.getElementById('resultOptions').value;

  var convertedResult;

  if (inputUnit === 'meter') {
    if (outputUnit === 'meter') {
      convertedResult = inputValue;
    } else {
      convertedResult = inputValue * 100;
    }
  } else {
    if (outputUnit === 'meter') {
      convertedResult = inputValue / 100;
    } else {
      convertedResult = inputValue;
    }
  }

  document.getElementById('result').value = convertedResult;
}
