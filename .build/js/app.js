(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "9e02afa0c31ec13b1caa1d0788f2b56808449878";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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
 viewer.find(user);

});

},{"./../js/viewer.js":2}]},{},[3]);
