// DATA AWAL: Simulasi data buku dari database perpustakaan
const dataBuku = [
  { id: 1, judul: "Laskar Pelangi", penulis: "Andrea Hirata", dipinjam: false },
    { id: 2, judul: "Bumi", penulis: "Tere Liye", dipinjam: false },
      { id: 3, judul: "Negeri 5 Menara", penulis: "A. Fuadi", dipinjam: true }
      ];

      // =======================================================
      // 1. querySelector dan querySelectorAll
      // =======================================================

      // querySelector: mengambil 1 elemen pertama berdasarkan selector CSS
      const judulUtama = document.querySelector('#judul-perpus'); // ambil berdasarkan ID
      const daftarBukuEl = document.querySelector('#daftar-buku'); // ambil container buku
      const infoStokEl = document.querySelector('#info-stok'); // ambil info stok
      const coverEl = document.querySelector('#cover-buku'); // ambil elemen gambar

      // =======================================================
      // 2. innerHTML, textContent, innerText
      // =======================================================

      // textContent: mengubah teks murni tanpa tag HTML (paling aman & cepat)
      infoStokEl.textContent = `Total Buku: ${dataBuku.length}`;

      // innerHTML: membuat daftar buku lengkap dengan tag HTML dari data array
      // Kita loop data dan buat template HTML per buku
      let templateHTML = "";
      dataBuku.forEach(buku => {
        templateHTML += `
            <div class="kartu buku" data-id="${buku.id}">
                  <h3 class="judul-buku">${buku.judul}</h3>
                        <p>Penulis: ${buku.penulis}</p>
                              <button class="btn-pinjam">Pinjam</button>
                                  </div>
                                    `;
                                    });
                                    // Masukkan template ke dalam container
                                    daftarBukuEl.innerHTML = templateHTML;

                                    // querySelectorAll: mengambil SEMUA elemen yang cocok (hasilnya NodeList)
                                    const semuaKartuBuku = document.querySelectorAll('.buku'); // ambil semua kartu buku
                                    const semuaTombol = document.querySelectorAll('.btn-pinjam'); // ambil semua tombol pinjam

                                    // innerText: membaca teks yang terlihat oleh user
                                    console.log("Judul terlihat:", judulUtama.innerText);

                                    // =======================================================
                                    // 3. Manipulasi Atribut dan Style
                                    // =======================================================

                                    // Loop setiap tombol untuk kasih fungsi pinjam
                                    semuaTombol.forEach((tombol, index) => {
                                      // Ambil data buku yang sesuai dengan urutan tombol
                                        const buku = dataBuku[index];
                                          const kartu = semuaKartuBuku[index];

                                            // Jika buku sudah dipinjam dari awal (data)
                                              if (buku.dipinjam) {
                                                  // MANIPULASI ATRIBUT: menonaktifkan tombol
                                                      tombol.setAttribute('disabled', true); // tambah atribut disabled
                                                          // MANIPULASI TEKS: ubah tulisan tombol
                                                              tombol.textContent = "Sudah Dipinjam";
                                                                  // MANIPULASI STYLE via classList (cara terbaik)
                                                                      kartu.classList.add('dipinjam'); // tambah class CSS 'dipinjam'
                                                                        }

                                                                          // Tambahkan event klik untuk tiap tombol
                                                                            tombol.addEventListener('click', () => {
                                                                                // MANIPULASI ATRIBUT pada gambar: ganti src cover
                                                                                    // getAttribute: membaca nilai atribut saat ini
                                                                                        console.log("Src lama:", coverEl.getAttribute('src'));
                                                                                            // setAttribute: mengubah nilai atribut src
                                                                                                coverEl.setAttribute('src', `https://via.placeholder.com/120x150?text=${buku.judul}`);
                                                                                                    // setAttribute alt untuk aksesibilitas
                                                                                                        coverEl.setAttribute('alt', `Cover ${buku.judul}`);

                                                                                                            // MANIPULASI STYLE LANGSUNG: ubah warna kartu yang diklik
                                                                                                                kartu.style.backgroundColor = "#ffdddd"; // ubah background jadi merah muda
                                                                                                                    kartu.style.border = "2px solid red"; // tambah border merah
                                                                                                                        kartu.style.transform = "scale(0.98)"; // efek sedikit mengecil

                                                                                                                            // MANIPULASI ATRIBUT: nonaktifkan tombol setelah diklik
                                                                                                                                tombol.setAttribute('disabled', true);
                                                                                                                                    tombol.textContent = "Sudah Dipinjam";

                                                                                                                                        // Update status stok pakai textContent
                                                                                                                                            infoStokEl.textContent = `Buku "${buku.judul}" sedang dipinjam!`;
                                                                                                                                              });
                                                                                                                                              });
                                                                                                                                              