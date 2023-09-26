FROM node:18-alpine

USER root

RUN apk add --no-cache git
RUN apk add --no-cache python3 py3-pip make g++
# needed for pdfjs-dist
RUN apk add --no-cache build-base cairo-dev pango-dev

# Install Chromium
RUN apk add --no-cache chromium

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN npm install -g husky

# Create and change to working directory
WORKDIR /data

# Install flowise locally in /data
RUN npm install git+https://github.com/rihadavid/Flowise.FutureBot.git

# Command to execute
CMD ["/data/node_modules/.bin/flowise"]
