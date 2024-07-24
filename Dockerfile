# Stage 1: Build the Angular application
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application
RUN npm run build --prod

CMD ["ng", "serve", "--host", "0.0.0.0"]

# # Stage 2: Serve the application with Nginx
# FROM nginx:alpine

# # Copy the built application from the build stage
# COPY --from=build /app/dist/your-angular-app /usr/share/nginx/html

# # Copy custom Nginx configuration if needed
# # COPY nginx.conf /etc/nginx/nginx.conf

# # Expose port 80
# EXPOSE 4200

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]