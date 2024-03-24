FROM node:18-alpine as dev
# add the missing shared libraries from alpine base image
RUN apk add --no-cache libc6-compat
# Create app folder
WORKDIR /app

COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy source code into app folder
COPY . .

# Generate build
RUN npm run build

CMD ["npm", "run", "start:dev"]