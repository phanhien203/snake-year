FROM node:22.13.0 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build:snake-year-portal

FROM nginx:alpine

COPY --from=build /app/dist/apps/snake-year-portal /usr/share/nginx/html

EXPOSE 4300

CMD ["nginx", "-g", "daemon off;"]
