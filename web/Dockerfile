FROM mhart/alpine-node:5

ADD *.js *.json code/

WORKDIR /code

RUN npm install

CMD node start.js