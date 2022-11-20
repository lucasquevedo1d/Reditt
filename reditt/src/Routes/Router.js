import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import Post from "../pages/post/Post"
import Signup from "../pages/signup/Signup"
import Feed from "../pages/feed/Feed"

export const Router = () =>{
    return(
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/post/:id" element={<Post/>}/>
        </Routes>
    )
}