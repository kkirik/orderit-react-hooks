FROM node:12-alpine AS development

RUN npm i -g npm@latest
RUN npm i -g yarn@latest

WORKDIR /react-hooks

COPY package.json yarn.lock /react-hooks/

RUN yarn
COPY . /react-hooks
