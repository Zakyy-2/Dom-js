// ========================================================
// 1. querySelector dan querySelectorAll
// ========================================================
const judulPerpus = document.querySelector("#judul-perpus");
const infoStok = document.querySelector("#info-stok span");
const formBuku = document.querySelector("#form-buku");
const inputJudul = document.querySelector("#input-judul");
const inputPenulis = document.querySelector("#input-penulis");
const btnTambah = document.querySelector("#btn-tambah");
const btnToggleFitur = document.querySelector("#btn-toggle-fitur");
const inputCari = document.querySelector("#input-cari");
const daftarBuku = document.querySelector("#daftar-buku");

// Data Awal
let dataBuku = [
  { id: 1, judul: "Laskar Pelangi", penulis: "Andrea Hirata", dipinjam: false },
  { id: 2, judul: "Bumi", penulis: "Tere Liye", dipinjam: false }
];

// ========================================================
// FUNGSI RENDER (Memuat/Memperbarui Tampilan)
// ========================================================
function renderBuku() {
  // 2. innerHTML: Mengosongkan & mengisi container HTML
  daftarBuku.innerHTML = "";

  dataBuku.forEach((buku) => {
    // 4. Membuat Elemen Baru
    const kartu = document.createElement("div");
    kartu.className = `kartu-buku ${buku.dipinjam ? "dipinjam" : ""}`;
    
    // 3. Manipulasi Atribut Data
    kartu.setAttribute("data-id", buku.id);

    kartu.innerHTML = `
      <div>
        <strong>${buku.judul}</strong> - <em>${buku.penulis}</em>
      </div>
      <div>
        <button class="btn-pinjam">${buku.dipinjam ? "Kembalikan" : "Pinjam"}</button>
        <button class="btn-hapus">Hapus</button>
      </div>
    `;

    // 4. Menambahkan Elemen ke DOM (appendChild)
    daftarBuku.appendChild(kartu);
  });

  // 2. textContent: Memperbarui counter angka saja
  infoStok.textContent = dataBuku.length;
}

// ========================================================
// 3. Manipulasi Atribut dan Style
// ========================================================
btnToggleFitur.addEventListener("click", () => {
  const isDisabled = btnTambah.hasAttribute("disabled");
  
  if (isDisabled) {
    btnTambah.removeAttribute("disabled");
    btnTambah.style.backgroundColor = "#007bff";
    btnToggleFitur.textContent = "Matikan Fitur Tambah";
  } else {
    btnTambah.setAttribute("disabled", "true");
    btnTambah.style.backgroundColor = "#6c757d";
    btnToggleFitur.textContent = "Aktifkan Fitur Tambah";
  }
});

// ========================================================
// 5. Event Listener (submit) + 8. Ambil Data Dan Validasi
// ========================================================
formBuku.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah reload halaman

  // 8. Ambil Data dari Input
  const judul = inputJudul.value.trim();
  const penulis = inputPenulis.value.trim();

  // 8. Validasi Data
  if (judul === "" || penulis === "") {
    alert("Judul dan Penulis tidak boleh kosong!");
    return;
  }

  if (judul.length < 3) {
    alert("Judul buku minimal harus 3 karakter!");
    return;
  }

  // Tambah Data
  const bukuBaru = {
    id: Date.now(),
    judul: judul,
    penulis: penulis,
    dipinjam: false
  };

  dataBuku.push(bukuBaru);
  renderBuku();

  // Reset form
  inputJudul.value = "";
  inputPenulis.value = "";
});

// ========================================================
// 5. Event Listener (input) + 1. querySelectorAll
// ========================================================
inputCari.addEventListener("input", (e) => {
  const kataKunci = e.target.value.toLowerCase();
  
  // 1. querySelectorAll: Mengambil semua kartu yang sudah ada di DOM
  const semuaKartu = document.querySelectorAll(".kartu-buku");

  semuaKartu.forEach((kartu) => {
    // 2. innerText / textContent: Membaca teks di dalam kartu
    const teksBuku = kartu.innerText.toLowerCase();
    
    // 3. Manipulasi Style (Display)
    if (teksBuku.includes(kataKunci)) {
      kartu.style.display = "flex";
    } else {
      kartu.style.display = "none";
    }
  });
});

// ========================================================
// 7. Event Delegation + 6. Event Bubbling & stopPropagation + 9. DOM Traversal
// ========================================================
daftarBuku.addEventListener("click", (e) => {
  // 9. DOM Traversal (Parent): Mencari elemen induk .kartu-buku terdekat
  const kartu = e.target.closest(".kartu-buku");
  if (!kartu) return;

  const idBuku = Number(kartu.getAttribute("data-id"));

  // Jika tombol HAPUS diklik
  if (e.target.classList.contains("btn-hapus")) {
    // 6. stopPropagation: Mencegah event bubbling ke elemen di atasnya
    e.stopPropagation();

    // 4. Menghapus Elemen
    dataBuku = dataBuku.filter((buku) => buku.id !== idBuku);
    renderBuku();
  }

  // Jika tombol PINJAM diklik
  if (e.target.classList.contains("btn-pinjam")) {
    e.stopPropagation();

    const buku = dataBuku.find((b) => b.id === idBuku);
    if (buku) {
      buku.dipinjam = !buku.dipinjam;
      renderBuku();
    }
  }
});

// Inisialisasi Tampilan Pertama
renderBuku();