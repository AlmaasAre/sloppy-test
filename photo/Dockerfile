FROM mhart/alpine-node:5

RUN mkdir -p opt/src

ADD *.js opt/src/

RUN cd opt/src && npm install

ENTRYPOINT ['node', 'start.js']