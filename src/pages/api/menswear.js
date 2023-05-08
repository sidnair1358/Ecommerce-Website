export default async function handler(req, res) {
  try {
    const request = await fetch(
      "https://mock.shop/api?query={collection(id:%20%22gid://shopify/Collection/429493780502%22){id%20handle%20title%20description%20image%20{id%20url}%20products(first:%2020){edges%20{node%20{id%20title%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{cursor%20node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}}}}"
    );

    const response = await request.json();
    const data = response.data.collection.products.edges;
    res.send(data);
  } catch (err) {
    console.log(err.message);
  }
}
