'use client';

export default async function ProductPage({ params }) {
  const { id } = params;

  let content;

  if (id === "ohm") {
    content = (
      <>
        <h2>Simulasi Hukum Ohm</h2>
        <p>Hukum Ohm: V = I × R</p>
        <label>
          Tegangan (V): <input type="number" id="volt" />
        </label>
        <br />
        <label>
          Hambatan (R): <input type="number" id="res" />
        </label>
        <br />
        <button
          onClick={() => {
            const V = parseFloat(document.getElementById("volt").value);
            const R = parseFloat(document.getElementById("res").value);
            const I = V / R;
            alert("Kuat Arus (I) = " + I.toFixed(2) + " A");
          }}
        >
          Hitung Arus
        </button>
      </>
    );
  } else if (id === "gerak-lurus") {
    content = (
      <>
        <h2>Simulasi Gerak Lurus</h2>
        <p>Halaman ini masih dalam pengembangan.</p>
      </>
    );
  } else if (id === "cermin") {
    content = (
      <>
        <h2>Simulasi Cermin Datar</h2>
        <p>Halaman ini masih dalam pengembangan.</p>
      </>
    );
  } else {
    content = (
      <>
        <h2>Produk Tidak Ditemukan</h2>
        <p>Tidak ada simulasi dengan nama: {id}</p>
      </>
    );
  }

  return (
    <div>
      <h1>Halaman Produk: {id}</h1>
      <div style={{ marginTop: 20 }}>{content}</div>
    </div>
  );
}
