### Templates
#### vscode-docker-node
Apline based development setup for Node.
- Expects a .env file

Example:
```zsh
# Docker compose file
COMPOSE_PROJECT_NAME=ProjectName

# Dockerfile
WORK_DIRECTORY=/srv/app

# Node
SERVER_PORT=3000
SERVER_DEBUG_PORT=9229
SERVER_HOST=0.0.0.0
```