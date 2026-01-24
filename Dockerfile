# Use official Node.js image
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package files first (to leverage Docker cache)
COPY package*.json ./

RUN npm install

# Copy source code
COPY . .

# Compile TypeScript -> JavaScript
RUN npm run build

EXPOSE 1222

COPY wait-for-postgres.sh /usr/src/app/
RUN chmod +x wait-for-postgres.sh

# Run migrations, then start the app
CMD ["sh", "-c", "./wait-for-postgres.sh db && node dist/migrations/migrate.js && node dist/main.js"]
