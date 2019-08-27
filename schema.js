const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    users(id: ID): users
    post(id: ID): Post
  }

  type users {
    id: ID
    name: String!
    email: String!
    password: String!
  }

  type Post {
    id: ID
    name: String!
    type: String!
    description: String!
    rating: Int!
  }
`);

module.exports = {
  schema,
};
