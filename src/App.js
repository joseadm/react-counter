import './style.css';
//https://jsonplaceholder.typicode.com/posts/1/comments
import React, { useEffect, useState } from 'react';

export default function App() {
  const [comments, setComments] = useState([]);

  let fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((res) => res.json())
      .then((json) => {
        console.log(JSON.stringify(json));
        setComments(json);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
}
