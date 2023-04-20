# React_Concepts
**ReactJS ==> is an library. it is just a piece of JS code that facebook engineers has written for us**

#### we can install either using package or using CDN links. 

1. What all files we have to put into .gitignore file ?
   1. **THOSE FILES WHICH ARE AUTO GENERATED**
   2. LIKE ==> node_modules, dist, .parcel-cache, etc.
   3. these files are generating when we execte some command like npm install, npx parcel index.html, etc.


2. Data structure used for storing 
     Call Stack. it is different from memory heap. 

3. Package 
   1. it is an kind of module of js file

4. What is NPM ?
   1. it is an package manager. which is used to manage the packages.
   2. which is used to install the package. yarn is also an package manager.

5. Why we do **npm init** ?
    1.  it is used to create the package.json file.

6. Steps to take npm init ?
   1. npm init --> it will ask the questions & based on the answers it will create the package.json file. 
   2. npm init -y --> it will create the package.json file with default values.

7. What is package.json file ?
   1. it is an file which contains the information about the project.
   2. this is an configuration file which npm need to run the project.
   
8. What is Npm Install ?
   1. it is an command which is used to install the package.
   2. eg: npm install package_name 

9. When we don't want to install the package in production ?
   1. npm install package_name --save-dev
             || 
   2. npm install -d package_name
   
10. What is dependency ?
    1. all the packages that our project need. 

     "dependencies": {
     "parcel": "^2.8.3"
     }
11. What does this ^ means ?
    1. ^ --> this will called as **caret**.
    2. we can use ~ also. 
    3. ^ --> it will install the latest version of the package.
    4. if we use ^ sign then it will install/upgrade the latest version of the package if it is available. this is for minor version. 
       like 1.0.0 --> 1.0.1
    5. if we don't use ^ sign then it will install the exact version of the package which is mentioned in the package.json file.
         like 1.0.0 --> 1.0.0 (it will not install the latest version of the package)
    6. if we use ~ sign then it will install the latest version of the package which is available in the same major version.
       like 1.0.0 --> 2.0.0

12. What is Package-lock.json ?
    1. to know what exact version we use on production, so we use package-lock.json file.
    2. means, in the package-lock.json file we will not see the ^ sign. so we will see the exact version of the package.
    3. sometimes code was working on local but not working on production. because of the version of the package.
       so to avoid this we use package-lock.json file. so that we will know what exact version we use on production.
    4. it is used to lock the version of the package.
    5. package-lock.json should be committed to the git. 

13. When we do npm install with the packagge.json file ?
    1. npm install --> it will install all the packages which are mentioned in the package.json file.

14. What is node_modules ?
    1. it is an folder which contains all the packages which are installed in the project.
    2. means, whenever we installed the package, it will get installed in the node_modules folder.
    3. node module is a kind of database for the npm. 

15. What is NPX ?
    1. npX means its execute the package using npm.

we run this command npx parcel index.html  --1 
   the above command means, **We have to execute parcel with the entry point (index.html)**

15. When we do any change in the file & save the file then parcel will automatically refresh the browser. 
    1. it is called as **Hot Module Replacement**.
    2. it is an feature of parcel.
    3. parcel is using **File Watcher** to watch the file changes. it is build in C++.

16. What is dist ?
    1. it is an folder which contains the minified code, production code.
    2.  when we do "npx parcel index.html" --> then dist will create faster version of the project    
        & serve on the server. that is an development build. it takes more time to build the project. because of node modules.
    3. dist is an development build. 
    4. when we do "npx parcel build index.html" --> then dist will create the production build.
         parcel will put the production build in the dist folder. it takes less time to build the project.
   ==> on the server node modules will not be there. so we have to create the production build. 
       so that we can use the production build on the server. 
    5. dist is also have an production build.
    6. **dist folder is an production build. it's create when we do "npx parcel build index.html"**
     
17. **WHY IS REACT APP FAST** ?
    1. REACT is fast in itself. but React needs lot of packages to make it fast. 
    2. LIKE --> React uses bundler. 

18.  How we can make our app with the older browser compatible ?
      we can use the package called **browserlist**.
         the parcel also gives the support for the browserlist.
            we have to define **browserlist in the package.json file** 
     
 4. Bundlers  
``` 
    Bundlers are used to minify the code, remove the console logs, remove the unused code, etc.
    Webpack & Parcel --> they are also an bundler. 
                         Parcel --> it is an package. inside it, there are lot of sub packages. which helps to do the bundling.
                                       those sub packages are installed in the node_modules folder. so node module is responsible for the bundling.
                                       In Package-lock.json file we will see the dependencies of the parcel. & transitive dependencies of the parcel.
                                    it is bundling the code 
                                    it is also minifying the code. like removing the console logs, removing the unused code, etc.
                                    it manages the production build & development build.
                                    it is doing image optimization   
                                    it is doing caching while development build.  
                                       means, there is an folder called .parcel-cache. so while doing "dev build or production build" then it will create the cache in the .parcel-cache folder. so it will use the cache which is already created. so that it will save the time.  
                                    it is doing hot module replacement.
                                    it is doing file watcher.
                                    it is doing compression of the code.
                                    it is "compatible with older browsers".
                                    it gives the https support while development build.
                                       like ==> npx parcel index.html --https
                                       means, by default we have to use the http. but if we want to use the https then we have to use the above command. sometimes some of the api's are not working with the http. so we have to use the https.
                                    it is also manage the PORT number.
                                       like ==> npx parcel index.html --port 3000
                                       means, by default parcel will use the port number 1234. but if we want to use the port number 3000 then we have to use the above command.

                        Web-pack --> it need some configuration to do the bundling. 

                        web app --> includes React APP, Parchel as an bundler, Parcel has its own sub packages, package.json, package-lock.json ==> node_modules folder ... etc. these make the react app fast. 
```

### **if we have package-lock.json file then we can regenerate the node_modules folder**
**react & react-dom are the packages which are used to create the react application.**
**WE  have to put the .parcel-cache folder in the .gitignore file.**
**PARCEL IS AN ZERO-CONFIG BUNDLER**
**When we already have the package.json file then we can use the npm install command to install the packages so we will get the package-lock.json file.**

### Behind The Scene 1
   previously we was using cdn links to use the react library. so if there is new version of the react library then we have to change the cdn link. so we switch to use the install react library using npm.
      when we do npm install react then it will install the react library in the node_modules folder. & put the dependency in the package.json file. we can use the react library in production. (while pushing the code on production server there we have package-lock.json file. so we can regenerate the node_modules folder. so that we can use the react library in production.)
         but without doing type="module" in the script tag we can't use the react & react-dom in the code. because the browser doesn't understand the import & export syntax. so we have to use the type="module" in the script tag. so that the browser will get to know that App.js is now become an module. 

### Behind The Scene 2 ==> we have created own_create_react_app without doing create-react-app command.
      read ==> README.md file
   1. we have react library in the node_modules folder. so we can use the react library in production.
   2. we have to use the type="module" in the script tag. so that the browser will get to know that App.js is now become an module.
         we use the import & export syntax in the App.js file. (because we defined the app.js file as an module.)
   3. we have parcel as an bundler. so we can bundle the code. so that we can use it in production.
   4. we have package.json file. so we can install the packages which are required for the project.
   5. we have package-lock.json file. so we can regenerate the node_modules folder. so that we can use the react library in production.
   6. we have .gitignore file. so we can ignore the node_modules folder. so that we can push the code on the git.
   7. we have .parcel-cache folder. so we can use the cache which is already created. so that it will save the time.
   8. we have dist folder. so we can create the production build. so that we can use it in production.

   ... etc. these make an small create react app. There is some more thing which we will build in future. 


