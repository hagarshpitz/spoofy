# Hafifa-Postgraphile

Hi there, it seems you are learning GraphQL, Congrats! 🎉🎉🎉
This repo is here for you! this is a very simple postgraphile service for your graphql queries 🖥🖥

## Prequesties

* Node v12.14
* Postgres server
* Git :) 
  
  ## Setup
* write ```npm install``` in the terminal and wait for the magic to happen
* create .env file and write the following variables inside (see in .env-sample):
1) CONNECTION_STRING = 'connection string to the DB'
2) SCHEMA = 'the schema in the DB you want to query'
3) PORT = 'the port that the service will run on'
   
   ## Usage
   
   After setup you write ```npm start``` in the terminal and wait for server to start (don't you worry, it will write a message 😁).
   Then, on the browser navigate to http://localhost:PORT/graphiql and you'll see the beloved grahiql. http://localhost:PORT/graphql
   is the url that is used for the graphql API.
   Good luck and don't fuck it up!
   