'use strict';


// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part: 'snippet',
      key: 'AIzaSyC-_OFqHR01cjpTSjpa1K0G9eIuwwKlDMk',
      q: `${searchTerm}`,
    };
    $.getJSON(this.BASE_URL, query, callback);
  };

  return {
    BASE_URL,
    fetchVideos
  };
}());