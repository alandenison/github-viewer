var apiKey = require('./../.env').apiKey;
function Viewer() {
}

Viewer.prototype.getRepos = function(userName) {
  $.get('https://api.github.com/users/' + this.userName + '/repos?access_token=' + apiKey).then(function(response){
    for(i=0; i<response.length; i++) {
      $("#results").append("<li>" + response[i].name + "</li>");
      console.log("end "+this.user);
  }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};




exports.viewerModule = Viewer;
