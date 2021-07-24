FROM node:14-alpine
RUN mkdir  -p /src
WORKDIR /src

#install dep
COPY package.json /src/
RUN npm install

EXPOSE 5000

#copy src
COPY . .
CMD ["npm", "start"]