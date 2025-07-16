let products = [
  { id: 1, name: "Multimeter Digital", price: 150000 },
  { id: 2, name: "Sensor Suhu", price: 50000 },
];

export async function GET() {
  return Response.json(products);
}

export async function POST(req) {
  const data = await req.json();
  const newProduct = {
    id: Date.now(),
    ...data,
  };
  products.push(newProduct);
  return Response.json(newProduct);
}
