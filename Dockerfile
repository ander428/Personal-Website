FROM node:8.14.0

# Prepare app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

# Install dependencies
COPY package.json /usr/src/app/
RUN npm install --silent

ADD . /usr/src/app/

CMD [ "npm", "start" ]