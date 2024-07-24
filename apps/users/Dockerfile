# First Stage: Build the microservice
FROM node:20.5.1-alpine AS builder

# Work Directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the whole repository
COPY . .

# Build the user service
RUN npx nx build users

# Second Stage: Serve the microservice
FROM node:20.5.1-alpine

# Work Directory
WORKDIR /app

# Copy the build output and node_modules from the builder stage
COPY --from=builder /app/dist/apps/users ./dist/apps/users
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# pm-2 runtime will be needed to start the application
RUN npm install -g pm2@latest

# express
RUN npm install express

# Copy the build output from the previous stage
COPY --from=builder /app/dist/apps/users ./dist/apps/users

ENTRYPOINT ["pm2-runtime", "./dist/apps/users"]