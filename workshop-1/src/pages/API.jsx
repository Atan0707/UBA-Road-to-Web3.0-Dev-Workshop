import React, { useState, useEffect } from 'react';

function ApiDemo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
        console.log("Fetching posts...");
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <p className="text-2xl text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">API Demo - Learning APIs in React</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">What's happening here?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We use <code className="bg-slate-800 px-1 rounded">useState</code> to manage our data, loading, and error states</li>
            <li>We use <code className="bg-slate-800 px-1 rounded">useEffect</code> to fetch data when component mounts</li>
            <li>We fetch data from JSONPlaceholder API using <code className="bg-slate-800 px-1 rounded">fetch</code></li>
            <li>We handle loading and error states for better UX</li>
          </ul>
        </div>

        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="bg-slate-800 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-300">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApiDemo;