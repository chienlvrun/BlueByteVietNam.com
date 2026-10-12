# Build: Astro → static files
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Domain (hreflang/canonical) bake lúc build: test vs production
ARG SITE_URL=https://bluebytevietnam.com
ENV SITE_URL=$SITE_URL
RUN npm run build

# Serve: nginx static
FROM nginx:1.27-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
