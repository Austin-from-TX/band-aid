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

### Setting up Backend and Database
1. `cd backend` and run `npm install`
1. Create a new database user "bandaid_app" with a password of your choosing; grant CREATEDB to "bandaid_app
1. Copy `example.env` to `.env` and update with your Postgres user information and a new secret.  Do not worry about the AWS keys for now.
1. **Double check your new `'env` file is contained in your `.gitignore` file**
1. `npx dotenv sequelize db:create`from `backend` root folder to create the database with the Postgres user
1. Run `npm start` to run backend server

### Setting Up Frontend Environment
1. Open second terminal to `cd ./frontend` and run `npm install`
1. Run `npm start`again from `frontend` root to start React server
1. If it does not open automatically, open a new browser window and navigate to `localhost:3000'
1. Project should now be up and running 

### Developing 
1. Open a third terminal from which you can do and commit your work 
1. If not already in VSCode, `cd` back into project root and run `code .` to open the project in your editor
1. `git push origin development-<your-name>` when your code is ready for commiting
1. Create a pull request for your commited changes 

**IMPORTANT**: Do **NOT** do any development work in `main` branch!! Do **NOT** push changes to `main`! Always do your work in a personal branch.  


