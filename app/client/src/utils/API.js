import axios from "axios";


// search the api of nyt and export it as a function

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },


// get all items saved to the data base
  allSaved: function() {
    return axios.get('/saved')
  }


// put to change item to save


};