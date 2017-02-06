FROM node:boron
RUN mkdir -p /usr/src/jogaBonito
WORKDIR /usr/src/jogaBonito
COPY package.json /usr/src/jogaBonito/
RUN npm install
COPY . /usr/src/jogaBonito
EXPOSE 8080
CMD [ "npm", "start" ]