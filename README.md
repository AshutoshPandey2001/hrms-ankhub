## Step to Install & Run project

1. Install NodeJs from [NodeJs v14.15.0](https://nodejs.org/download/release/v14.15.0/).
2. Open Terminal
3. Go to your file project
4. Make sure you have installed [Angular CLI](https://github.com/angular/angular-cli) already. If not, please install.
5. Run in terminal: ```npm install```
6. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## GIT & Bitbucket

**Branching model:**

* Master [This is the main branch of Deployment]
* Development [This is the development branch which is base branch for all the developers]

**Step to create new branch:**

* Switch to Development Branch.
* Run in terminal: ```git pull```
* Run in terminal: ```npm install```
* Run in terminal: ```git checkout -b firstname_modulename_yourtask``` [ ex: ```git checkout -b shubham_admin_technologyCRUD```]
* Continue your work and at the time of pull/push select `YES` to upstream branch.

**Step to add your code to GIT:**

* Run in terminal: ```git status``` [if all are in Red, execute next command]
* Run in terminal: ```git add .```
* Run in terminal: ```git status``` [if all are in Green, execute next command]
* Run in terminal: ```git commit -m "Enter your message here"```
* Run in terminal: ```git pull origin Development``` [if no more conflict, execute next command]
* Run in terminal: ```git push```
* Go to the bitbucket and create pull request, make sure left side branch slection is your own branch and right side branch selection should be Development always.

## Development Guidline

* Function and Variable name should always in camelCase before push.
* Remove all console before push.
* Removed extra spaces before push.
* Removed Unused / commented code before push.

## Project Structure

```
HRMS
├── .firebase
├── .github\workflows
├── documentation
├── e2e
├── node_modules
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── components
│   │   │   ├── components.module.ts
│   │   │   ├── common-layout
│   │   │   │   ├── common-layout.component.css
│   │   │   │   ├── common-layout.component.html
│   │   │   │   ├── common-layout.component.spec.ts
│   │   │   │   ├── common-layout.component.ts
│   │   │   │   ├── common-layout.module.ts
│   │   │   │   └── common-layout.routing.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.css
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   └── navbar.component.ts
│   │   │   └── sidebar
│   │   │       ├── sidebar.component.css
│   │   │       ├── sidebar.component.html
│   │   │       ├── sidebar.component.spec.ts
│   │   │       └── sidebar.component.ts
│   │   ├── pages
│   │   │   ├── admin
│   │   │   |   |   └── courses
│   │   │   |   |       ├──courses.component.html
│   │   │   |   |       ├── courses.component.scss
│   │   │   |   |       ├── courses.component.spec.ts
│   │   │   |   |       └── courses.component.ts
│   │   │   │   ├──admin.routing.module.ts
│   │   │   │   ├── admin.component.html
│   │   │   │   ├── admin.component.scss
│   │   │   │   ├── admin.component.spec.ts
│   │   │   │   ├── admin.component.ts
│   │   │   │   └── admin.module.ts
│   │   │   ├── dasboard
│   │   │   │   ├── dasboard.component.css
│   │   │   │   ├── dasboard.component.html
│   │   │   │   ├── dasboard.component.spec.ts
│   │   │   │   └── dasboard.component.
│   │   │   ├── demo
│   │   │   |   └── shubham-demo
│   │   │   |         ├── sdk-alert
│   │   │   |         ├── sdk-button
│   │   │   |         ├── sdk-crud
│   │   │   |         ├── sdk-datepicker
│   │   │   |         ├── sdk-modal
│   │   │   |         ├── sdk-more
│   │   │   |         ├── sdk-spinner
│   │   │   |         └── sdk-toaster
│   │   │   ├── finance
│   │   │   |   |   └── shares
│   │   │   |   |       ├── shares.component.html
│   │   │   |   |       ├── shares.component.scss
│   │   │   |   |       ├── shares.component.spec.ts
│   │   │   |   |       └── shares.component.ts
│   │   │   │   ├── finance.routing.module.ts
│   │   │   │   ├── finance.component.html
│   │   │   │   ├── finance.component.scss
│   │   │   │   ├── finance.component.spec.ts
│   │   │   │   ├── finance.component.ts
│   │   │   │   └── finance.module.ts
│   │   │   ├── human-resources
│   │   │   |   |   └── payslip
│   │   │   |   |       ├── payslip.component.html
│   │   │   |   |       ├── payslip.component.scss
│   │   │   |   |       ├── payslip.component.spec.ts
│   │   │   |   |       └── payslip.component.ts
│   │   │   │   ├── human-resources.routing.module.ts
│   │   │   │   ├── human-resources.component.html
│   │   │   │   ├── human-resources.component.scss
│   │   │   │   ├── human-resources.component.spec.ts
│   │   │   │   ├── human-resources.component.ts
│   │   │   │   └── human-resources.module.ts
│   │   │   ├── sdk
│   │   │   |   |  └── sdk-comp
│   │   │   |   |  |   └── sdk-alert
│   │   │   |   |  |   |    ├── sdk-alert.component.html
│   │   │   |   |  |   |    ├── sdk-alert.component.scss
│   │   │   |   |  |   |    ├── sdk-alert.component.spec.ts
│   │   │   |   |  |   |    └── sdk-alert.component.ts
│   │   │   |   |  |   ├── sdk-button
│   │   │   |   |  |   |    ├── sdk-button.component.html
│   │   │   |   |  |   |    ├── sdk-button.component.scss
│   │   │   |   |  |   |    ├── sdk-button.component.spec.ts
│   │   │   |   |  |   |    └── sdk-button.component.ts
│   │   │   |   |  |   ├── sdk-crud
│   │   │   |   |  |   |    ├── sdk-crud.component.html
│   │   │   |   |  |   |    ├── sdk-crud.component.scss
│   │   │   |   |  |   |    ├── sdk-crud.component.spec.ts
│   │   │   |   |  |   |    └── sdk-crud.component.ts
│   │   │   |   |  |   ├── sdk-datepicker
│   │   │   |   |  |   |    ├── sdk-datepicker.component.html
│   │   │   |   |  |   |    ├── sdk-datepicker.component.scss
│   │   │   |   |  |   |    ├── sdk-datepicker.component.spec.ts
│   │   │   |   |  |   |    └── sdk-datepicker.component.ts
│   │   │   |   |  |   ├── sdk-modal
│   │   │   |   |  |   |    ├── sdk-modal.component.html
│   │   │   |   |  |   |    ├── sdk-modal.component.scss
│   │   │   |   |  |   |    ├── sdk-modal.component.spec.ts
│   │   │   |   |  |   |    └── sdk-modal.component.ts
│   │   │   |   |  |   ├── sdk-more
│   │   │   |   |  |   |    ├── sdk-more.component.html
│   │   │   |   |  |   |    ├── sdk-more.component.scss
│   │   │   |   |  |   |    ├── sdk-more.component.spec.ts
│   │   │   |   |  |   |    └── sdk-more.component.ts
│   │   │   |   |  |   └── sdk-spinner
│   │   │   |   |  |   |    ├── sdk-spinner.component.html
│   │   │   |   |  |   |    ├── sdk-spinner.component.scss
│   │   │   |   |  |   |    ├── sdk-spinner.component.spec.ts
│   │   │   |   |  |   |    └── sdk-spinner.component.ts
│   │   │   |   |  |   ├── sdk-toaster
│   │   │   |   |  |   |    ├── sdk-toaster.component.html
│   │   │   |   |  |   |    ├── sdk-toaster.component.scss
│   │   │   |   |  |   |    ├── sdk-toaster.component.spec.ts
│   │   │   |   |  |   |    └── sdk-toaster.component.ts
│   │   │   |   |  |   ├── sdk-comp.component.html
│   │   │   |   |  |   ├── sdk-comp.component.scss
│   │   │   |   |  |   ├── sdk-comp.component.spec.ts
│   │   │   |   |  |   └── sdk-comp.component.ts
│   │   │   |   |  ├── sdk-icons
│   │   │   |   |  |   ├── sdk-icons.component.html
│   │   │   |   |  |   ├── sdk-icons.component.scss
│   │   │   |   |  |   ├── sdk-icons.component.spec.ts
│   │   │   |   |  |   └── sdk-icons.component.ts
│   │   │   |   |  └── sdk-plugins
│   │   │   |   |       ├── sdk-plugins.component.html
│   │   │   |   |       ├── sdk-plugins.component.scss
│   │   │   |   |       ├── sdk-plugins.component.spec.ts
│   │   │   |   |       └── sdk-plugins.component.ts
│   │   │   │   ├── sdk.routing.module.ts
│   │   │   │   ├── sdk.component.html
│   │   │   │   ├── sdk.component.scss
│   │   │   │   ├── sdk.component.spec.ts
│   │   │   │   ├── sdk.component.ts
│   │   │   │   └── sdk.module.ts
│   │   │   ├── telecaller
│   │   │   |   |   └── candidate-list
│   │   │   |   |       ├── candidate-list.component.html
│   │   │   |   |       ├── candidate-list.component.scss
│   │   │   |   |       ├── candidate-list.component.spec.ts
│   │   │   |   |       └── candidate-list.component.ts
│   │   │   │   ├── telecaller.routing.module.ts
│   │   │   │   ├── telecaller.component.html
│   │   │   │   ├── telecaller.component.scss
│   │   │   │   ├── telecaller.component.spec.ts
│   │   │   │   ├── telecaller.component.ts
│   │   │   │   └── telecaller.module.ts
│   │   │   └── user-profile
│   │   │       ├── user-profile.component.css
│   │   │       ├── user-profile.component.html
│   │   │       ├── user-profile.component.spec.ts
│   │   │       └── user-profile.component.ts
│   │   └── shared
│   │         └── route.interface.ts
│   ├── allModule.module.ts
│   ├── bootstrap.module.ts
│   ├── material.module.ts
│   ├── assets
│   │   ├── img
│   │   |   └── faces
│   │   ├── logo
│   │   ├── scss
│   │   |   ├── core
│   │   |   ├── global.scss
│   │   |   └── material-dashboard.scss
|   |   └── .gitkeep
│   ├── environments
│   │    ├── environment.prod.ts
│   │    └──environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── .firebaserc
├── .gitignore
├── angular.json
├── CHANGELOG.md
├── firebase.json
├── ISSUE_TEMPLATE.md
├── karma.conf.js
├── LICENSE.md
├── package-lock.json
├── package.json
├── protractor.conf.js
├── README.md
├── tsconfig.json
└── tslint.json

```