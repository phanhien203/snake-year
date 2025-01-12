FROM node:22.13.0 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build:snake-year-admin

FROM nginx:alpine

COPY --from=build /app/dist/apps/snake-year-admin /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
