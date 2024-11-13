export default function BlogPostPage({ params }) { // params is an object with the dynamic route parameters. It's set by NextJS
    return (
        <main>
            {/* params.slug is the dynamic route parameter. 
            Need to protect against SQL injection if we're using the value in a database query */}
            <h1>Blog Post: {params.slug}</h1>
        </main>
    );
}
