# syntax=docker/dockerfile:1

FROM node:16

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

COPY /src/* /app/src/

RUN npm install

CMD [ "node", "index.js" ]

EXPOSE 8080
