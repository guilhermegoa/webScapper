# Use the official Node.js image as the base image
FROM node:18-alpine

# Install required dependencies for Chromium
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the JavaScript code into the container
COPY . .

# Command to run the web scraper and processor script
CMD ["node", "./src/main.js"]