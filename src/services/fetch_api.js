export async function fetch_data() {
  const api = "https://dummyjson.com/products";

  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
