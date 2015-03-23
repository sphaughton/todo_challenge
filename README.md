To-Do List
=========

Makers Academy Week 7 weekend challenge to build a To-Do list as a mini front-end application using acceptance and unit tests.

####Set-Up

- Run `bower install`
- Run `npm install`

####Completed Development

- Focused on the MVP features of the application and considered what was essential (that the app is a page which can display text input in a list format and store those entries, and that entries are removable) and what was not (user log-ins/authentication).
- Decided to unit test my application with karma, something I was recently familiar with. Planned to use Protractor for end-to-end testing as I had not used it previously.
- Chose to use AngularJS for development.
- Installed all dependency files using bower and npm.
- Updated `.gitignore` file.
- Created a basic first test, and the HTML necessary.
- Wrote initial code to pass a first and second test to display the basic form and page on initialisation.

####Issues

I have encountered a few issues with moving forward. Currently a task entry will display a tickable button, but no text on the page. The app's test to successfully add a task is also failing to locate my `allTasks` variable in the controller spec. Conceptually I don't feel I am grasping how to integrate and use Travis CI. I am also having problems with installing Protractor in my terminal that are unresolved. I was previously recieving a lot of `Parse Error` notifications within my Karma tests and even after research I am also unclear on what this really means (although mine were largely syntax-related).

####Planned Future Development

- [ ] Continue testing and adding core features using Karma for unit testing and Protractor for end-to-end.
- [ ] Repeat this process until basic functionality is complete.
- [ ] Create boilerplate CSS with Bootstrap and edit to my preference.
- [ ] Deploy app using Heroku

####Technologies Used
- Javascript
- HTML5
- CSS3
- jQuery
- AngularJS
- Bower
- NPM
- Karma
