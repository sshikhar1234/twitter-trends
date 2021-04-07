# This command tells docker to download the node image taht is readily available on Docker Hub.
# This way we have a container that has node installed on it
FROM node

# Using RUN you can run any linux commands
# Note: These commands will run inside the container not on the host machine
# One dockerfile can have multiple RUN commands
RUN mkdire -p /home/app

# This is the only command that runs on the host machine
# This basically tells docker to copy all the project files from current dir to the dir inside the container
COPY ./app /home/app

# CMD executes the entry point linux command
# Similar to saying 'node server/index.js' on command line 
# One dockerfile can have only one CMD command
CMD [ "node", "/home/app/server/index.js" ]