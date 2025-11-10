// HTML INPUT
let nama = document.querySelector('#nama');
let kelamin = document.querySelector('#kelamin');
let umur = document.querySelector('#umur');
let payer = document.querySelector('#payer');
let dpjp = document.querySelector('#dpjp');
let diagnosis = document.querySelector('#diagnosis');
let keluhan = document.querySelector('#keluhan');
let kesan = document.querySelector('#kesan');
let eye = document.querySelector('#eye');
let motor = document.querySelector('#motor');
let verbal = document.querySelector('#verbal');
let tds = document.querySelector('#tds');
let tdd = document.querySelector('#tdd');
let hr = document.querySelector('#hr');
let rr = document.querySelector('#rr');
let s = document.querySelector('#s');
let spo2 = document.querySelector('#spo2');
let oksigenasi = document.querySelector('#oksigenasi');
let notes = document.querySelector('#notes');
let bc = document.querySelector('#bc');
let plan = document.querySelector('#plan');
let toggleDiagnosis = document.querySelector('#toggleDiagnosis');
let tombolKetikanLaporan = document.querySelector('#tombolKetikanLaporan');
let tombolReset = document.querySelector('#tombolReset');

// OTHER
let kontainerJudul = document.querySelector('#kontainerJudul');

// HTML OUTPUT
let kontainerKetikan = document.querySelector('#kontainerKetikan');

// TOMBOL
tombolKetikanLaporan.addEventListener('click', () => {

    document.querySelector('#kontainerKetikan').classList.remove('none');

    // RUNNING FUNCTION
    let hasilNama = fungsiNama(nama.value);
    let hasilKelamin = kelamin.value.toUpperCase();
    let hasilUmur = umur.value;
    let hasilPayer = fungsiPayer(payer.value);
    let hasilDpjp = fungsiDpjp(dpjp.value);
    let hasilDiagnosis = fungsiDiagnosis(diagnosis.value);
    let hasilKeluhan = fungsiKeluhanIcu(keluhan.value);
    let hasilKesan = fungsiKesan(kesan.value);
    let hasilEye = eye.value;
    let hasilVerbal = fungsiVerbal(verbal.value);
    let hasilMotor = motor.value;
    let hasilTds = tds.value;
    let hasilTdd = tdd.value;
    let hasilHr = hr.value;
    let hasilRr = rr.value;
    let hasilS = s.value;
    let hasilSpo2 = spo2.value;
    let hasilOksigenasi = oksigenasi.value;
    let hasilNotes = fungsiNotes(notes.value);
    let hasilBc = fungsiBc(bc.value);
    let hasilPlan = fungsiPlan(plan.value);

    ketikan = document.createElement('p');
    ketikan.innerHTML +=
    `Selamat malam dokter-dokter, mohon maaf mengganggu waktunya. Mohon izin melaporkan kondisi pasien ICU, pasien atas nama:
    <br>
    <br>*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th, ${hasilPayer}*
    <br>DPJP:
    <br>dr. Rizky, Sp.An
    <br>${hasilDpjp}
    <br>
    <br>*S:*
    <br>${hasilKeluhan}
    <br>
    <br>*O:*
    <br>KU ${hasilKesan}, E${hasilEye}M${hasilMotor}V${hasilVerbal}
    <br>TD ${hasilTds}/${hasilTdd} mmHg
    <br>HR ${hasilHr} x/menit
    <br>RR ${hasilRr} x/menit
    <br>S ${hasilS} ºC
    <br>SpO2 ${hasilSpo2}% on ${hasilOksigenasi}
    <br>
    <br>Notes:
    <br>${hasilNotes}
    <br>
    <br>${hasilBc}
    <br>
    <br>*A:*
    <br>${hasilDiagnosis}
    <br>
    <br>*P:*
    <br>${hasilPlan}
    <br>
    <br>Mohon advice dan arahan selanjutnya dokter
    <br>Maturnuwun dokter<br>
    `
    kontainerKetikan.appendChild(ketikan);

    // RESET
    nama.value = '';
    kelamin.value = '';
    umur.value = '';
    payer.value = '';
    dpjp.value = '';
    diagnosis.value = '';
    keluhan.value = '';
    kesan.value = '';
    eye.value = '';
    verbal.value = '';
    motor.value = '';
    tds.value = '';
    tdd.value = '';
    hr.value = '';
    rr.value = '';
    s.value = '';
    spo2.value = '';
    oksigenasi.value = '';
    notes.value = '';
    bc.value = '';
    plan.value = '';

})

tombolReset.addEventListener('click', () => {

  document.querySelector('#kontainerKetikan').classList.add('none');
  kontainerKetikan.innerHTML = '';

})

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerTextarea').classList.toggle('none');

})
