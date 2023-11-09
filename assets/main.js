const API = 'https://reqres.in/api/users';
const nodoContent = document.getElementById('content');

const options = {
    method: 'GET',
};

const fetchData = async (urlApi) => {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {

    try {
        const photos = await fetchData(API);
        const view = photos.data.map(user => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${user.avatar}" alt="${user.first_name}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${user.first_name + " " + user.last_name}
          </h3>
        </div>
      </div>
      `).slice(0, 4).join("");

        nodoContent.innerHTML = view;

    } catch (error) {
        console.log(error)
    }
})();