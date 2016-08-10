var apiKey = require('./../.env').apiKey;
function Viewer(userName) {
  this.user = userName;
}

Viewer.prototype.getRepos = function(userName) {
  $.get('https://api.github.com/users/' + this.user + '/repos?access_token=' + apiKey).then(function(response){
    for(i=0; i<response.length; i++) {
      $("#results").append("<li>" + response[i].name + "</li>");
  }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};




exports.viewerModule = Viewer;
