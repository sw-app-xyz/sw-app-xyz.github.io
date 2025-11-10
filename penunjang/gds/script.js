// HTML INPUT
let pssom = document.querySelector('#pssom');
let nama = document.querySelector('#nama');
let kelamin = document.querySelector('#kelamin');
let umur = document.querySelector('#umur');
let payer = document.querySelector('#payer');
let tujuan = document.querySelector('#tujuan');
let diagnosis = document.querySelector('#diagnosis');
let toggleDiagnosis = document.querySelector('#toggleDiagnosis');
let gds = document.querySelector('#gds');
let jam = document.querySelector('#jam');
let tx = document.querySelector('#tx');
let tombolKetikanGds = document.querySelector('#tombolKetikanGds');
let tombolReset = document.querySelector('#tombolReset');

// OTHER
let kontainerJudul = document.querySelector('#kontainerJudul');

// HTML OUTPUT
let kontainerKetikan = document.querySelector('#kontainerKetikan');

// TOMBOL
tombolKetikanGds.addEventListener('click', () => {

    document.querySelector('#kontainerKetikan').classList.remove('none');

    // RUNNING FUNCTION
    let hasilPssom = fungsiPssom(pssom.value);
    let hasilNama = fungsiNama(nama.value);
    let hasilKelamin = kelamin.value.toUpperCase();
    let hasilUmur = umur.value;
    let hasilPayer = fungsiPayer(payer.value);
    let hasilTujuan = fungsiDokter(tujuan.value);
    let hasilDiagnosis = fungsiDiagnosis(diagnosis.value);
    let hasilGds = gds.value;
    let hasilJam = fungsiJam(jam.value);
    let hasilTx = tx.value;

    // CEK DOKTER
    if (hasilTujuan !== '') {
      ketikan = document.createElement('p');
      ketikan.innerHTML +=
      `Selamat ${hasilPssom} dokter ${hasilTujuan}, mohon maaf mengganggu waktunya. Izin melaporkan hasil GDS pasien:
      <br>
      <br>*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th, ${hasilPayer}*
      <br>
      <br>*Diagnosis:*
      <br>${hasilDiagnosis}
      <br>
      <br>*GDS jam ${hasilJam} = ${hasilGds} mg/dl*
      <br>Terapi DM saat ini: ${hasilTx}
      <br>
      <br>Mohon advice dan arahan selanjutnya dokter
      <br>Maturnuwun dokter<br>
      `
      kontainerKetikan.appendChild(ketikan);
    } else {
      ketikan = document.createElement('p');
      ketikan.innerHTML +=
      `Selamat ${hasilPssom} dokter, mohon maaf mengganggu waktunya. Izin melaporkan hasil GDS pasien:
      <br>
      <br>*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th, ${hasilPayer}*
      <br>
      <br>*Diagnosis:*
      <br>${hasilDiagnosis}
      <br>
      <br>*GDS jam ${hasilJam} = ${hasilGds} mg/dl*
      <br>Terapi DM saat ini: ${hasilTx}
      <br>
      <br>Mohon advice dan arahan selanjutnya dokter
      <br>Maturnuwun dokter<br>
      `
      kontainerKetikan.appendChild(ketikan);
    }

    // RESET
    pssom.value = '';
    nama.value = '';
    kelamin.value = '';
    umur.value = '';
    payer.value = '';
    tujuan.value = '';
    diagnosis.value = '';
    gds.value = '';
    jam.value = '';
    tx.value = '';

})

tombolReset.addEventListener('click', () => {

  document.querySelector('#kontainerKetikan').classList.add('none');
  kontainerKetikan.innerHTML = '';

})

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerTextarea').classList.toggle('none');

})
