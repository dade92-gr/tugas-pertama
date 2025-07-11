export default function NotFound() {
  return (
    <main style={{
      backgroundColor: "black",
      color: "white",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column", // penting agar teks kedua ada di bawah
      fontSize: "3rem",
      fontFamily: "Arial Black, Gadget, sans-serif",
      textAlign: "center",
    }}>
      <div>404 - Halaman Tidak Ditemukan</div>
      <p style={{
        fontSize: "1.2rem",
        marginTop: "1rem",
        fontFamily: "Arial, sans-serif",
        fontWeight: "normal"
      }}>
        Silakan cek kembali penulisan yang Anda lakukan.
      </p>
    </main>
  );
}
