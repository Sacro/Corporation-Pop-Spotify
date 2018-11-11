FROM node:10 as prebuild
USER node
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY --chown=node package.json yarn.lock ./
RUN yarn install
COPY --chown=node . ./

FROM prebuild as build
USER node
WORKDIR /home/node/app
RUN yarn run prestart:prod && yarn install --production

FROM node:10-alpine as deploy
USER node
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY --from=build --chown=node /home/node/app/package.json ./
COPY --from=build --chown=node /home/node/app/dist ./dist
COPY --from=build --chown=node /home/node/app/node_modules ./node_modules
CMD ["node", "dist/main.js"]