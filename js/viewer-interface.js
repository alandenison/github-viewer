var Viewer = require('./../js/viewer.js').viewerModule;



$(document).ready(function() {
  var user = "alandenison"
  viewer = new Viewer(user)
  viewer.getRepos(user);
});
