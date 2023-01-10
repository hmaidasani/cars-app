

Cars App PERN Stack Dockerized
--------------------
Fullstack dockerized Cars app that allows searching and viewing a cars database

What's included
--------------------
- Fully dockerized application (docker-compose starts app services)
- Node.js express server
- React front-end
- Postgres database

Getting Started
--------------------
#### Dependencies
- Docker
- Docker Compose

#### Installation instructions
Step to run application:
`docker-compose up`
This will build and start the following services as docker containers:
- postgresdb
- carsapp-client
- carsapp-server

The server can be accessed at `localhost:8000` and the client at `localhost:3000`

### Next steps
- Error handling and display of errors on client
- testing on frontend and backend (unit, function, system, ui, e2e)
- As data grows, Table pagination
- As data grows, search on the backend since postgres faster
- Add modals should have select options of existing companies or brands
- Add modals success should refresh table
- Full CRUD on backend and frontend
- Graphql maybe