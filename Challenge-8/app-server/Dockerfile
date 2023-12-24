FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig.json ./

COPY . .

RUN npm ci

RUN npx tsc -p .

EXPOSE 8000

CMD ["node", "dist/server.js"]