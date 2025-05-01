# Use the Node 18 Alpine base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) into the container
COPY package*.json ./

# Install all dependencies including Vite
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Make sure 'vite' is globally accessible (optional, in case it's needed globally)
RUN npm install -g vite

# Expose the port Vite uses
EXPOSE 5173

# Run the 'dev' script (this will start Vite)
CMD ["npm", "run", "dev"]
