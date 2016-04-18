FROM mhart/alpine-node:5

ADD *.js *.json **/*.js **/*.json code/

WORKDIR /code

RUN npm install

EXPOSE 3000

ENTRYPOINT ['node', 'start.js']
