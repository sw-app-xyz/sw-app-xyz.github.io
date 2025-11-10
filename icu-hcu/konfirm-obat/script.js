// HTML INPUT
let pssom = document.querySelector('#pssom');
let nama = document.querySelector('#nama');
let kelamin = document.querySelector('#kelamin');
let umur = document.querySelector('#umur');
let payer = document.querySelector('#payer');
let diagnosis = document.querySelector('#diagnosis');
let dokter = document.querySelector('#dokter');
let obat = document.querySelector('#obat');
let toggleDiagnosis = document.querySelector('#toggleDiagnosis');
let tombolKetikanKonfirmasi = document.querySelector('#tombolKetikanKonfirmasi');
let tombolReset = document.querySelector('#tombolReset');

// OTHER
let kontainerJudul = document.querySelector('#kontainerJudul');

// HTML OUTPUT
let kontainerKetikan = document.querySelector('#kontainerKetikan');

// TOMBOL
tombolKetikanKonfirmasi.addEventListener('click', () => {

    document.querySelector('#kontainerKetikan').classList.remove('none');

    // RUNNING FUNCTION
    let hasilPssom = fungsiPssom(pssom.value);
    let hasilNama = fungsiNama(nama.value);
    let hasilKelamin = kelamin.value.toUpperCase();
    let hasilUmur = umur.value;
    let hasilPayer = fungsiPayer(payer.value);
    let hasilDiagnosis = fungsiDiagnosis(diagnosis.value);
    let hasilDokter = fungsiDokter(dokter.value);
    let hasilObat = obat.value;

    ketikan = document.createElement('p');
    ketikan.innerHTML +=
    `Selamat ${hasilPssom} dr. Rizky, Sp.An, mohon maaf mengganggu waktunya. Izin melaporkan penambahan obat pasien:
    <br>
    <br>*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th, ${hasilPayer}*
    <br>
    <br>*Diagnosis:*
    <br>${hasilDiagnosis}
    <br>
    <br>Dari dokter ${hasilDokter} memberikan tambahan obat ${hasilObat}
    <br>
    <br>Apakah acc dokter terkait penambahan obat tersebut?
    <br>
    <br>Mohon advice dan arahan selanjutnya dokter
    <br>Maturnuwun dokter<br>
    `
    kontainerKetikan.appendChild(ketikan);

    // RESET
    pssom.value = '';
    nama.value = '';
    kelamin.value = '';
    umur.value = '';
    payer.value = '';
    diagnosis.value = '';
    dokter.value = '';
    obat.value = '';

})

tombolReset.addEventListener('click', () => {

  document.querySelector('#kontainerKetikan').classList.add('none');
  kontainerKetikan.innerHTML = '';

})

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerTextarea').classList.toggle('none');

})
