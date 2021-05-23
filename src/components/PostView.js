/**
 * Created by Sherlock on 15.05.2021.
 */

import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const PostView = (props) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        console.log(props);
        axios.get("https://jsonplaceholder.typicode.com/posts/" + props.match.params.id)
            .then((res) => {
                setPost(res.data);
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 my-5">
                    <div className="card">
                        <div className="card-header">
                            <h5>{post.title}</h5>
                        </div>
                        <div className="card-body">
                            {post.body} <Link to="/posts">Orqaga</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostView;