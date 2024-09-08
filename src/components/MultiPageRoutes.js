import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import CreatePostPage from "./blog/CreatePost";
import BlogPosts from "./blog/BlogPosts";
import LoginPage from "./blog/LoginPage";
import BlogPostDetail from "./blog/BlogPostDetail";
import React, { useState } from 'react';
import { Navigate } from "react-router-dom";


import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes() {

    const [posts,setPosts] = useState([]);
    const [isLoggedIn,setisLoggedIn] =  useState(false);



    const handlePostCreated = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const handleLogin = (status) => {
        setisLoggedIn(status);

    }

    const ProtectedRoute = ({children}) => {
        if(!isLoggedIn) {
            return <Navigate to="/login" />
        }
        return children;
    };


    return (
        <Routes>


            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/portfolio'} element={<Portfolio />} />

       
            <Route exact path={'/blog'} element={<BlogPosts />} />
            <Route exact path={'/blogposts/:postId'} element={<BlogPostDetail /> } />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route exact path={'createpost'} element={
                <ProtectedRoute>

         
<CreatePostPage onPostCreated={handlePostCreated} />
                </ProtectedRoute>

            } />

        </Routes>
    )
}