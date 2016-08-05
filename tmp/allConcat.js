var Viewer = require('./../js/viewer.js').viewerModule;

var apiKey = "9e02afa0c31ec13b1caa1d0788f2b56808449878";

$(document).ready(function() {
  getRepos = function(){
    $.get('https://api.github.com/users/alandenison?access_token=' + apiKey).then(function(response){
      console.log(response.followers);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };
  getRepos();
});
