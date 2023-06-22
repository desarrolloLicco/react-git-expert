export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=0oTgO0ACDLsTQTai1Jw3LCi4oA3GbWLj&q=${category}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gift = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gift;
};
