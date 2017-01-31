# api ecommerce

microservice application ecommerce

## HOW TO RUN ?

    cp .env-DIST .env
    vim .env (set MONGODB_HOST=mongodbhost)
    npm install
    NODE_ENV=production node app.js

## USE DOCKER ?

    docker-compose up -d
    docker exec -it ecommerce bash
    npm install
    pm2 restart all

# note

    if you using docker u can run with cluster mode and monit the application with pm2 monit

# HOW TO RUN TEST ?

    just enter mocha


## COVERAGE

    npm i -g  http-server
    http-server ./artifacts/coverage/lcov-report/ -p 9090

This will start http-server. Just open http://localhost:9090.