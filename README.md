# Sample - Node.js API
A sample Node.js API application running with Express, Typescript, TypeORM, and MySQL.

By no means is this a fully-flushed-out API but it is just a starting point to add more functionality such as filtering makers or models by their various properties, add authorization to protect the non-`GET` endpoints, and more.

## Set Up
Requires Docker, yarn or npm, and Node being installed on your system.

After downloading the code, `cd` into the project and run `yarn install` or `npm install` to install all dependencies.

Then, after opening Docker, run `docker-compose up -d` to get the MySQL database up and running.

Finally, run `yarn run dev` to get the API up and running and allow the database tables to be created. Optionally, you can run `yarn run dev:watch` to restart the service upon detecting changes to the source code.

Once up and running, the API can be hit at `http://localhost:3001` with the following endpoints:
* `GET` `/makers`
* `POST` `/makers`
* `PUT` `/makers/:id`
* `DELETE` `/makers/:id`
* `GET` `/models`
* `POST` `/models`
* `PUT` `/models/:id`
* `DELETE` `/models/:id`

Out of the box, there is no data in the database but you can use the examples below to seed some starter data.

## Seed Data
`POST` requests to `/makers`

```
{
   "name": "Tesla",
   "location": "Palo Alto, California, United States"
}
```
```
{
   "name": "Ford",
   "location": "Dearborn, Michigan, United States"
}
```
```
{
   "name": "Toyota",
   "location": "Toyota City, Aichi, Japan"
}
```
```
{
   "name": "Hyundai",
   "location": "Seaol, South Korea"
}
```

`POST` requests to `/models`

```
{
   "makerId": <Tesla ID>,
   "name": "Model S",
   "vehicleClass": "Sedan",
   "engineType": "Battery Electric"
}
```
```
{
   "makerId": <Ford ID>,
   "name": "Fusion",
   "vehicleClass": "Sedan",
   "engineType": "Internal Combustion"
}
```
