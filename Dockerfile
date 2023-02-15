FROM node:16.15.1-alpine AS build
WORKDIR /app
COPY . /app

ARG REACT_APP_API_DOMAIN
RUN echo "Using REACT_APP_API_DOMAIN=$REACT_APP_API_DOMAIN ..."

# create .env file
RUN echo "REACT_APP_API_DOMAIN=$REACT_APP_API_DOMAIN" > /app/.env

RUN npm ci
RUN npm run build
# nginx state for serving content
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*

COPY --from=build /app/out ./
COPY react.nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
