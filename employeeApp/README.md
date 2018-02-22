# EmployeeApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Procedure to run the application

## 1. Steps to configure Mongodb Database

    1. Mongodb Environment setup
    2. run Mongo Server, use cmd Mongod
    3. Run Mondo client, use cmd mongo
    4. Taking backup of data.
        1. in bin folder, cmd- mongodump --db empdb
         - That database backup folder created in Dump folder  is created in the bin directory

          2. To restore databse use cmd- mongorestore --db empdb dump
         - dump is path to restore happen

 ## 2.  In the project Folder- Install dependancy cmd- npm install --save express body-parser

 ## 3. Installing dependancy for mongoose.
             cmd- npm install --save mongoose

 ## 4. start Mongo clients and server
           server- use cmd- Mongod
           client- use cmd- mongo

## 5.  Installing Bootstrap       
        - cmd- npm install --save bootstrap@3.3.7

 ## 6. running server : cmd- node server

 ## 7. Building the project: cmd- ng build

 ## 8. Running client project: cmd - ng serve -o  



