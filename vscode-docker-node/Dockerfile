# ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ #
## Dockerfile
# Lightweight node container.
# - Alpine based Node image.
# - Copies both package.json to the container.
# ! Dependent on a work directory argument which must be an absolute path.
# ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ #

FROM node:alpine

ARG WORK_DIRECTORY
WORKDIR ${WORK_DIRECTORY}

COPY package.json ./

RUN npm install

COPY . .
