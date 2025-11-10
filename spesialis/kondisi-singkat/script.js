// HTML INPUT
let pssom = document.querySelector('#pssom');
let nama = document.querySelector('#nama');
let kelamin = document.querySelector('#kelamin');
let umur = document.querySelector('#umur');
let payer = document.querySelector('#payer');
let tujuan = document.querySelector('#tujuan');
let diagnosis = document.querySelector('#diagnosis');
let kondisi = document.querySelector('#kondisi');
let toggleDiagnosis = document.querySelector('#toggleDiagnosis');
let tombolKetikanKondisi = document.querySelector('#tombolKetikanKondisi');
let tombolReset = document.querySelector('#tombolReset');

// OTHER
let kontainerJudul = document.querySelector('#kontainerJudul');

// HTML OUTPUT
let kontainerKetikan = document.querySelector('#kontainerKetikan');

// TOMBOL
tombolKetikanKondisi.addEventListener('click', () => {

    document.querySelector('#kontainerKetikan').classList.remove('none');

    // RUNNING FUNCTION
    let hasilPssom = fungsiPssom(pssom.value);
    let hasilNama = fungsiNama(nama.value);
    let hasilKelamin = kelamin.value.toUpperCase();
    let hasilUmur = umur.value;
    let hasilPayer = fungsiPayer(payer.value);
    let hasilTujuan = fungsiDokter(tujuan.value);
    let hasilDiagnosis = fungsiDiagnosis(diagnosis.value);
    let hasilKondisi = fungsiKeluhan(kondisi.value);

    // CEK DOKTER
    if (hasilTujuan !== '') {
      ketikan = document.createElement('p');
      ketikan.innerHTML +=
      `Selamat ${hasilPssom} dokter ${hasilTujuan}, mohon maaf mengganggu waktunya. Izin melaporkan kondisi pasien:
      <br>
      <br>*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th, ${hasilPayer}*
      <br>
      <br>*Diagnosis:*
      <br>${hasilDiagnosis}
      <br>
      <br>${hasilKondisi}
      <br>
      <br>Mohon advice dan arahan selanjutnya dokter
      <br>Maturnuwun dokter<br>
      `
      kontainerKetikan.appendChild(ketikan);
    } else {
      ketikan = document.createElement('p');
      ketikan.innerHTML +=
      `Selamat ${hasilPssom} dokter, mohon maaf mengganggu waktunya. Izin melaporkan kondisi pasien:
      <br>
      <br>*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th, ${hasilPayer}*
      <br>
      <br>*Diagnosis:*
      <br>${hasilDiagnosis}
      <br>
      <br>${hasilKondisi}
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
    kondisi.value = '';

})

tombolReset.addEventListener('click', () => {

  document.querySelector('#kontainerKetikan').classList.add('none');
  kontainerKetikan.innerHTML = '';

})

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerTextarea').classList.toggle('none');

})
