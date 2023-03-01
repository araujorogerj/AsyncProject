const API =
  "https://youtube-v31.p.rapidapi.com/search?q=Spiderman%20top%20scenes&part=snippet%2Cid&regionCode=US&maxResults=5&order=date";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "79134fa00fmshd4aecd35196e1dbp14815fjsn5469b7344e94",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const content = null || document.getElementById('content');

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
  ${videos.items
    .map(
      (video) => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
  `
    )
    .slice(0, 4)
    .join("")}
  
  `;
  } catch {}
})();
