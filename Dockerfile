# base image
FROM node:12.16.2 as builder
# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json /app/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app/

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
#FROM nginx:1.15.8-alpine
#COPY --from=builder /app/dist/angular-framework/ /usr/share/nginx/html
