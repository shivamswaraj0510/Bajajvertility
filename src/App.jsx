import React, { useEffect, useState } from "react";
import { client } from "./lib/sanity";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "post"]{ title }`;
        const data = await client.fetch(query);

        console.log("✅ Sanity data fetched:", data); // ✅ Log the result
        setPosts(data);
      } catch (error) {
        console.error("❌ Sanity fetch error:", error); // ❌ Log any error
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Sanity Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default App;
