import { useState, useEffect } from "react";
import { Dashboard } from "./Components/dashboard";

export const Posts = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchId, setSearchId] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                if (!response.ok) {
                    throw new Error("Something went wrong!");
                }

                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    // Filter posts by ID
    const filteredPosts = post.filter((item) =>
        String(item.id).includes(searchId)
    );

    return (
        <div>
            {error ? (
                <p style={{ color: "red" }}>Error: {error}</p>
            ) : (
                <>
                    <input
                        type="number"
                        placeholder="Search post by ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />

                    <button onClick={() => setSearchId("")}>
                        Clear
                    </button>

                    <div className="posts-container">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((item) => (
                                <Dashboard
                                    key={item.id}
                                    title={item.id}
                                    description={item.title}
                                />
                            ))
                        ) : (
                            <p>No posts found.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};