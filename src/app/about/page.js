export default function AboutPage() {
  return (
    <main style={{
      padding: "2rem",
      backgroundColor: "rgba(255, 140, 0, 0.1)",
      fontFamily: "sans-serif",
      lineHeight: 1.6,
      minHeight: "100vh"
    }}>
      <h1 style={{ fontSize: "2.5rem", color: "#cc5200" }}>Tentang Saya</h1>
      <p>
        Halo, saya <strong>Dade Sugiono</strong>. Saya adalah seorang guru di SMKN 1 Terisi
        yang memiliki minat besar dalam sains, teknologi, dan pendidikan berbasis eksperimen.
      </p>
      <p>
        Selain mengajar, saya juga senang belajar hal-hal baru, terutama yang berhubungan dengan pemrograman, simulasi, dan pengembangan diri.
        Saya percaya bahwa belajar adalah proses seumur hidup.
      </p>
      <h2 style={{ marginTop: "1.5rem", fontSize: "1.5rem", color: "#b34700" }}>Visi Saya</h2>
      <p>
        Menjadi pendidik yang inspiratif dan membawa perubahan melalui pembelajaran aktif, eksploratif, dan menyenangkan.
      </p>
      <h2 style={{ marginTop: "1.5rem", fontSize: "1.5rem", color: "#b34700" }}>Hobi & Minat</h2>
      <ul>
        <li>🧪 Eksperimen sains sederhana</li>
        <li>💻 Ngoding dan membuat web edukatif</li>
        <li>📚 Membaca filsafat dan psikologi</li>
        <li>🌱 Belajar dan berbagi ilmu</li>
      </ul>
    </main>
  );
}
