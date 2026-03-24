FROM node:18-alpine

WORKDIR /usr/src/app

# Install postgres client for pg_isready
RUN apk add --no-cache postgresql-client

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 1222

COPY wait-for-postgres.sh /usr/src/app/
RUN chmod +x /usr/src/app/wait-for-postgres.sh

CMD ["sh", "-c", "./wait-for-postgres.sh db && node dist/migrations/migrate.js && node dist/src/main.js"]
