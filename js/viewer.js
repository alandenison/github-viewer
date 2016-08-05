var apiKey = require('./../.env').apiKey;
function Viewer(userName) {
  this.user = userName;
}
var apiKey = "9e02afa0c31ec13b1caa1d0788f2b56808449878";
var userName;
Viewer.prototype.getRepos = function(userName) {
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for(i=0; i<response.length; i++) {
      $("#results").append("<li>" + response[i].name + "</li>");
  };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};




exports.viewerModule = Viewer;
