export default async function fetchAsync(url) {
    const response = await fetch(url);

    /* kludge to fix error contributors fetch in linux repo with */
    if (response.status === 403) return []
    return response.json();
}