export const resolvers = {
  Query: {
    articleBySource: (_, { id, source }, { dataSources }) =>
      dataSources[source].getArticle(id, source),

    articlesBySource: (_, { ids, source }, { dataSources }) =>
      dataSources[source].getArticlesByIds(ids)
  }
};

// GraphQL Sandbox
// query getMeAnArticle($id: ID!, $source: String!) {
//   articleBySource(id: $id, source: $source) {
//    ...articleScalarTypes
//   }
// }

// query getMultipleArticlesBySource {
//   articlesBySource(ids:[21168561, 21168365], source:"hackernews") {
//      ...articleScalarTypes
//   }
// }

// fragment articleScalarTypes on Article {
//     id,
//     title,
//     author,
//     url,
//     time,
//     source
// }
