# twitter-trends
A lightweight react app that fetches current trending topics based on the location provided
This app uses Twitter API to fetch relevant trend details in a geographic area as selected by the user.

Backend: Node JS servers as the local backend and fetches json data from Twitter API and exposes it as local api to the react front end.
Frontend: React components render the data received from node.

Tasks completed: 
1. Create React front end
2. Create a local node js backend
3. Connect node js backend with twitter api and fetch relevant data
4. Create and expose the node API with Express framework that will serve as local endpoint for frontend to grab incoming data
5. Consume node's api in React Component
6. Render the incoming data
7. Output data on App.js
8. Setup Docker image with jenkins
9. Setup jenkins on local machine
10. Implement 'Click and Build' static jenkins job for this project using jenkinsfile script


Currently in Development:
1. Host the web app 


Coming soon:

1. Make end to end CI/CD Pipeline that automatically pushes the new changes in Main branch and pushes it to prod cloud
2. Develop the web app further interms of features and appearance.
  2.1. Implement dynamic user location feature
  2.2. Implement better UI for the web page 
