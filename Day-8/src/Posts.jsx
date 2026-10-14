import { useState, useEffect } from "react";
import { Dashboard } from "./Components/dashboard";

export const Posts = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
   
    
    
    useEffect(() => {
        setLoading(true)
        setError(null)

        async function getData() {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if(!response.ok){
                    throw new Error("Something went wrong!");
                }
                const data = await response.json();
                setPost(data)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false)
            }
        }
        getData();
    }, [])
    if(loading){
    return <h2>Loading...</h2>
    }

    return (
    <div>
        
        {error ? (
            <p style={{ color: "red" }}>Error: {error}</p>
        ) : (
            <div className="posts-container">
                {post.map((post) => (
                    <Dashboard
                        key={post.id}
                        title={post.id}
                        description={post.title}
                    />
                ))}
            </div>
        )}
    </div>
);
}