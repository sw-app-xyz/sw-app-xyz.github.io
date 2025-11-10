// HTML INPUT
let nama = document.querySelector('#nama');
let kelamin = document.querySelector('#kelamin');
let umur = document.querySelector('#umur');
let payer = document.querySelector('#payer');
let tujuan = document.querySelector('#tujuan');
let diagnosis = document.querySelector('#diagnosis');
let keluhan = document.querySelector('#keluhan');
let ku = document.querySelector('#ku');
let tds = document.querySelector('#tds');
let tdd = document.querySelector('#tdd');
let hr = document.querySelector('#hr');
let rr = document.querySelector('#rr');
let s = document.querySelector('#s');
let spo2 = document.querySelector('#spo2');
let oksigenasi = document.querySelector('#oksigenasi');
let toggleDiagnosis = document.querySelector('#toggleDiagnosis');
let tombolKetikanBlpl = document.querySelector('#tombolKetikanBlpl');
let tombolReset = document.querySelector('#tombolReset');

// OTHER
let kontainerJudul = document.querySelector('#kontainerJudul');

// HTML OUTPUT
let kontainerKetikan = document.querySelector('#kontainerKetikan');

// TOMBOL
tombolKetikanBlpl.addEventListener('click', () => {

    document.querySelector('#kontainerKetikan').classList.remove('none');

    // RUNNING FUNCTION
    let hasilNama = fungsiNama(nama.value);
    let hasilKelamin = kelamin.value.toUpperCase();
    let hasilUmur = umur.value;
    let hasilPayer = fungsiPayer(payer.value);
    let hasilTujuan = fungsiDokter(tujuan.value);
    let hasilDiagnosis = fungsiDiagnosis(diagnosis.value);
    let hasilKeluhan = fungsiKeluhan(keluhan.value);
    let hasilKu = fungsiKu(ku.value);
    let hasilTds = tds.value;
    let hasilTdd = tdd.value;
    let hasilHr = fungsiHr(hr.value);
    let hasilRr = fungsiRr(rr.value);
    let hasilS = fungsiS(s.value);
    let hasilSpo2 = fungsiSpo2(spo2.value);
    let hasilOksigenasi = fungsiOksigenasi(oksigenasi.value);

    // CEK DOKTER
    if (hasilTujuan !== '') {
      ketikan = document.createElement('p');
      ketikan.innerHTML +=
      `Selamat pagi dokter ${hasilTujuan}, mohon maaf mengganggu waktunya. Izin melaporkan KU pasien rencana BLPL hari ini:
      <br>
      <br>*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th, ${hasilPayer}*
      <br>
      <br>*Diagnosis:*
      <br>${hasilDiagnosis}
      <br>
      <br>*S:*
      <br>${hasilKeluhan}
      <br>
      <br>*O:*
      <br>KU ${hasilKu}
      <br>TD ${hasilTds}/${hasilTdd} mmHg
      <br>HR ${hasilHr} x/menit
      <br>RR ${hasilRr} x/menit
      <br>S ${hasilS} ºC
      <br>SpO2 ${hasilSpo2}% on ${hasilOksigenasi}
      <br>
      <br>Mohon advice dan arahan selanjutnya dokter
      <br>Maturnuwun dokter<br>
      `
      kontainerKetikan.appendChild(ketikan);
    } else {
      ketikan = document.createElement('p');
      ketikan.innerHTML +=
      `Selamat pagi dokter, mohon maaf mengganggu waktunya. Izin melaporkan KU pasien rencana BLPL hari ini:
      <br>
      <br>*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th, ${hasilPayer}*
      <br>
      <br>*Diagnosis:*
      <br>${hasilDiagnosis}
      <br>
      <br>*S:*
      <br>${hasilKeluhan}
      <br>
      <br>*O:*
      <br>KU ${hasilKu}
      <br>TD ${hasilTds}/${hasilTdd} mmHg
      <br>HR ${hasilHr} x/menit
      <br>RR ${hasilRr} x/menit
      <br>S ${hasilS} ºC
      <br>SpO2 ${hasilSpo2}% on ${hasilOksigenasi}
      <br>
      <br>Mohon advice dan arahan selanjutnya dokter
      <br>Maturnuwun dokter<br>
      `
      kontainerKetikan.appendChild(ketikan);
    }

    // RESET
    nama.value = '';
    kelamin.value = '';
    umur.value = '';
    payer.value = '';
    tujuan.value = '';
    diagnosis.value = '';
    keluhan.value = '';
    ku.value = '';
    tds.value = '';
    tdd.value = '';
    hr.value = '';
    rr.value = '';
    s.value = '';
    spo2.value = '';
    oksigenasi.value = '';

})

tombolReset.addEventListener('click', () => {

  document.querySelector('#kontainerKetikan').classList.add('none');
  kontainerKetikan.innerHTML = '';

})

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerTextarea').classList.toggle('none');

})
