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
 * Load Instagram Tiles
 */
var loadInstagramTiles = function(container) {
  var requestUrl = 'https://api.instagram.com/v1/users/self/media/recent/?count=5&access_token=307570767.1677ed0.e4fdd879bbe146fa8867255b286f67c9';

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

/**
 * External Links
 */
var activateExternalLinks = function() {
  var $links = $('a[rel="external"]');
  $links.each(function(index, element) {
    $(this).attr('target', '_external');
  });
};

/**
 * Do stuff once the page has loaded!
 */
$(document).ready(function() {
  loadInstagramTiles('.instagram-feed .tiles');
  activateExternalLinks();
});
