# _Github Repository Viewer_


#### _A program that lets you view repositories on github.com_

#### By _**Alan Denison**_

## Description
This program will allow a user enter the username of a GitHub user, and see a display of the names of their repositories.
## Setup/Installation Requirements
You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)

From the command line, clone this repository by typing  
git clone https://github.com/alandenison/github-viewer.git
Install bower and npm from the command line by entering:  
* npm install  
* bower install  

Obtain a Git-Hub API key by following <a href="https://help.github.com/articles/creating-an-access-token-for-command-line-use/">these instructions</a>
Create a file called .env at the top of the project directory, and put your key into the file in this format, including the quotes:
exports.apiKey = "yourkeyhere"
Construct a server by typing into the command line:
* gulp build  
* gulp serve

## Technologies Used

javascript, css, gulp, node
### License
MIT/open source license


Copyright (c) 2016 **_Alan Denison_**
