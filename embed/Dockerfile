FROM mhart/alpine-node:5

ADD *.js *.json code/

WORKDIR /code

RUN npm install

EXPOSE 5000

CMD node start.js
