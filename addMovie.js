$(function () {
  var old = TimeLineView.prototype.renderTimeLine;
  TimeLineView.prototype.renderTimeLine = function (el) {

    // render
    old.apply(this, arguments);

    // youtube url
    $(el).find('a[href^="https://www.youtube.com/watch?v="]').each(function() {
      var urls = $(this).attr("href").split("/");
      var url = urls[3].split("=");
      var movieId = url[1];

      var $movie = $('<div class="movie" />')
      .attr("movie-id", movieId)
      .append('To see movie click')
      .on('click', function() {
        var player = '<iframe width="420" height="315" src="https://www.youtube.com/embed/' + $(this).attr('movie-id') + '" frameborder="0" allowfullscreen></iframe>';
        $(this).html(player);
      });

      $(this).after($movie);
    });
});