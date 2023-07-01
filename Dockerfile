FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm i

# Bundle app source
COPY . .

# Bind PORT
EXPOSE 3000

CMD ["npm", "start"]