const baseAPI = 'https://64fecbcdf8b9eeca9e291654.mockapi.io/';
const APICategoties = baseAPI + 'categories';
const APICatalog = baseAPI + 'catalog';
const APICatalogHotOffers = APICatalog + '?hotoffer=yes';
const APISearch = APICatalog + '?search=';

const fetchData = async (APIname) => {
   try {
      const response = await fetch(APIname);
      const data = await response.json();
      return data;
   } catch (error) {
      throw new Error(error.message);
   }
}

function processAPIData(data, container, getHTMLfunc) {
   if (data) {
      data.forEach((item) => {
         container.insertAdjacentHTML('beforeend', getHTMLfunc(item));
      })
   }
}

export { baseAPI, APICategoties, APICatalog, APICatalogHotOffers, APISearch, fetchData, processAPIData };