define(["app"], function(app) {

  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "movies" : "list",
      "about" : "about"
    },

    initialize: function(){

    },
    index: function() {

    },
    list: function(page){
      var p = page ? parseInt(page, 10): 1;
      var moviesList = new MoviesCollection();
      moviesList.fetch({ success: function(){
        $("#content").html(new MovieListView({ model: MovieList, page: p }).el);
      }});
    },
    about: function(){
      $("#content").html(new AboutView.el);
    }
  });

  return Router;
});
