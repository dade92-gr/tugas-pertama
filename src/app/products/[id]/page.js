export default async function ProductPage({ params }) {
  const { id } = params;

  let content;
  let backgroundColor = "#f9f9f9";
  let textColor = "#000"; // default warna teks

  if (id === "ohm") {
    content = (
      <>
        <h1>Hukum Ohm</h1>
        <p>Simulasi hubungan antara tegangan, arus, dan hambatan.</p>
      </>
    );
    backgroundColor = "#fff3cd"; // kuning soft
    textColor = "#795548"; // coklat
  } else if (id === "cermin") {
    content = (
      <>
        <h1>Simulasi Cermin</h1>
        <p>Bayangan pada cermin cembung dan cekung.</p>
      </>
    );
    backgroundColor = "#e3f2fd"; // biru muda enak
    textColor = "#1565c0"; // biru tua
  } else if (id === "gerak-lurus") {
    content = (
      <>
        <h1>Gerak Lurus</h1>
        <p>Simulasi tentang kecepatan dan perpindahan benda.</p>
      </>
    );
    backgroundColor = "#f1f8e9"; // hijau sangat muda
    textColor = "#33691e"; // hijau tua
  } else {
    content = (
      <>
        <h1>Produk Tidak Ditemukan</h1>
        <p>Pastikan nama produk benar, seperti 'ohm', 'cermin', atau 'gerak-lurus'.</p>
      </>
    );
    backgroundColor = "#ffebee"; // merah muda soft
    textColor = "#c62828"; // merah tua
  }

  return (
    <main style={{
      backgroundColor,
      color: textColor,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      padding: "1rem"
    }}>
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "1rem"
      }}>
        {content.props.children[0].props.children}
      </h1>
      <p style={{
        fontSize: "1.5rem"
      }}>
        {content.props.children[1].props.children}
      </p>
    </main>
  );
}
