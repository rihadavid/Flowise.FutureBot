#!/bin/bash

# Rebuild and start the containers
docker-compose up -d --build

# Clean up
docker system prune -f -a

# Exit
exit 0
