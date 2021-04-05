# twitter-trends

A lightweight react app that fetches current trending topics based on the location provided
This app uses Twitter API to fetch relevant trend details in a geographic area as selected by the user.

Backend: Node JS servers as the local backend and fetches json data from Twitter API and exposes it as local api to the react front end.
Frontend: React components render the data received from node.

Pipeline:

Jenkins-lts image running on Docker container that checks out the project and runs the build and builds deployable tar file of the project.

Features completed:

1. Create React front end
2. Create a local node js backend
3. Connect node js backend with twitter api and fetch relevant data
4. Create and expose the node API with Express framework that will serve as local endpoint for frontend to grab incoming data
5. Consume node's api in React Component
6. Render the incoming data
7. Output data on App.js
8. Add dropdown list and dynamic selection support
9. Setup Dockarized jenkins pipeline that checks out the project and builds project into deployable tar file payload.

Coming soon:

1. Make it beautiful!
2. Work on deploying the app with Dockerfile
