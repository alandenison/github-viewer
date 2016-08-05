var Viewer = require('./../js/viewer.js').viewerModule;



$(document).ready(function() {
  // $("#find").click(function) {
  //   console.log("hi");
  //   var user = $("#user-name");
  //   viewer = new Viewer(user)
  //   viewer.getRepos(user);
  // };
  var user = "alandenison"
  viewer = new Viewer(user)
  viewer.getRepos(user);

});
