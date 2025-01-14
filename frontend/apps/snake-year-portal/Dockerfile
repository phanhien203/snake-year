FROM node:22.13.0 AS build

WORKDIR /frontend

COPY . .
RUN npm install
RUN npm run build:snake-year-portal

FROM --platform=linux/amd64 nginxinc/nginx-unprivileged:1.27-alpine-slim

COPY --chown=101 --from=build /frontend/dist/apps/snake-year-portal /app
COPY apps/snake-year-portal/start-nginx.sh /app-nginx/start-nginx.sh
COPY apps/snake-year-portal/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

WORKDIR /app
ENTRYPOINT ["sh", "/app-nginx/start-nginx.sh"]
