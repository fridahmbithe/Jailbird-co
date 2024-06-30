// export async function fetchData() {
//   const res = await fetch("./data.json");
//   const data = await res.json();
//   return data;
// }
export async function fetchData() {
  const response = await fetch('/api/jobs');

  if (!response.ok) {
    const error = new Error(`HTTP error ${response.status}`);
    error.status = response.status;
    throw error;
  }

  try {
    const data = await response.json();
    return data;
  } catch (err) {
    const error = new Error('Invalid JSON response from server');
    error.status = response.status;
    throw error;
  }
}