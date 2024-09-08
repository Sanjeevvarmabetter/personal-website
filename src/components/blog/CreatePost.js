import React, { useState } from "react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CreatePostPage({ onPostCreated }) {
    const [newPost, setNewPost] = useState({ title: '', content: '', tags: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPost({ ...newPost, [name]: value });
    };

    const handleContentChange = (event, editor) => {
        const data = editor.getData();
        setNewPost({ ...newPost, content: data });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://blog-api-rho-two.vercel.app/api/blogposts', newPost)
            .then(response => {
                onPostCreated(response.data);
                setNewPost({ title: '', content: '', tags: '' });
            })
            .catch(error => console.error('There was an error', error));
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
                
                {/* CKEditor component */}
                <CKEditor
                    editor={ClassicEditor}
                    data={newPost.content}
                    onChange={handleContentChange}
                    config={{
                        toolbar: ['heading', '|', 'bold', 'italic', 'fontColor', 'fontBackgroundColor', '|', 'undo', 'redo'],
                        fontColor: {
                            colors: [
                                {
                                    color: '#ffffff',
                                    label: 'White'
                                },
                                {
                                    color: '#000000',
                                    label: 'Black'
                                },
                                // Add other colors as needed
                            ]
                        }
                    }}
                />
                
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
