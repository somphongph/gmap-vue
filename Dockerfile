# develop stage
FROM node:12.18-alpine3.9 as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
RUN npm install @vue/cli@3.7.0 -g
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn build

# production stage
FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]