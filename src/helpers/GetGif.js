export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=GIXf7Z6VL6dQpCZpcAjnbhOzqVGRxbHg`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      url: img.images?.downsized_medium.url,
      title: img.title,
      id: img.id,
    };
  });
  return gifs;
};
