const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
  async fetchArticles(query) {
    try {
      const requestParams = `${query}`;
      const response = await fetch(baseUrl + requestParams);
      const newCountry = await response.json();
      return newCountry;
    } catch (error) {
      console.log('Error');
    }
  },
};
