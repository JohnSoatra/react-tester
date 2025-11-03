export async function fetchJson(url, options) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error('Network response not ok');
    return await res.json();
  } catch (err) {
    // small local fallback mocks
    if (url.includes('/posts')) {
      return Array.from({length: 5}).map((_, i) => ({
        id: i+1,
        userId: (i % 4) + 1,
        title: 'Local fallback post #' + (i+1),
        body: 'This is a fallback post.'
      }));
    }
    if (url.includes('/comments')) {
      return Array.from({length: 3}).map((_, i) => ({ id: i+1, email: 'mock@local', body: 'Fallback comment' }));
    }
    return null;
  }
}
