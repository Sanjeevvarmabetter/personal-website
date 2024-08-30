import axios from 'axios';
import { useEffect, useState } from 'react';

function BlogPosts() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '', tags: '' });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });

    useEffect(() => {
        axios.get('https://blog-api-rho-two.vercel.app/api/blog')
            .then(response => setPosts(response.data))
            .catch(error => console.error('There was an error ', error));
    }, []);

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const { username, password } = loginInfo;
        
        if (username === 'admin' && password === 'password123') { 
            setIsAuthenticated(true);
        } else {
            alert('Invalid username or password');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPost({ ...newPost, [name]: value });
    };

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://blog-api-rho-two.vercel.app/api/blogposts', newPost)
            .then(response => {
                setPosts([...posts, response.data]);
                setNewPost({ title: '', content: '', tags: '' });
            })
            .catch(error => console.error('There was an error creating a new post', error));
    };

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
                    </li>
                ))}
            </ul>

            {isAuthenticated ? (
                <>
                    <h2>Create a New Post</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={newPost.title}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="content"
                            placeholder="Content"
                            value={newPost.content}
                            onChange={handleInputChange}
                        ></textarea>
                        <input
                            type="text"
                            name="tags"
                            placeholder="Tags (comma-separated)"
                            value={newPost.tags}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Create Post</button>
                    </form>
                </>
            ) : (
                <>
                    <h2>Login to Create a New Post</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={loginInfo.username}
                            onChange={handleLoginChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginInfo.password}
                            onChange={handleLoginChange}
                        />
                        <button type="submit">Login</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default BlogPosts;
