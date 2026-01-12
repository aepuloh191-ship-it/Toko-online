function pesan(namaProduk) {
  const nomorWA = "6285283515948"; // ganti nomor kamu
  const pesan = `Halo, saya mau pesan ${namaProduk}`;
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}
