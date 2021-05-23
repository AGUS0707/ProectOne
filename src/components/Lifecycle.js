/**
 * Created by Sherlock on 08.05.2021.
 */

import React, {Component} from 'react';

import axios from "axios";

class Lifecycle extends Component {

    // constructor - component yaratilayotganda ishlaydi
    constructor(props) {
        super(props);
        console.log("This is constructor method");

        this.state = {
            posts: [],
            photos: []
        }
    }

    //componentDidMount - component sahifaga chiqib bo'lgandan keyin ishlaydi
    componentDidMount() {
        console.log("This is componentDidMount method");

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);

                this.setState({
                    posts: res.data
                })


                axios.get("https://jsonplaceholder.typicode.com/photos?_limit=100")
                    .then((res2) => {
                        this.setState({
                            photos: res2.data
                        })
                    })

            })



    }

    // componentWillUnmount - component sahifadan o'chib ketayotganda ishlaydi
    componentWillUnmount() {
        console.log("This is componentWillUnmount method");
    }

    // componentDidUpdate - component da o'zgarish bo'lgandan keyin ishlaydi
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("This is componentDidUpdate method");
    }

    // componentDidCatch - component da xatolik bo'lganda ishlaydi
    componentDidCatch(error, errorInfo) {
        console.log("This is componentDidCatch  method");
    }

    // render - component sahifaga chiqayotganda ishlaydi
    render() {
        console.log("This is render method");
        return (
            <div className="container">
                <div className="row">
                    {this.state.posts.map((item, index) => {
                        // item  =====> this.state.posts[index]
                        return (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className="card-body">
                                        <img src={this.state.photos[index]?.url} className="w-100" alt=""/>
                                        {item.body}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Lifecycle;