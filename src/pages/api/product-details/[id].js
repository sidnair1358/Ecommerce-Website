export default async function handler(req, res) {
  const productId = req.query.id;

  try {
    const request = await fetch(
      `https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/${productId}%22){id%20title%20description%20images(first:%204){edges{node{id%20url}}}%20variants(first:%203){edges%20{cursor%20node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}
`
    );

    const response = await request.json();
    const data = response.data.product;
    res.send(data);
  } catch (err) {
    console.log(err.message);
  }
}
