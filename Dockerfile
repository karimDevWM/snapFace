# Stage 1: Build the Angular application
FROM node:20-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the application with nginx
FROM nginx:alpine

COPY --from=build /app/dist/your-angular-app /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]