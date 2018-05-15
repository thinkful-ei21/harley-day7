'use strict';
/* global store, api */

// eslint-disable-next-line no-unused-vars
const videoList = (function() {
  const generateListItem = function(video) {
    const list = `<li><img src="${video.thumbnail}" class="${video.id}"></li>`;
    return list;
  }; 
  const render = function() {
    const domElements = store.videos.map(video => generateListItem(video));
    $('.results').html(domElements);
  }; 
  const decorateResponse = function(response) {
    return response.items.map(function(item)
    {
      return {id:item.id.videoId,
        title:item.snippet.title,
        thumbnail:item.snippet.thumbnails.medium.url};
    });
  };  
  const handleFormSubmit = function() {
    $('form').submit(event =>
    {
      event.preventDefault();
      const queryTarget = $(event.currentTarget).find('#search-term');
      const query = queryTarget.val();
      queryTarget.val('');
      api.fetchVideos(query, response =>
      {
        store.setVideos(decorateResponse(response));
        render();
      });
    }
    );
  };
  const handleThumbnailClick = function() {
    $('.results').on('click', 'li', event =>
    {
      const videoId = $(event.currentTarget).find('img').attr('class');
      window.open(`https://www.youtube.com/watch?v=${videoId}`);
    });
  };
  const bindEventListeners = function() {
    handleFormSubmit();
    handleThumbnailClick();
  };

  return {
    render,
    bindEventListeners
  };
}());