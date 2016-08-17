var Viewer = require('./../js/viewer.js').viewerModule;



$(document).ready(function() {
  $("#find").click(function() {
    var user = new Viewer();
    $("#results").text("");
    var userName = $("#user-name").val();
    user.getRepos(userName);

    console.log(userName);
  });
});
