import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogPostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://blog-api-rho-two.vercel.app/api/blogposts/${postId}`)
            .then(response => {
                console.log(response.data); 
                setPost(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch data', error);
                setPost(null);  
            });
    }, [postId]);

    if (!post) {
        return <p>Loading ...</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p><strong>Tags:</strong> {post.tags ? post.tags.join(', ') : 'No tags available'}</p>
        </div>
    );
}

export default BlogPostDetail;
