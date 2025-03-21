function buatPilihan() {
    let nama = document.getElementById("nama").value.trim();
    let jumlah = document.getElementById("jumlah").value;

    if (nama === "" || jumlah <= 0) {
        alert("Masukkan Nama dan Jumlah Pilihan yang Valid!");
        return;
    }

    let pilihanContainer = document.getElementById("pilihanContainer");
    pilihanContainer.innerHTML = `<h3>Masukkan ${jumlah} Pilihan</h3>`;

    for (let i = 1; i <= jumlah; i++) {
        pilihanContainer.innerHTML += `
            <label for="pilihan${i}">Pilihan ${i}:</label>
            <input type="text" id="pilihan${i}"><br>
        `;
    }

    pilihanContainer.innerHTML += `<button onclick="tampilkanPilihan('${nama}', ${jumlah})">OK</button>`;
    pilihanContainer.classList.remove("hidden");
}

function tampilkanPilihan(nama, jumlah) {
    let pilihan = [];
    
    for (let i = 1; i <= jumlah; i++) {
        let teksPilihan = document.getElementById(`pilihan${i}`).value.trim();
        if (teksPilihan === "") {
            alert("Semua Pilihan Harus Di isi!");
            return;
        }
        pilihan.push(teksPilihan);
    }

    let hasilContainer = document.getElementById("hasilContainer");
    hasilContainer.innerHTML = `<h3>Pilih Salah Satu</h3>`;

    let dropdownHtml = `<br><select id="dropdown">`;
    for (let i = 0; i < pilihan.length; i++) {
        dropdownHtml += `<option value="${pilihan[i]}">${pilihan[i]}</option>`;
    }
    dropdownHtml += `</select>`;

    hasilContainer.innerHTML += dropdownHtml;
    hasilContainer.innerHTML += `<br><button onclick="tampilkanHasil('${nama}', ${jumlah}, '${pilihan.join(",")}')">OK</button>`;
    hasilContainer.classList.remove("hidden");
}

function tampilkanHasil(nama, jumlah, pilihanStr) {
    let pilihan = pilihanStr.split(",");
    let pilihanTerpilih = document.getElementById("dropdown").value;

    if (!pilihanTerpilih) {
        alert("Pilih Salah Satu Opsi Terlebih Dahulu!");
        return;
    }

    alert(`Halo, Nama Saya ${nama}, Saya Mempunyai Sejumlah ${jumlah} Pilihan Yaitu ${pilihan.join(", ")}, dan Saya Memilih ${pilihanTerpilih}`);
}