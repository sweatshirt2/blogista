/*
    basic types:
        int, float, string, boolean
        ID - serialized strings
*/

export const typeDefs = `#graphql
    type Author {
        id: ID
        name: String
        blogs: [Blog!]
    }

    type Blog {
        id: ID!
        title: String
        author: Author
        content: String
        reviews: [Review!]
    }

    type Review {
        id: ID
        rating: Float
        content: String
        blog: Blog
    }

    type Query {
        author(id: ID!): Author
        authors: [Author]
        blog(id: ID!): Blog
        blogs: [Blog]
        review(id: ID!): Review
        reviews: [Review]
    }
    type Mutation {
        addBlog(blog: AddBlogInput!): Blog
        deleteBlog(id: ID!): [Blog]
        updateBlog(id: ID, update: UpdateBlogInput): Blog! 
        
    }
    input AddBlogInput {
        content: String!
        author: ID!
        title: String
    }
    input UpdateBlogInput {
        content: String
        title: String
    }
`
