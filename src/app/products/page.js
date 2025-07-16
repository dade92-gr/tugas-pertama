"use client";

import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });
  const [editId, setEditId] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  // Ambil data dari API
  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Form Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Tambah/Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url = editId ? `/api/products/${editId}` : "/api/products";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", price: "" });
    setEditId(null);
    fetchProducts();
  };

  // Edit
  const handleEdit = (product) => {
    setForm({ name: product.name, price: product.price });
    setEditId(product.id);
  };

  // Hapus
  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🛠️ Daftar Produk</h1>

      {/* FORM INPUT */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          name="name"
          placeholder="Nama Produk"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            marginRight: "0.5rem",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#fff",
          }}
        />
        <input
          name="price"
          type="number"
          placeholder="Harga"
          value={form.price}
          onChange={handleChange}
          required
          style={{
            marginRight: "0.5rem",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#fff",
          }}
        />
        <button
          type="submit"
          onMouseEnter={() => setHoveredButton("submit")}
          onMouseLeave={() => setHoveredButton(null)}
          style={{
            padding: "0.5rem 1rem",
            border: "none",
            backgroundColor:
              hoveredButton === "submit" ? "#a7f3d0" : "#d1fae5",
            color: "black",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {editId ? "Update" : "Tambah"}
        </button>
      </form>

      {/* TABEL PRODUK */}
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{
          width: "100%",
          textAlign: "left",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
        }}
      >
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr
              key={p.id}
              onMouseEnter={() => setHoveredRow(p.id)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                backgroundColor:
                  hoveredRow === p.id ? "#f9fafb" : "white",
                transition: "background-color 0.3s",
              }}
            >
              <td>{index + 1}</td>
              <td>{p.name}</td>
              <td>Rp {Number(p.price).toLocaleString()}</td>
              <td>
                <button
                  onClick={() => handleEdit(p)}
                  onMouseEnter={() => setHoveredButton(`edit-${p.id}`)}
                  onMouseLeave={() => setHoveredButton(null)}
                  style={{
                    marginRight: "0.5rem",
                    padding: "0.3rem 0.6rem",
                    backgroundColor:
                      hoveredButton === `edit-${p.id}`
                        ? "#bfdbfe"
                        : "#dbeafe",
                    border: "1px solid #93c5fd",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  onMouseEnter={() => setHoveredButton(`delete-${p.id}`)}
                  onMouseLeave={() => setHoveredButton(null)}
                  style={{
                    padding: "0.3rem 0.6rem",
                    backgroundColor:
                      hoveredButton === `delete-${p.id}`
                        ? "#fecaca"
                        : "#fee2e2",
                    border: "1px solid #fca5a5",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  🗑️ Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
