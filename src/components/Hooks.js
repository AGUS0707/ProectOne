/**
 * Created by Sherlock on 15.05.2021.
 */

import React, {useState, useEffect} from 'react';
import axios from "axios";
import {PacmanLoader} from "react-spinners";

const Hooks = () => {
    // const number = useState(0);
    // console.log(number);

    // number[0]
    // number[1](23);

    // arrayni destruktizatsiya qilish
    const [number, setNumber] = useState(0);
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    // componentDidMount + componentDidUpdate
    useEffect(() => {


        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
                setIsLoading(false);
            })
    }, []);
    // []    ===>  componentDidMount bo'lib ishlashi uchun


    // const son = number[0];
    // const setSon = number[1];

    const incrementNumber = () => {
        // number[1](number[0] + 1);
        setNumber(number + 1);
    }



    return (
        <div className="container">


            {isLoading ?
                <div className="loader">
                    <PacmanLoader loading={isLoading} color="#7dba29"/>
                </div> : ""
            }

            <div className="row">
                <div className="col-4 offset-4 my-5">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center">{number}</h3>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button type="button" className="btn btn-success" onClick={incrementNumber}>+</button>
                            <button type="button" className="btn btn-danger">-</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {users.map((item ,index) => {
                    return (
                        <div className="col-4 mt-3">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{item.name}</h5>
                                </div>
                                <div className="card-body">
                                    <p>Phone number: <a href={"tel:" + item.phone}>{item.phone}</a></p>
                                    <p>Website: <a href={"https://" + item.website}>{item.website}</a></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Hooks;