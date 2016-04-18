FROM mhart/alpine-node:5

RUN mkdir -p opt/src

ADD *.js opt/src/

RUN cd opt/src && npm install

EXPOSE 3000

ENTRYPOINT ['node', 'start.js']
