import React, { useState, useEffect } from 'react';

function App() {

  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    fetch('/api/posts/')
    .then(r => r.json())
    .then((results) => {
      setPosts(results);
    })
  });

  return (
    <div className="App">
      <h1>Posts</h1>
      { posts && posts.map(post => <p>{post.content}</p>) }
    </div>
  );
}
  
export default App;