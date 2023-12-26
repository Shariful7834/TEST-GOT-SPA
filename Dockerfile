# Use an official Node.js runtime as a parent image
FROM node:21.2.0-alpine as build_image

# Set the working directory to /app
WORKDIR /app/react-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 5173

#Finally build our project
RUN npm run build


FROM node:21.2.0-alpine as PRODUCTIOIN_IMAGE
WORKDIR /app/react-app
COPY --from=build_image /app/react-app/dist/ /app/react-app/dist/
EXPOSE 5173
#to run npm commands as : npm run preview,
#we need pakage.json and package-lock.json
COPY package*.json ./
COPY vite.config.js ./
RUN npm install
EXPOSE 5173
# Run the app when the container launches

CMD ["npm", "run", "preview"]

