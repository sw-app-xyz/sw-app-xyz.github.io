// PSSOM
let fungsiPssom = (x) => {
  if (x === "p" || x === "P") {
    return "pagi"
  }
  else if (x === "s" || x === "S") {
    return "siang"
  }
  else if (x === "so" || x === "SO") {
    return "sore"
  }
  else if (x === "m" || x === "M") {
    return "malam"
  }
  return "pagi"
}

// OT
let fungsiOt = (ot) => {
  if (ot !== "") {
    const arrayBarisMentah = ot.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const otHTML = arrayBarisBersih.join('<br>');
    return otHTML
  }
  return "-"
}

// NAMA KAPITAL
let fungsiNama = (namaLengkap) => {
  let namaPerKata = namaLengkap.split(" ");
  return namaPerKata.map((nama) => {
    return nama[0].toUpperCase() + nama.substring(1);
  }).join(" ");
}

// UMUR NEONATUS
let fungsiUmurNeonatus = (umur) => {
  if (umur !== "") {
    return umur;
  }
  return "2"
}

// PAYER
let fungsiPayer = (x) => {
  if (x === "" || x === "b" || x === "B") {
    return "BPJS"
  }
  else if (x === "a" || x === "A") {
    return "Asuransi"
  }
  else if (x === "k" || x === "K") {
    return "KSWT"
  }
  return "BPJS"
}

// KODE SPESIALIS
let fungsiDokter = (x) => {
  // IPD
  if (x === "tya" || x === "TYA") {
    return "Tyas, Sp.PD"
  }
  else if (x === "wid" || x === "WID") {
    return "Widodo, Sp.PD"
  }
  else if (x === "adh" || x === "ADH") {
    return "Adhita, Sp.PD"
  }
  else if (x === "cah" || x === "CAH") {
    return "Cahyo, Sp.PD"
  }
  // JANTUNG
  else if (x === "ani" || x === "ANI") {
    return "Anindita, Sp.JP"
  }
  // PARU
  else if (x === "wil" || x === "WIL") {
    return "Wildan, Sp.P"
  }
  else if (x === "col" || x === "COL") {
    return "Colin, Sp.P"
  }
  // ANAK
  if (x === "dar" || x === "DAR") {
    return "Dara, Sp.A"
  }
  else if (x === "idh" || x === "IDH") {
    return "Idha, Sp.A"
  }
  // OBSGIN
  if (x === "sap" || x === "SAP") {
    return "Sapar, Sp.OG"
  }
  else if (x === "dan" || x === "DAN") {
    return "Danu, Sp.OG"
  }
  else if (x === "yun" || x === "YUN") {
    return "Yunita, Sp.OG"
  }
  // BEDAH
  else if (x === "dud" || x === "DUD") {
    return "Dudy, Sp.B"
  }
  else if (x === "rez" || x === "REZ") {
    return "Reza, Sp.B"
  }
  // ORTOPEDI
  else if (x === "ric" || x === "RIC") {
    return "Ricky, Sp.OT"
  }
  else if (x === "tri" || x === "TRI") {
    return "Trimanto, Sp.OT"
  }
  // UROLOGI
  else if (x === "rad" || x === "RAD") {
    return "Radityo, Sp.U"
  }
  // ANESTESI
  else if (x === "riz" || x === "RIZ") {
    return "Rizky, Sp.An"
  }
  else if (x === "ikr" || x === "IKR") {
    return "Ikrar, Sp.An"
  }
  // SARAF
  else if (x === "tan" || x === "TAN") {
    return "Tantra, Sp.S"
  }
  else if (x === "sol" || x === "SOL") {
    return "Soleh, Sp.S"
  }
  // MATA
  else if (x === "ern" || x === "ERN") {
    return "Ernes, Sp.M"
  }
  // THT
  else if (x === "bus" || x === "BUS") {
    return "Bustanul, Sp.THT"
  }
  else if (x === "kom" || x === "KOM") {
    return "Komang, Sp.THT"
  }
  // KFR
  else if (x === "rat" || x === "RAT") {
    return "Ratna, Sp.KFR"
  }
  return ""
}

// DPJP
let fungsiDpjp = (dpjp) => {
  if (dpjp !== "") {
    const arrayBarisMentah = dpjp.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const dpjpHTML = arrayBarisBersih.join('<br>');
    return dpjpHTML
  }
  return "-"
}

// DIAGNOSIS RAPI
let fungsiDiagnosis = (dx) => {
  if (toggleDiagnosis.checked === false) {
    const arrayBarisMentah = dx.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const arrayBerstrip = arrayBarisBersih.map(baris => {
        return `- ${baris.trim()}`;
    });
    const diagnosisHTML = arrayBerstrip.join('<br>');
    return diagnosisHTML
  } else {
    const arrayBarisMentah = dx.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const diagnosisHTML = arrayBarisBersih.join('<br>');
    return diagnosisHTML
  }
}

// KELUHAN
let fungsiKeluhan = (keluhan) => {
  if (keluhan !== "") {
    const arrayBarisMentah = keluhan.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const keluhanHTML = arrayBarisBersih.join('<br>');
    return keluhanHTML
  }
  return "pasien mengatakan tidak ada keluhan"
}

// KELUHAN ICU
let fungsiKeluhanIcu = (keluhanIcu) => {
  if (keluhanIcu !== "") {
    const arrayBarisMentah = keluhanIcu.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const keluhanIcuHTML = arrayBarisBersih.join('<br>');
    return keluhanIcuHTML
  }
  return "Pasien sulit dikaji, terpasang ETT on ventilator"
}

// KELUHAN NEONATUS
let fungsiKeluhanNeonatus = (keluhanNeonatus) => {
  if (keluhanNeonatus !== "") {
    const arrayBarisMentah = keluhanNeonatus.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const keluhanNeonatusHTML = arrayBarisBersih.join('<br>');
    return keluhanNeonatusHTML
  }
  return "Bayi alert, refleks menyusui (+) baik, BAB (+), BAK (+)"
}

// KONDISI UMUM
let fungsiKu = (x) => {
  if (x !== "") {
    return x
  }
  return "sedang, CM"
}

// KONDISI UMUM NEONATUS
let fungsiKuNeonatus = (x) => {
  if (x !== "") {
    return x
  }
  return "alert"
}

// FUNGSI KESAN
let fungsiKesan = (x) => {
  if (x !== "") {
    return x
  }
  return "sedang"
}

// FUNGSI GCS
let fungsiGcs = (x) => {
  if (x !== "") {
    return x
  }
  return "CM, E4V5M6"
}

// FUNGSI VERBAL
let fungsiVerbal = (x) => {
  if (x !== "") {
    return x
  }
  return "tubb"
}

// HR
let fungsiHr = (x) => {
  if (x !== "") {
    return x
  }
  return Math.floor(Math.random() * 21) + 70;
}

// HR NEONATUS
let fungsiHrNeonatus = (x) => {
  if (x !== "") {
    return x
  }
  return Math.floor(Math.random() * 11) + 125;
}

// RR
let fungsiRr = (x) => {
  if (x !== "") {
    return x
  }
  return "20";
}

let fungsiRrNeonatus = (x) => {
  if (x !== "") {
    return x
  }
  return Math.floor(Math.random() * 6) + 40;
}

// SUHU
let fungsiS = (x) => {
  if (x !== "") {
    return x
  }
  return (Math.floor(Math.random() * 6) + 364) / 10;
}

// SPO2
let fungsiSpo2 = (x) => {
  if (x !== "") {
    return x
  }
  return Math.floor(Math.random() * 4) + 97;
}

// OKSIGENASI
let fungsiOksigenasi = (x) => {
  if (x !== "") {
    return x
  }
  return "RA";
}

// NOTES
let fungsiNotes = (notes) => {
  if (notes !== "") {
    const arrayBarisMentah = notes.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const notesHTML = arrayBarisBersih.join('<br>');
    return notesHTML
  }
  return "-"
}

// BC
let fungsiBc = (bc) => {
  if (bc !== "") {
    const arrayBarisMentah = bc.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const bcHTML = arrayBarisBersih.join('<br>');
    return bcHTML
  }
  return "-"
}

// PLAN
let fungsiPlan = (plan) => {
  if (plan !== "") {
    return plan.split('\n').join('<br>');
  }
  return "-"
}

// PLAN IGD
const toTitleCase = (str) => {
  if (!str || str.trim() === '') {
    return '';
  }
  return str.split(/\s+/)
    .map(word => {
      if (word.length === 0) return '';
      if (word.toLowerCase() === 'po') return 'PO';
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
};

let fungsiPlanIgd = (plan) => {
  if (!plan) return '';
  const arrayBarisMentah = plan.split('\n');
  const arrayBarisBersih = arrayBarisMentah.filter(baris => baris.trim() !== '');
  const arrayBarisDiformat = arrayBarisBersih.map(baris => {
    const kataKata = baris.trim().split(/\s+/);
    let hasilKata = [];
    for (let i = 0; i < kataKata.length; i++) {
      let kata = kataKata[i];
      if (kata.length === 0) continue;
      if (i < 2) {
        if (kata.toLowerCase() === 'po') {
           hasilKata.push('PO');
        } else {
           hasilKata.push(kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase());
        }
      } else {
        if (kata.toLowerCase() === 'po') {
          hasilKata.push('PO');
        } else {
          hasilKata.push(kata);
        }
      }
    }
    let barisDiformat = hasilKata.join(' ');
    barisDiformat = barisDiformat.replace(/\bpo\b/gi, 'PO');
    let kataPertama = kataKata[0] ? kataKata[0].replace(/\bpo\b/gi, 'PO') : '';
    let kataKedua = kataKata[1] ? kataKata[1].replace(/\bpo\b/gi, 'PO') : '';
    let sisaKata = kataKata.slice(2).join(' ').replace(/\bpo\b/gi, 'PO');
    let kataPertamaCapital = kataPertama.length > 0 ? kataPertama.charAt(0).toUpperCase() + kataPertama.slice(1).toLowerCase() : '';
    if (kataPertama.toUpperCase() === 'PO') kataPertamaCapital = 'PO';
    let kataKeduaCapital = kataKedua.length > 0 ? kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1).toLowerCase() : '';
    if (kataKedua.toUpperCase() === 'PO') kataKeduaCapital = 'PO';
    let barisAkhir = [kataPertamaCapital, kataKeduaCapital, sisaKata].filter(Boolean).join(' ');
    return barisAkhir;
  });

  const arrayBerstrip = arrayBarisDiformat.map(baris => {
    return baris ? `- ${baris}` : '';
  });

  const planHTML = arrayBerstrip.join('<br>');
  return planHTML;
}

// PLAN OP
let fungsiPlanOp = (plan) => {
  if (plan !== "") {
    const arrayBarisMentah = plan.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const planHTML = arrayBarisBersih.join('<br>');
    return planHTML
  }
  return "-"
}

// JAM
let fungsiJam = (jam) => {
  if (jam.endsWith('.')) {
    // Jika ada titik di akhir, ubah ke format HH.30
    jam = jam.slice(0, -1); // Hapus titik
    return (jam.length === 1 ? '0' + jam : jam) + '.30';
  } else {
    // Format standar HH.00
    return (jam.length === 1 ? '0' + jam : jam) + '.00';
  }
};
