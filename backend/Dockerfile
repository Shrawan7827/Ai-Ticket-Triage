FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --build-from-source

COPY . .

CMD ["npm", "start"]