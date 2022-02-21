# GlobeTrotter

GlobeTrotter is an app designed to help people and organizations plan their trip. The app is deployed on Heroku for the server and netflify for the client interface. The website link is [here](https://priceless-heisenberg-0c1f50.netlify.app/).

This app has been developed by a team of four people during our fullstack JS training.  

This project has been presented in order to obtain a certificate as a web and web mobile developer (Titre professionnel développeur Web et Web Mobile de niveau 5). My project presentation is available in this [link](https://drive.google.com/file/d/18pH5Zba13CuXeQRS6IdSLRy-O4alGiS1/view?usp=sharing).

## Main features
- Authentication process with access to a personal space
- Email confirmation through sign up process
- Password recovery process with a new password to define (disabled)
- View, create, update or delete a trip
- Invite new travelers to a trip and allow reading rights
- Upload useful documents related to a trip
- Auto-completion using algolia API
- Map display of different places using leaflet API
- Adding hotels, transports and activities to a trip
- Selecting between all the items selected to build final trip itinerary
- Travel budgetting by item (transports, hotels and activities)

## Technologies
- Javascript
- React / Redux / AJAX
- NodesJS / Express
- PostgreSql / Redis 
- Git / Sqitch / Git Project
- Bcrypt / Cors / Sanitize-Html / Node Mailer

## Organization
Based on SCRUM methodoly, our project consisted of four sprints.

### Sprint 1 :
writing the requirements and specifications of the app. This part consisted in defining :
- What kind of users could use the app
- User stories
- Full structure/tree of the website
- Desktop and mobile wireframes
- Which technologies to use
- Website Graphic chart
- The conceptual Data Model

### Sprint 2 :
- Implementing the server
- Writing SQL migration to create the database through postgres
- Creating back and front architecture
- Constructing first Models
- Static interface and first interactions

### Sprint 3 : 
- MVP features
- Implementing REST API
- Middlewares
- Conection to external API
- Conecting front and back 
  
### Sprint 4 : 
- Bug and errors correction
- Code cleaning
- CSS optimization
- Commenting the code
- Deployment on AWS platform

## My contribution
As the Lead Dev Back of this project I have been in charge of:
- Helping in writing and defining project requirements and specs
- Designing server architecture 
- Constructing the Models
- Implementing the API based on REST architecture
- SQL migration to build the database
- Travel Budget Calculation using SQL through views (virtual tables)
- Implementing REDIS for cache management and loading performance (disabled beacause of CORS problem after deployment)
- Login feature
- Continuous test of the API and adaptation according to front developers needs
- Deployment of the project
