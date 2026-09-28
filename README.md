# Pre-Loved

Website statis untuk menjual barang bekas (rumah, mesin cuci, kulkas, kasur, kompor, tabung LPG, dll).
Tanpa framework, tanpa build — hanya HTML + CSS + JS (±10 KB total).

## Struktur

| File | Isi |
|------|-----|
| `index.html` | Halaman utama |
| `style.css` | Tampilan |
| `app.js` | Daftar barang, filter kategori, pencarian, detail + galeri, tombol WhatsApp |
| `data.js` | **Data barang & nomor WhatsApp — cukup edit file ini** |

## Mengubah / menambah barang

Buka `data.js`, ubah `WA_NUMBER`, lalu tambah/ubah objek di `PRODUCTS`.
Satu barang bisa punya beberapa harga, misalnya rumah: *Jual Cash*, *Take Over*, *Dikontrakan*.
`status` bisa `tersedia`, `dipesan`, atau `terjual`.

## Foto

Foto **tidak disimpan di repo**. Upload ke hosting gambar gratis, lalu salin *direct link*-nya ke `photos`:

- [ImgBB](https://imgbb.com) — ambil link "Direct link" (`https://i.ibb.co/...jpg`)
- [Cloudinary](https://cloudinary.com) (free tier)
- [Imgur](https://imgur.com) — `https://i.imgur.com/xxxx.jpg`

Saat ini semua foto memakai dummy dari `placehold.co`.

## Deploy ke GitHub Pages

1. Merge ke branch `main`.
2. Di GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Setiap push ke `main` otomatis ter-deploy ke `https://<user>.github.io/pre-loved/`.

## Coba di lokal

Cukup buka `index.html` di browser (tidak perlu server).
