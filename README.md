

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

### Next steps/Decisions for Front-end
- Error handling and display of errors on client
- Testing (unit, function, system, ui, e2e)
- As data grows, Table pagination
- Add modals should have select options of existing companies or brands
- State management
- Full CRUD Functionality
- Debouncing/Throttling to optimize
- Cacheing
- Session storage, local storage, cookies 
- If data is huge, add react virtualized to handle huge table and possibly web workers for filtering in the background:
    - https://github.com/bvaughn/react-virtualized
    - https://github.com/israelss/simple-web-worker

### Next steps/Decisions for Backend-end
- Testing (unit, function, system, ui, e2e)
- As data grows, we can analyze user behavior and requirements to optimize backend and database:
    - Currently Relational Postgres was used since the data is relational and to allow querying based on different tables (Car, Brand, Company) and quick joining of data on the backend with the strength of Postgres especially if the data becomes complex and the user requires heavy data processing and querying. Future approaches could require both relational and NoSQL based databases based on requirements. Many products, use both for particular uses.
    - Another approach could be NoSQL based if querying is always on the top level on only one Collection e.g the Cars and is not too complex like querying based on if certain values meet a particular condition. So a when a Company is created, a Company object will be created in the Companies collection. When a Brand is being created on the client, the client will be shown the available Companies queried from the Companies collection and when the Brand is created, it will have a nested Company object in the Brands collection. Finally, when a Car is being created it will finally have a nested Brand which will have a nested Company. And this final structure can be sent to client.

### Next steps/Decisions
- Data processing on backend vs frontend decisions:
    - If heavy transformations are required we have to analyze user device types and see if they are low-power or have enough processing powers 
    - How much sensitive data is present so then more on the backend
    - If the data will be reduced significantly then on the backend
    - Many decisions will be required on application usage behavior and requirements and team decisions to find suitable approaches