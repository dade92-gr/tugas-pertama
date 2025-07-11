export default function HomePage() {
  return (
    <main style={{
      height: "100vh",
      backgroundColor: "#ffecd2",
      backgroundImage: "linear-gradient(to right, #fcb69f, #ffecd2)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      padding: "2rem",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}>
        Selamat Datang di Zona Simulasi Fisika 🧪
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#444", maxWidth: "600px", marginTop: "1rem" }}>
        Di sini kamu bisa belajar konsep-konsep fisika seperti Hukum Ohm, Cermin Cembung, dan Gerak Lurus melalui eksperimen virtual yang interaktif dan menyenangkan!
      </p>
    </main>
  );
}
