# Use an official Node.js runtime as a parent image
FROM node:21.2.0

# Make the /app directory
RUN mkdir -p /app

# Set the working directory to /app
WORKDIR /app

# Clear the node_modules directory
RUN rm -rf node_modules

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 5173

# Start the application
CMD ["npm", "start"]
