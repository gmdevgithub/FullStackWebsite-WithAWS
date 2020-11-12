# CSCI467-Team4B

This project uses the MERN stack to develop an ecommerce store with a frontend, backend, and database

***********************************************************************************************************************************************
# How to install express and get backendAWS set up
1: If there is not already a backendAWS folder made , make one and CD into it

2: Run the command *"npm init"* and hit enter a bunch of times

3: Run the command *"npm i express --save"* and this will generate your NODE MODULES for you and PACKAGE JSON

4: You can pretty much follow this video 

[VideoForBackend](https://www.youtube.com/watch?v=kJA9rDX7azM)

# 5: If you're ever majorly confused , in VS code right click, GO TO TYPE DEFINITION and see more. 

6: Install nodemon and run nodemon app.js if you want it to auto update 

7: Run *"npm install mysql"* 


# How to run the servers / issue fixes 
1: make sure you're in your projects main directory and type *git pull* to get the latest branch updates
   Run the command "*npm start*" this should start a dev server that will pop up in your browser.
   Issues: make sure you have the updated branch. If NPM START fails run these commands in order:
***
##   *npm update*
##   *npm install*
##   *npm i -g react-scripts*
##   *npm install*
##   *yarn add react-refresh eslint-config-react-app*

Based on which issue comes up 
***
2: Then open a new terminal and change to the /backend directory 
***
3: Run this command "*nodemon server*" and look for a success message 
***
4: DO NOT CLOSE EITHER server when testing for full functionality 
***
5: TO CLOSE servers simply type the command control + *C*

# NOTE: Tons of issues we had were because we were not in the correct directory OR because of package lock json. Delete the package lock file and then run the command npm install to fix this issue temporarily. The correct way is given here https://stackoverflow.com/questions/44206782/do-i-commit-the-package-lock-json-file-created-by-npm-5 .

## Menu
**Whats the overall picture???**
- What is a overall picture? [overallpicture](#overallpicture)
- Use Case? [UseCaseVideo](https://www.youtube.com/watch?v=zid-MVo7M-E)
  - Use lucidchart to make our use case [UseCaseDiagram](https://app.lucidchart.com/lucidchart/b65a79fa-029c-46a0-8e93-76800fcbe1df/edit?beaconFlowId=C710D205E5EEEBC9&page=.Q4MUjXso07N#?folder_id=home&browser=icon)
- UML sequence diagrams [UMLS](https://www.youtube.com/watch?v=pCK6prSq8aw)


**Full Stack**
- What is a Stack? [Stack](#Stack)
- What is a Framework? [Framework](#Framework)
- What is a FrontEnd? [FrontEnd](#FrontEnd)
- What is a BackEnd? [BackEnd](#BackEnd)


**Git**
- What is git/github? [Git](#Git)
  - What is a README.md [README.md](#README.md)

  


**React**
- What is React? [React](#React)
  - What is JSX? [JSX](#JSX)
- What is NPM? [NPM](#NPM)
  



**MongoDB**
- What is MongoDB? [MongoDB](#MongoDB)
  - What is Express? [Express](#Express)
  - What is Mongoose? [Mongoose](#Mongoose)
  - What is Documents? [Documents](#Documents)



**Node.js**
- What is Node.js? [Node.js](#Node.js)



**Servers, Routers, API**
- What is Server? [Server](#Server)
- What is a Router? [Router](#Router)
- What is Nodemon? [Nodemon](#Nodemon)


**Languages**
- What is Java? [Java](#Java)
- What is JavaScript? [JavaScript](#JavaScript)
- What is JSON ? [JSON](#JSON)





***********************************************************************************************************************************************
 



# overallpicture

[Overallpicture](https://www.mongodb.com/mern-stack)

[Diagram](https://webassets.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png)



# Stack

[BurgerStack](https://www.thesoftwareguild.com/blog/build-your-own-technology-stack/)

[Diagram](https://coggle.it/diagram/V7jWVHrkbbVB-0OZ/t/full-stack-web-developer)


# Framework

[Video](https://www.youtube.com/watch?v=gq4S-ovWVlM)


# FrontEnd

[Front & Backend](https://blog.hyperiondev.com/index.php/2019/04/17/infographic-front-end-vs-back-end-web-development/)
So basically we have a sepereate folder for the frontend. Our front end was created with REACT which is a JS library specifically for user interfaces ( client side ). 

It's broken down like this
- Frontend: 
   - node_modules: These are just different libraries that are used by express/node/react during compile time.
   - public: This is the main page that is rendered by REACT, all other pages/components are rendered through the DOM by "root"
   - src: This is where your "source" files go, the components that control/design the user interface
     - assets: Any "assets" such as pictures, videos , gifs, extr go here 
     - components: Any custom made components/premade go here 
     - css: All css MAIN styling goes here that is not inline 
     - app, index, testing:
       * Index.js will render our main component < App />
       * App.js will route to our other components via a URL link
       * App.test.js will UNIT test our routing component
# IGNORE THE OTHER FILES FOR NOW

# BackEnd

[Front & Backend](https://blog.hyperiondev.com/index.php/2019/04/17/infographic-front-end-vs-back-end-web-development/)



# Git

![How Source controll wokrs](https://livablesoftware.com/wp-content/uploads/2017/11/github-process-english.png)


# README.md

[How a README.md works]( https://www.makeareadme.com/ )




# React

[How React works]( https://www.edureka.co/blog/what-is-react/)



# JSX

![JSX](https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/08/jsx-2.png)


# NPM



  


# MongoDB

![MongoDB](https://pics.rickosborne.org/blog/wp-content/uploads/2010/02/04205536/SQL-to-MongoDB.png)


# Express

![Express](https://binariks.com/wp-content/uploads/2017/11/express-js-840x502.png)


# Mongoose

![Mongoose](https://cdn-media-1.freecodecamp.org/images/0*b5piDNW1dqlkJWKe.)


# Documents

![Doc](https://docs.mongodb.com/manual/_images/crud-annotated-document.bakedsvg.svg)


# Node.js

![Node](https://i.stack.imgur.com/sRU4s.png)




# Server


# Router


# Nodemon



# Java


# JavaScript


# JSON




[BacktoTopofPage](#CSCI467-Team4B)

### Giovanni Moscato 2020
