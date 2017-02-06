# JogaBonito

## Author

Juan Diego Ocampo García

## Application

This is an application created to manage and organize some matches with other people that maybe we don't know who they are. We just have to log in to the app and choose the time in which we are going to go to the match, and our position. Here we can see who else is going to the match, and we can modify or delete our schedule.

This app was developed in MEAN framework (MongoDB, Express, Angular and Node) with the intention of deploy it in a virtual machine, docker and a PaaS (Platform as a Service).

## Prerequisites

### nodejs

A JavaScript runtime environment. There are a lot of ways to install it, here I put the way I used on Centos 7:
* sudo yum install epel-release.
* sudo yum install nodejs.
* node --version (To check that the installation was succesful).

### npm

It is the package manager for javaScript. To install it on centos 7 you just need to type:
* sudo yum install npm


## Download and installation

It is necesary to open a shell and type "git clone https://github.com/jocamp18/JogaBonito.git" (In this case you should install git) or just downloading it from the github https://github.com/jocamp18/JogaBonito.

All the modules are located in node_modules folder, so there is nothing else to install.

## Execution

To execute the server you have to go to JogaBonito folder (cd JogaBonito) and type:

* node server.js

After this you can type in the web browser localhost:8080 and you will see the app working.

## Development

To develop the application it is necesary to install some modules with npm package manager, so you should type:

* sudo npm install express mongojs body-parser mongoose method-override cookie-parser express-session consolidate ejs --save

With the save flag, packages will appear in our dependencies. There is a file call package.json that says which packages we will need in our development.

Now we have installed tools for the backend, and for the frontend we just need bower (A frontend tool to manager the frontend resources):

* sudo npm install -g bower

With the g flag, we will have access to bower globally on the system.

To use bower we will need two files:

* .bowerrc: Here we will say where to place our files.
* bower.json: It will tell Bower which packages are needed (It is similar to package.json).

After making these files we type "bower install", and we will have all the needed packages in the specified directory.

## Deployment

### Heroku
The app has been deployed on heroku (A cloud platform based on a managed container system). The url is "https://jogabonito-project1.herokuapp.com/".

### Virtual Machine
To deploy the app here, we need to clone the repo into the virtual machine and run the server as I explained before. But first, we have to stop and disable the firewall in the virtual machine, the way to do it on centos 7 is:

* sudo systemctl disable firewalld
* sudo systemctl stop firewalld

Now we can open a web browser in our local machine and type the ip address of the guest Operating System and the port 8080. Example:

http://192.168.1.58:8080/

### Docker
To run the app in docker, we need to create a Dockerfile that is located in the same folder than server.js. After that, we have to run those commands: 

* sudo docker build -t jogabonito .
* sudo docker run -p 8080:8080 -d jogabonito

Now, we can go to http://localhost:8080/ and there it will be executing our app. To stop it, we can use the command:

* sudo docker stop $(sudo docker ps -q -f "name=$1")

## Application Structure

```
.
├── config
│   ├── db.js
├── models
│ 	├── match.js
│   ├── user.js
├── node_modules
├── public
│   ├── css
│   │   ├── style.css
│   ├── js
│   │   ├── controllers
│   │   │   ├── LoginCtrl.js
│   │   │   ├── MainCtrl.js
│   │   │   ├── MatchCtrl.js
│   │   │   ├── MyMatchesCtrl.js
│   │   │   ├── RegisterCtrl.js
│   │   ├── app.js
│   │   ├── appRoutes.js
│   ├── libs
│   ├── views
│   │   ├── home.html
│   │   ├── login.html
│   │   ├── matches.html
│   │   ├── myMatches.html
│   │   ├── register.html
│   ├── index.html
├── routes
│   ├── Match.js
│   ├── User.js
├── README.md
├── bower.json
├── package.json
├── server.js 
```
## Folders

### config
Here will be located the config files that the "server.js" file need to call.

### models
This will be all that is required to create records in our database. 

### node_modules
The dependences that our app need to work without problems.

### public
The frontend part of the app.

### routes
This is used to separate parts of our application in our Node backend.

## Note.

There are some missing validations, like duplicated values in the DB or confirm passwords, this is because it wasn't enough time to do it (One week and a half), but it will be available in the next version.