const express = require('express');
const expressGraphQL = require('express-graphql');
const { schema } = require('./schema');

const app = express();
const port = 4000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`App running on part ${port}.`);
});