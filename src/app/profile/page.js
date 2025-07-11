export default function ProfilePage() {
  return (
    <main style={{ padding: "2rem", backgroundColor: "rgba(255, 165, 0, 0.2)", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#003366", marginBottom: "1rem" }}>Profil Saya</h1>
      
      <section style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color: "#005580", fontSize: "1.5rem" }}>🧑 Nama</h2>
        <p>Dade Sugiono</p>

        <h2 style={{ color: "#005580", fontSize: "1.5rem", marginTop: "1rem" }}>📍 Asal</h2>
        <p>Indramayu, Jawa Barat</p>

        <h2 style={{ color: "#005580", fontSize: "1.5rem", marginTop: "1rem" }}>💼 Profesi</h2>
        <p>Guru SMK yang tertarik dengan teknologi dan pembelajaran berbasis proyek.</p>

        <h2 style={{ color: "#005580", fontSize: "1.5rem", marginTop: "1rem" }}>🎯 Tujuan Belajar</h2>
        <p>
          Saya belajar Next.js untuk membangun aplikasi web interaktif yang bisa digunakan dalam pembelajaran sains,
          terutama untuk membuat simulasi eksperimen fisika secara online.
        </p>

        <h2 style={{ color: "#005580", fontSize: "1.5rem", marginTop: "1rem" }}>✨ Motivasi</h2>
        <p>
          Ingin terus berkembang dan membuat pembelajaran di kelas menjadi lebih menarik dan bermakna melalui teknologi.
        </p>
      </section>
    </main>
  );
}
