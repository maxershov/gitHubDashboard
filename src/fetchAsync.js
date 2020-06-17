export default async function fetchAsync(url) {
    const response = await fetch(url);
    return response.json();
}