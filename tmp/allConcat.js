var Viewer = require('./../js/viewer.js').viewerModule;



$(document).ready(function() {
  $("#find").click(function() {
    $("#results").text("");
    var user = $("#user-name");
    viewer = new Viewer(user);
    viewer.getRepos();
  });
});
