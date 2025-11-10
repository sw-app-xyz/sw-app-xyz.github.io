let kontainerJudul = document.querySelector('#kontainerJudul');
let setPlaceholder = document.querySelector('#setPlaceholder');

let igd = document.querySelector('#igd');
let spesialis = document.querySelector('#spesialis');
let blpl = document.querySelector('#blpl');
let op = document.querySelector('#op');
let icuHcu = document.querySelector('#icuHcu');
let penunjang = document.querySelector('#penunjang');
let kontainerSpesialis = document.querySelector('#kontainerSpesialis');
let kontainerBlpl = document.querySelector('#kontainerBlpl');
let kontainerOp = document.querySelector('#kontainerOp');
let kontainerIcuhcu = document.querySelector('#kontainerIcuhcu');
let kontainerPenunjang = document.querySelector('#kontainerPenunjang');

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerIsi').classList.toggle('none');
  document.querySelector('#kontainerTextarea').classList.toggle('none');

})

const placeholderText ='PAGI:\n- SOAP\n- UPDATE HOPE\n- SIAPIN OPERAN\n\nMALAM: \n- SOAP\n- LAPOR ANES\n- MORPOT\n- UPDATE HOPE\n- SIAPIN OPERAN';
setPlaceholder.setAttribute('placeholder', placeholderText);

// ===

// igd.addEventListener('click', () => {
//   document.querySelector('#kontainerIgd').classList.toggle('none');
// })
//
// spesialis.addEventListener('click', () => {
//   document.querySelector('#kontainerSpesialis').classList.toggle('none');
// })
//
// blpl.addEventListener('click', () => {
//   document.querySelector('#kontainerBlpl').classList.toggle('none');
// })
//
// op.addEventListener('click', () => {
//   document.querySelector('#kontainerOp').classList.toggle('none');
// })
//
// icuHcu.addEventListener('click', () => {
//   document.querySelector('#kontainerIcuhcu').classList.toggle('none');
// })
//
// penunjang.addEventListener('click', () => {
//   document.querySelector('#kontainerPenunjang').classList.toggle('none');
// })
