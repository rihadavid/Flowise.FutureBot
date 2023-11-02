#!/bin/bash

# Go to the app directory
cd ~/Flowise

# Fetch the latest code
git pull origin master

# Rebuild and start the containers
docker-compose up -d --build

# Clean up
docker system prune -f -a

# Exit
exit 0
