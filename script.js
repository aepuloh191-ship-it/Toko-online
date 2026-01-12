function pesan(namaProduk) {
  const nomorWA = "62852835159480"; // ganti nomor kamu
  const pesan = `Halo, saya mau pesan ${namaProduk}`;
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}
