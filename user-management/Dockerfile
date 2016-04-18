FROM mhart/alpine-node:5

ADD bin code/bin
ADD public code/public
ADD routes code/routes
ADD views code/views

ADD *.js *.json code/

WORKDIR /code

RUN npm install

EXPOSE 3000

CMD npm start
