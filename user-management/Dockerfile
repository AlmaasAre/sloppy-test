FROM node:5

COPY ./. ./code

WORKDIR code

RUN npm install

ENTRYPOINT ["npm", "start"]
