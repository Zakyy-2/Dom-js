# DOM Javascript - Studi Kasus Sistem Perpustakaan Mini

Repository
 **Document Object Model (DOM)** Javascript.

## Materi & Contoh Penerapan

1. **`querySelector` & `querySelectorAll`**
   - Digunakan untuk mengambil elemen HTML seperti `#judul-perpus`, `#daftar-buku`, dan `.kartu-buku`.
2. **`innerHTML`, `textContent`, & `innerText`**
   - `innerHTML` digunakan untuk me-render daftar kartu buku secara dinamis.
   - `textContent` & `innerText` digunakan untuk memperbarui jumlah stok dan pencarian.
3. **Manipulasi Atribut dan Style**
   - Mengubah properti `disabled` dan `style.backgroundColor` pada tombol tambah via `setAttribute()` & `removeAttribute()`.
4. **Membuat & Menghapus Elemen**
   - `document.createElement()` & `appendChild()` untuk menambah buku baru.
   - `renderBuku()` memutakhirkan array data dan menghapus item dari DOM.
5. **Event Listener (`click`, `input`, `submit`)**
   - `submit` pada form tambah buku.
   - `input` pada fitur pencarian judul secara real-time.
   - `click` pada tombol aksi (pinjam, hapus, toggle).
6. **Event Bubbling & `stopPropagation()`**
   - Penggunaan `e.stopPropagation()` pada tombol di dalam kartu agar event klik tidak merambat ke parent container.
7. **Event Delegation**
   - Event listener ditempel pada elemen parent `#daftar-buku` untuk menangani tombol pinjam/hapus elemen anak dinamis.
8. **Ambil Data Dan Validasi**
   - Membaca `input.value.trim()` dan mengecek agar kolom judul/penulis tidak boleh kosong atau terlalu pendek.
9. **DOM Traversal (Parent dan Children)**
   - Menggunakan `e.target.closest('.kartu-buku')` untuk menavigasi dari tombol yang diklik ke elemen kartu induknya.

