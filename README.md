# api ecommerce
    microservice application ecommerce

# HOW TO RUN ?
  * copy .env-DIST to .env
  * set mongodb host on .env
  * make sure node js has been installed
  * npm install
  * NODE_ENV=production node app.js
  * use docker ?
    * docker-compose -f docker-compose-devel.yml up (for development)
    * docker-compose -f docker-compose-production.yml up (for production)
    * enter to bash docker exec -it nodejs bash
    * npm install
    * pm2 restart all

# note
  * if you using docker u can run with cluster mode and monit the application with pm2 monit

# HOW TO RUN TES ?
  * just enter mocha