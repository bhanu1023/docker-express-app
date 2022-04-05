FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

ARG NODE_ENV
RUN if [ "NODE_ENV" = "developement" ]; \
    then npm install && mv node_modules ../; \
    else npm install --production --silent && mv node_modules ../; \
    fi
# RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 4000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "index.js"]
