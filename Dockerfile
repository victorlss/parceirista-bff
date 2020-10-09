FROM node:alpine
RUN apk add --no-cache ca-certificates

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app/
RUN npm install

COPY src /app/src
CMD npm run start
