/*
 * DATA BARANG — edit file ini saja untuk menambah/mengubah barang.
 *
 * Foto TIDAK disimpan di repo. Upload foto ke hosting gambar gratis
 * (mis. ImgBB, Cloudinary, Imgur, atau Google Drive publik), lalu
 * tempel URL langsung (direct link) gambarnya ke array `photos`.
 * Saat ini memakai foto dummy dari placehold.co.
 *
 * status: "tersedia" | "dipesan" | "terjual"
 */
const WA_NUMBER = "6281234567890"; // ganti dengan nomor WhatsApp penjual (format 62...)

const dummy = (text, bg) =>
  `https://placehold.co/800x600/${bg}/ffffff?text=${encodeURIComponent(text)}`;

const PRODUCTS = [
  {
    id: "rumah",
    name: "Rumah Tipe 45 — Perumahan Asri",
    category: "Properti",
    condition: "Terawat",
    status: "tersedia",
    location: "Bekasi, Jawa Barat",
    prices: [
      { label: "Jual Cash", value: 450000000 },
      { label: "Take Over", value: 120000000, note: "sisa cicilan 3,2 jt/bln, 8 thn" },
      { label: "Dikontrakan", value: 25000000, note: "per tahun" },
    ],
    photos: [
      dummy("Rumah - Depan", "8d6e63"),
      dummy("Rumah - Ruang Tamu", "a1887f"),
      dummy("Rumah - Kamar", "795548"),
      dummy("Rumah - Dapur", "6d4c41"),
    ],
    specs: {
      "Luas Tanah": "72 m²",
      "Luas Bangunan": "45 m²",
      "Kamar Tidur": "2",
      "Kamar Mandi": "1",
      "Listrik": "1300 VA",
      "Air": "PAM",
      "Sertifikat": "SHM",
    },
    description:
      "Rumah siap huni di lingkungan tenang, dekat sekolah, pasar, dan akses tol. Bisa dibeli cash, take over KPR, atau dikontrakan tahunan. Harga masih bisa nego.",
  },
  {
    id: "mesin-cuci",
    name: "Mesin Cuci 2 Tabung 8 kg",
    category: "Elektronik",
    condition: "Bekas - Normal",
    status: "tersedia",
    location: "Bekasi",
    prices: [{ label: "Harga", value: 850000 }],
    photos: [dummy("Mesin Cuci", "1e88e5"), dummy("Mesin Cuci - Dalam", "1565c0")],
    specs: { Kapasitas: "8 kg", Tipe: "2 tabung", Usia: "± 3 tahun", Daya: "350 W" },
    description: "Mesin cuci normal, pengering berfungsi baik. Ada sedikit baret pemakaian.",
  },
  {
    id: "kulkas",
    name: "Kulkas 2 Pintu",
    category: "Elektronik",
    condition: "Bekas - Normal",
    status: "tersedia",
    location: "Bekasi",
    prices: [{ label: "Harga", value: 1500000 }],
    photos: [dummy("Kulkas", "00897b"), dummy("Kulkas - Dalam", "00695c")],
    specs: { Kapasitas: "± 200 L", Tipe: "2 pintu", Usia: "± 4 tahun", Daya: "100 W" },
    description: "Dingin maksimal, freezer bisa bikin es batu. Karet pintu masih bagus.",
  },
  {
    id: "kasur",
    name: "Kasur Spring Bed 160x200",
    category: "Perabot",
    condition: "Bekas - Bersih",
    status: "tersedia",
    location: "Bekasi",
    prices: [{ label: "Harga", value: 700000 }],
    photos: [dummy("Kasur", "8e24aa"), dummy("Kasur - Samping", "6a1b9a")],
    specs: { Ukuran: "160 x 200 cm", Tebal: "25 cm", Usia: "± 2 tahun" },
    description: "Per masih empuk, tidak ada noda besar. Tanpa divan/rangka.",
  },
  {
    id: "kompor",
    name: "Kompor Gas 2 Tungku",
    category: "Dapur",
    condition: "Bekas - Normal",
    status: "tersedia",
    location: "Bekasi",
    prices: [{ label: "Harga", value: 250000 }],
    photos: [dummy("Kompor 2 Tungku", "e53935")],
    specs: { Tungku: "2", Bahan: "Stainless", Pemantik: "Otomatis" },
    description: "Api biru stabil, pemantik normal. Sudah termasuk selang (tanpa regulator).",
  },
  {
    id: "lpg-3kg",
    name: "Tabung Gas LPG 3 kg (Isi)",
    category: "Dapur",
    condition: "Bekas - Normal",
    status: "tersedia",
    location: "Bekasi",
    prices: [{ label: "Harga", value: 150000 }],
    photos: [dummy("LPG 3 kg", "7cb342")],
    specs: { Ukuran: "3 kg", Isi: "Penuh" },
    description: "Tabung melon kondisi baik, tidak bocor. Dijual beserta isinya.",
  },
  {
    id: "lpg-5kg",
    name: "Tabung Gas LPG 5,5 kg Bright Gas (Isi)",
    category: "Dapur",
    condition: "Bekas - Normal",
    status: "tersedia",
    location: "Bekasi",
    prices: [{ label: "Harga", value: 300000 }],
    photos: [dummy("LPG 5 kg", "f06292")],
    specs: { Ukuran: "5,5 kg", Isi: "Penuh" },
    description: "Tabung pink kondisi baik, tidak bocor. Dijual beserta isinya.",
  },
];
