import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import db from "./database/db.js";

const resolvers = {
    Query: {
        author(_, args) {
            return db.authors.find(author => author.id === args.id);
        },
        authors() {
            return db.authors;
        },
        review(_, args) {
            return db.reviews.find(review => review.id === args.id);
        },
        reviews() {
            return db.reviews;
        },
        blog(_, args) {
            return db.blogs.find(blog => blog.id === args.id);
        },
        blogs() {
            return db.blogs;
        }
    },
    Blog: {
        author(parent){
            return db.authors.find(author => author.id === parent.author);
        },
        reviews(parent) {
            return db.reviews.filter(review => review.blog === parent.id);
        }
    },
    Author: {
        blogs(parent) {
            return db.blogs.filter(blog => blog.author === parent.id);
        }
    },
    Review: {
        blog(parent) {
            return db.blogs.find(blog => blog.id === parent.blog);
        }
    },
    Mutation: {
        addBlog(_, args) {
            let blog = {
                ...args.blog,
                "id": `nbl${Math.floor(Math.random() * 10000)}`
            };
            db.blogs.push(blog);

            return blog;
        },
        deleteBlog(_, args) {
            db.blogs = db.blogs.filter((blog => blog.id !== args.id));
            return db.blogs;
        },
        updateBlog(_, args) {
            db.blogs.map(blog => {
                if (blog.id === args.id) {
                    return {...blog, ...args.edits}
                }
                return blog
            });

        }
    }
}

const PORT = 4000

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: {port: PORT}
});

console.log('server running at port', PORT);
