FROM mhart/alpine-node:5

ADD *.js *.json code/

WORKDIR /code

EXPOSE 5000

RUN npm install

CMD node start.js
