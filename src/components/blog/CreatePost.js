import React from "react";
import { useState } from "react";

import axios from "axios";


function CreatePostPage({ onPostCreated}) {
    const [newPost,setNewPost] = useState({title:'',content:'',tags:''});;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPost({ ...setNewPost,[name]:value});
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://blog-api-rho-two.vercel.app/api/blogposts', newPost)
            .then(response=>{
                onPostCreated(response.data);
                setNewPost({ title:'',content:'',tags:''});

            })
            .catch(error=> console.error('there was an error',error));
    };



    return (
        <div>
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
        </div>
    );
}

export default CreatePostPage;