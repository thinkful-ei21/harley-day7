'use strict';


// eslint-disable-next-line no-unused-vars
const api = (function() {
  const API_KEY = 'AIzaSyC-_OFqHR01cjpTSjpa1K0G9eIuwwKlDMk';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part: 'snippet',
      key: this.API_KEY,
      q: `${searchTerm}`,
    };
    $.getJSON(this.BASE_URL, query, callback);
  };

  return {
    API_KEY,
    BASE_URL,
    fetchVideos
  };
}());