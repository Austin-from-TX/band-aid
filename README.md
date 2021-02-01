# band-aid
BandAid is a unique take on the popular [BandCamp](https://bandcamp.com) web app. BandAid users will be able to login and share audio files that will be available for live streaming by other users. More information will be provided in this wiki throughout project development. 

BandAid is hosted on Heroku at https://band-aid-react.herokuapp.com/  

## Technologies Used

#### Front End

1. [Node.js](https://nodejs.org/)
1. [React](https://reactjs.org/)
1. [Redux](https://redux.js.org/)
1. [Materialize CSS](https://materializecss.com/)

#### MiddleWare

1. [Express-Validator](https://express-validator.github.io/docs/)
1. [JSON Web Token](https://jwt.io/)
1. [AWS S3](https://s3.console.aws.amazon.com/)

#### Back End 

1. [Express JS](https://expressjs.com/)
1. [PostgresQL](https://www.postgresql.org/)
1. [Sequelize](https://sequelize.org/master/)


### Clone Codebase

1. `git clone https://github.com/Austin-from-TX/band-aid.git` to clone this repo to a new directory "band-aid"
1. `cd band-aid` to navigate to the project root
1. `git checkout -b development-<your-name>` to setup a your own branch for development
1. `git push origin development-<your-name>` when your code is ready for merging
1. Create a pull request for your commited changes 

**IMPORTANT**: Do **NOT** do any development work in `main` branch!! Do **NOT** push changes to `main`! Always do your work in a personal branch.  


### NPM and Database Setup

1. `npm i` in project root to install node_modules
1. Create a new database user "bandaid_app" with a password of your choosing; grant CREATEDB to "bandaid_app"
1. Copy `./.env.example` to `./.env` and update with your Postgres user information
1. `npx dotenv sequelize db:create` in project root to create the database with the Postgres user
1. `npm run dev` to check to see if the Postgres connection is successful; should show "running on port... [port]" in your Ubuntu bash

At this point you should be able to use `code .` in bash in the project root to open VS Code.

