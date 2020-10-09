[![Build Status](https://travis-ci.com/vkalaparthy/2020-Project2.svg?branch=master)](https://travis-ci.com/vkalaparthy/2020-Project2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Huddle
This is an appication that is designed using Express, Handlebars, Sequelize ORM using MySQL database. Users have to be registered and Authenticated using passport. Huddle page is responsive and uses Bootstrap framework.
## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Usage](#usage)
* [Application Demo](#application-demo)
* [Contributing](#contributing)
* [Questions](#questions)
## General Info 
This app is available in GitHub at https://github.com/vkalaparthy/2020-Project2  & is deployed in Heroku at [Heroku Website](https://project2-team8-dmtv.herokuapp.com/).  This app can be customized based of the need.
## Techonologies 
Used NPM Express, Express-Handlebars, Sequelize for app developemnt and bcrypt for password-hashing along with passport for authentication.  Used ESLint to enforce the coding standards with Travis CI.
## Features
This applications need a user registartion.  Registartion needs the complete form to be filled with correct information. Once the user is registerd, he/she can  

Login   
Jabber   
See and Like other people's Jabbers  
Change the user information   
Logout   
Delete themselves  

For Jabber:   
User can post jabbers  
Edit jabbers   
Delete jabbers  
See other user's jabbers  
Like other user's jabbers   
   
* User Interface after Login:  
![userInterface](./public/assets/readmeImg/P2-UI2.JPG)
## Usage
* Clone the repository from https://github.com/vkalaparthy/2020-Project2
* run npm install to install the packages
* Add `.env` file with the following content:  
SEQUELIZE_USER=your_mysql_db_user  
SEQUELIZE_PASSWORD=your_mysql_db_password  
SEQUELIZE_HOST=your_mysql_db_host  
AUTH_SECRET=your_auth_secret_key  
ADMIN_USER_PWD=admin_password  
USER_PWD=user_pwd  
FORCE_SYNC=true_or_false   
TU=mysql_user   
TP=mysql_password  
  
* Run "nodemon serer.js"  
   Note: When running this for the first time, make .env FORCE_SYNC=true, so the seed db entreis are created and then make this false.
  
* DB Schema  
  
  ![dbSchema](./public/assets/readmeImg/P2-DBschema.JPG)
   
  
    
## Application Demo
* Register:  
![register](./public/assets/readmeImg/Project2-Register.gif) 
* Application demo:  
![appDemo](./public/assets/readmeImg/Project2-Jabber-demo.gif)
## License
Copyright © 2020-present, Vani Kalaparthy. Released under the MIT License.  
## Contributing
Below are the Team that worked on this project. 

  [![Contributors Display](https://badges.pufler.dev/contributors/vkalaparthy/2020-Project2?size=50&padding=5&bots=true)](https://badges.pufler.dev)
   
* Vani Kalaparthy
  
   * E-mail: kalaparthy.vani@gmail.com
   * GitHub: https://github.com/vkalaparthy
   * Portfolio: https://vkalaparthy.github.io/
   
* Dianna Mack
  
   * E-mail: dianna.mack@yahoo.com
   * GitHub: https://github.com/dmack095-07
   
* Mark Speer
  
   * E-mail: mark.speer11@gmail.com
   * GitHub: https://github.com/mark-speer
   * Portfolio: https: https://mark-speer.github.io/

* Toks Desalu

   * E-mail: desalu.developer@gmail.com
   * GitHub: https://github.com/desalu
   * Portfolio: https://   
## Tests
Only manual testing
## Questions
 Contact Vani Kalaparthy for any questions:
 * https://github.com/vkalaparthy
 * kalaparthy.vani@gmail.com 
