# syntax=docker/dockerfile:1

FROM node:16

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

COPY /src/* /app/

RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]

EXPOSE 3001
