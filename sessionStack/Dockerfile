FROM node:lts-alpine3.14

# Create app directory
RUN mkdir -p /src
WORKDIR /src

# Install dependencies
COPY package.json /src
RUN npm install

# Push in app source
COPY . /src

CMD [ "npm", "start" ]