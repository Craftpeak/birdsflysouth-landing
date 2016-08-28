/**
 * WebFonts
 */
WebFont.load({
  google: {
    families: ['Open Sans Condensed:700']
  },
  typekit: {
    id: 'vbu2xyh'
  }
});

/**
 * Do stuff once the page has loaded!
 */
$(document).ready(function() {
  var loadInstagramTiles = function(container) {
    // Request URL - PLEASE DON'T USE THIS KEY
    var requestUrl = 'https://api.instagram.com/v1/users/self/media/recent/?count=5&access_token=307570767.9e0517d.d3e66c1eee404663a44e5068c896e227';

    $.ajax({
      url: requestUrl,
      dataType: 'jsonp'
    }).done(function(response) {
      if (response.data) {
        $.each(response.data, function(index, image) {
          $('<a class="tile" href="' + image.link + '" target="_blank"><img src="' + image.images.low_resolution.url + '" /></a>').appendTo(container);
        });

        $(container).addClass('loaded');
      } else {
        console.log("Something went wrong!");
      }
    });
  };

  loadInstagramTiles('.instagram-feed .tiles');
});
