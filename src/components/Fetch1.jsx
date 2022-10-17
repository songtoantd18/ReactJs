import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const tabs = ["posts", "comments", "albums"];
const Fetch1 = () => {
  const [type, setType] = useState("post");
  const [posts, setPosts] = useState([]);
  console.log("posts:", posts);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => {
        return (
          <button
            key={tab}
            style={
              type === tab
                ? {
                    color: "#00ff00",
                    backgroundColor: "#333",
                  }
                : {}
            }
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        );
      })}

      <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch1;
