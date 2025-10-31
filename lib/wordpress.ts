import { GraphQLClient } from 'graphql-request';

const graphqlEndpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT || '';

if (!graphqlEndpoint) {
  throw new Error('WORDPRESS_GRAPHQL_ENDPOINT is not set');
}

export const wordpressClient = new GraphQLClient(graphqlEndpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getPosts() {
  const query = `
    query GetPosts {
      posts(first: 10) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  try {
    const data = await wordpressClient.request(query);
    return data.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPages() {
  const query = `
    query GetPages {
      pages(first: 10) {
        nodes {
          id
          title
          slug
          content
        }
      }
    }
  `;

  try {
    const data = await wordpressClient.request(query);
    return data.pages?.nodes || [];
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}
