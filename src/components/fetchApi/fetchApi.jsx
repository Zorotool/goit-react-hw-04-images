
const KEY = '29329333-055ae775c40a21a6805039f57';

export default async function fetchApi(imageRequest, page) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${imageRequest}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}