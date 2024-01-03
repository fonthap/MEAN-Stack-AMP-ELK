# MEAN stack example: CRUD with Angular 16

In this tutorial, I will show you how to build a full-stack (MEAN stack) Angular 16 + Node.js example with a CRUD Application. The back-end server uses Node.js + Express for REST APIs and connects with MongoDB database, front-end side is an Angular App with HTTPClient.

We will build a full-stack Tutorial Application in that:
- Tutorial has id, title, description, published status.
- User can create, retrieve, update, delete Tutorials.
- There is a search box for finding Tutorials by title.

![mean-stack-crud-example-angular-16](/img/mean-stack-crud-example-angular-16.png)

Tutorial link: 

> [MEAN stack with Angular 16 CRUD example](https://www.bezkoder.com/angular-16-node-js-express-mongodb/)

For more detail, please visit:
> [Angular 16 CRUD example with Web API](https://www.bezkoder.com/angular-16-crud-example/)

> [Node.js, Express & MongoDb: Build a CRUD Rest Api example](https://www.bezkoder.com/node-express-mongodb-crud-rest-api/)

> [How to integrate Angular with Node.js Restful Services](https://www.bezkoder.com/integrate-angular-12-node-js/)

Security:
> [Angular 16 + Node.js Express: JWT Authentication and Authorization example](https://www.bezkoder.com/node-js-angular-16-jwt-auth/)

Associations:
> [MongoDB One-to-One relationship tutorial with Mongoose examples](https://www.bezkoder.com/mongoose-one-to-one-relationship-example/)

> [MongoDB One-to-Many Relationship tutorial with Mongoose examples](https://www.bezkoder.com/mongoose-one-to-many-relationship/)

> [MongoDB Many-to-Many Relationship with Mongoose examples](https://www.bezkoder.com/mongodb-many-to-many-mongoose/)

## Project setup

### Node.js Server
```
cd node-js-server
npm install
```
Run `node server.js`

### Angular Client
```
cd angular-16-client
npm install
```
Run `ng serve --port 8081`. Navigate to `http://localhost:8081/`.

### ELK Setup
>docker-compose up

Kibana UI https://localhost:5601

>[APM](https://www.elastic.co/blog/getting-started-with-the-elastic-stack-and-docker-compose-part-2)

![Alt text](/img//image.png)

![Alt text](/img//image-1.png)

![Alt text](/img//image-2.png)

>https://es01:9200

>docker cp es-cluster-es01-1:/usr/share/elasticsearch/config/certs/ca/ca.crt /tmp/.

>openssl x509 -fingerprint -sha256 -noout -in /tmp/ca.crt | awk -F"=" {' print $2 '} | sed s/://g

>cat /tmp/ca.crt

```
ssl:    
    certificate_authorities:
    - |
        -----BEGIN CERTIFICATE-----
        ////change this////
        -----END CERTIFICATE-----
```
![Alt text](/img//image-3.png)