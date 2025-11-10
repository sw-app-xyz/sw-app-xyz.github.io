// HTML INPUT
let pssom = document.querySelector('#pssom');
let ot = document.querySelector('#ot');
let tindakan = document.querySelector('#tindakan');
let tanggal = document.querySelector('#tanggal');
let bulan = document.querySelector('#bulan');
let jam = document.querySelector('#jam');
let nama = document.querySelector('#nama');
let kelamin = document.querySelector('#kelamin');
let umur = document.querySelector('#umur');
let payer = document.querySelector('#payer');
let operator = document.querySelector('#operator');
let anestesi = document.querySelector('#anestesi');
let interna = document.querySelector('#interna');
let kardio = document.querySelector('#kardio');
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
let plan = document.querySelector('#plan');
let toggleDiagnosis = document.querySelector('#toggleDiagnosis');
let tombolKetikanProOp = document.querySelector('#tombolKetikanProOp');
let tombolReset = document.querySelector('#tombolReset');

// OTHER
let kontainerJudul = document.querySelector('#kontainerJudul');

// HTML OUTPUT
let kontainerKetikanOperator = document.querySelector('#kontainerKetikanOperator');
let kontainerKetikanAnestesi = document.querySelector('#kontainerKetikanAnestesi');
let kontainerKetikanInterna = document.querySelector('#kontainerKetikanInterna');
let kontainerKetikanKardio = document.querySelector('#kontainerKetikanKardio');

// TOMBOL
tombolKetikanProOp.addEventListener('click', () => {

    document.querySelector('#kontainerKetikanOperator').classList.remove('none');
    document.querySelector('#kontainerKetikanAnestesi').classList.remove('none');
    document.querySelector('#kontainerKetikanInterna').classList.remove('none');
    document.querySelector('#kontainerKetikanKardio').classList.remove('none');

    // RUNNING FUNCTION
    let hasilPssom = fungsiPssom(pssom.value);
    let hasilOt = fungsiOt(ot.value);
    let hasilTindakan = tindakan.value;
    let hasilTanggal = tanggal.value;
    let hasilBulan = bulan.value;
    let hasilJam = fungsiJam(jam.value);
    let hasilNama = fungsiNama(nama.value);
    let hasilKelamin = kelamin.value.toUpperCase();
    let hasilUmur = umur.value;
    let hasilPayer = fungsiPayer(payer.value);
    let hasilOperator = fungsiDokter(operator.value);
    let hasilAnestesi = fungsiDokter(anestesi.value);
    let hasilInterna = fungsiDokter(interna.value);
    let hasilKardio;
    if (kardio.value !== "") {
      hasilKardio = fungsiDokter(kardio.value);
    } else {
      hasilKardio = "Anindita, Sp.JP";
    }
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
    let hasilPlan = fungsiPlanOp(plan.value);

    // OPERATOR
    ketikanOperator = document.createElement('p');
    ketikanOperator.innerHTML +=
    `<h2>OPERATOR</h2>
    Selamat ${hasilPssom} dokter ${hasilOperator}, mohon maaf mengganggu waktunya. Izin melaporkan pasien rencana operasi:
    <br>
    <br>*${hasilOt}*
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
    kontainerKetikanOperator.appendChild(ketikanOperator);

    // ANESTESI
    ketikanAnestesi = document.createElement('p');
    ketikanAnestesi.innerHTML +=
    `<h2>ANESTESI</h2>
    Selamat ${hasilPssom} dokter ${hasilAnestesi}, mohon maaf mengganggu waktunya. Izin melaporkan pasien rencana operasi:
    <br>
    <br>*${hasilOt}*
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
    kontainerKetikanAnestesi.appendChild(ketikanAnestesi);

    // INTERNA
    ketikanInterna = document.createElement('p');
    ketikanInterna.innerHTML +=
    `<h2>INTERNA</h2>
    Selamat ${hasilPssom} dokter ${hasilInterna}, mohon maaf mengganggu waktunya. Izin konsul toleransi operasi pasien *pro ${hasilTindakan} tgl ${hasilTanggal}/${hasilBulan}/2025 jam ${hasilJam}*, atas nama:
    <br>
    <br>*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th, ${hasilPayer}*
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
    <br>*A:*
    <br>${hasilDiagnosis}
    <br>
    <br>*P:*
    <br>${hasilPlan}
    <br>
    <br>Mohon advice dan arahan selanjutnya dokter
    <br>Maturnuwun dokter<br>
    `
    kontainerKetikanInterna.appendChild(ketikanInterna);

    // KARDIO
    ketikanKardio = document.createElement('p');
    ketikanKardio.innerHTML +=
    `<h2>KARDIO</h2>
    Selamat ${hasilPssom} dokter ${hasilKardio}, mohon maaf mengganggu waktunya. Izin konsul toleransi operasi pasien *pro ${hasilTindakan} tgl ${hasilTanggal}/${hasilBulan}/2025 jam ${hasilJam}*, atas nama:
    <br>
    <br>*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th, ${hasilPayer}*
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
    <br>*A:*
    <br>${hasilDiagnosis}
    <br>
    <br>*P:*
    <br>${hasilPlan}
    <br>
    <br>Mohon advice dan arahan selanjutnya dokter
    <br>Maturnuwun dokter<br>
    `
    kontainerKetikanKardio.appendChild(ketikanKardio);

    // RESET
    pssom.value = '';
    ot.value = '';
    tindakan.value = '';
    tanggal.value = '';
    bulan.value = '';
    jam.value = '';
    nama.value = '';
    kelamin.value = '';
    umur.value = '';
    payer.value = '';
    operator.value = '';
    anestesi.value = '';
    interna.value = '';
    kardio.value = '';
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
    plan.value = '';

})

tombolReset.addEventListener('click', () => {

  document.querySelector('#kontainerKetikanOperator').classList.add('none');
  kontainerKetikanOperator.innerHTML = '';
  document.querySelector('#kontainerKetikanAnestesi').classList.add('none');
  kontainerKetikanAnestesi.innerHTML = '';
  document.querySelector('#kontainerKetikanInterna').classList.add('none');
  kontainerKetikanInterna.innerHTML = '';
  document.querySelector('#kontainerKetikanKardio').classList.add('none');
  kontainerKetikanKardio.innerHTML = '';

})

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerTextarea').classList.toggle('none');

})
