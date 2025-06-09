# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src


COPY package*.json ./

RUN npm install -g ts-node typescript


RUN npm install

COPY . .

RUN npm run build

EXPOSE 1222


CMD ["sh", "-c", "ts-node migrations/migrate.ts && node dist/main.js"]


