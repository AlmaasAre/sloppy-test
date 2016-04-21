FROM mhart/alpine-node:5

COPY ./app/. ./code

WORKDIR code

RUN npm install

CMD ["node", "app.js"]
