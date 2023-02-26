# syntax=docker/dockerfile:1

FROM node:latest AS node_base

###RUN echo "NODE Version:" && node --version
###RUN echo "NPM Version:" && npm --version


FROM php:5.6-apache

COPY --from=node_base / /

### OTHER CODE GOES HERE

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]

EXPOSE 8080