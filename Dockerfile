FROM node:alpine
WORKDIR /user/src/App
COPY  docker.js ./
COPY . .
EXPOSE 8080
CMD [ "node","docker.js" ]