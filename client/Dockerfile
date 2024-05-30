# Base image
FROM node:18.16.1

# Set the working directory
WORKDIR /app

# Copy the client code
COPY . /app

# Install dependencies and build the client
RUN npm install
RUN npm run build

# Install serve
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Run the client
CMD ["serve", "-s", "build"]
