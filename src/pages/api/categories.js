export default async function handler(req, res) {
  try {
    const request = await fetch(
      "https://mock.shop/api?query={collections(first:%2010){edges%20{cursor%20node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}"
    );

    const response = await request.json();
    const data = response.data;
    res.send(data);
  } catch (err) {
    console.log(err.message);
  }
}
