let products = [
  { id: 1, name: "Multimeter Digital", price: 150000 },
  { id: 2, name: "Sensor Suhu", price: 50000 },
];

export async function PUT(request, { params }) {
  const id = parseInt(params.id);
  const data = await request.json();

  const index = products.findIndex((item) => item.id === id);
  if (index === -1) {
    return new Response("Product not found", { status: 404 });
  }

  products[index] = { ...products[index], ...data };

  return Response.json(products[index]);
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);

  const index = products.findIndex((item) => item.id === id);
  if (index === -1) {
    return new Response("Product not found", { status: 404 });
  }

  const deleted = products.splice(index, 1);

  return Response.json(deleted[0]);
}
