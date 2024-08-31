import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BlogPosts() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://blog-api-rho-two.vercel.app/api/blogposts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('There was an error fetching posts', error));
    }, []);

    const handleLogin = () => {
        navigate('/login');
    };

    const handlePostClick = (postId) => {
        navigate(`/blogposts/${postId}`);
    };

    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Blog Posts</h1>
                {/* <button onClick={handleLogin}>
                    {isAuthenticated ? 'Create Post' : 'Login'}
                </button> */}
            </header>
            <ul>
                {posts.map(post => (
                    <li key={post._id} onClick={() => handlePostClick(post._id)} style={{ cursor: 'pointer' }}>
                        <h2>{post.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogPosts;
