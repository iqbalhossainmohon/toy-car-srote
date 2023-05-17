
const Blog = () => {
    return (
        <div>
            <h1 className="text-xl font-bold"><span className="text-red-400">Q:-1.</span>  What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p><span className="text-green-400 text-xl font-bold">Ans:-</span> You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.</p>
            <br />

            <h1 className="text-xl font-bold"><span className="text-red-400">Q:-2.</span> Compare SQL and NoSQL databases?</h1>
            <p><span className="text-green-400 text-xl font-bold">Ans:-</span> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <br />

            <h1 className="text-xl font-bold"><span className="text-red-400">Q:-3.</span> What is express js? What is Nest JS?</h1>
            <p><span className="text-green-400 text-xl font-bold">Ans:-</span> NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.</p>
            <br />
            
            <h1 className="text-xl font-bold"><span className="text-red-400">Q:-4.</span> What is MongoDB aggregate and how does it work?</h1>
            <p><span className="text-green-400 text-xl font-bold">Ans:-</span> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            <br />
        </div>
    );
};

export default Blog;