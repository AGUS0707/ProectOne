/**
 * Created by Sherlock on 08.05.2021.
 */

import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';
import {ToastContainer, toast} from "react-toastify";

import {PacmanLoader} from "react-spinners";

class Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            employees: [],
            deleteOpen: false,
            selectedId: "",
            selectedItem: {},
            isLoading: true,
            saveLoading: false,
            username: ""
        }
    }

    componentDidMount() {
        axios.get("https://nimadir.herokuapp.com/api/employee")
            .then((res2) => {
                console.log(res2);
                this.setState({
                    employees: res2.data.object,
                    isLoading: false
                })
            })
    }


    render() {

        const changeModal = () => {
            this.setState({
                open: !this.state.open
            })
        }

        const changeDeleteModal = (id) => {
            this.setState({
                deleteOpen: !this.state.deleteOpen,
                selectedId: id
            })
        }

        const saveEmployee = (event, errors, values) => {
            console.log(values);
            this.setState({
                saveLoading: true
            })
            if (this.state.selectedItem.id) {
                axios.put("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedItem.id, values)
                    .then((res) => {
                        getEmployee();
                        toast.success(res.data.message);
                        changeModal();
                        this.setState({
                            selectedItem: {}
                        })
                    })
                    .catch((error) => {
                        toast.error("Xatolik!")
                    })
            } else {
                axios.post("https://nimadir.herokuapp.com/api/employee", values)
                    .then((res) => {
                        toast.success(res.data.message);

                        getEmployee();
                        console.log(res);

                        changeModal();

                    })
                    .catch((error) => {
                        toast.error("Xatolik!");
                    })
                    .finally(() => {
                        this.setState({
                            saveLoading: false
                        })
                    })
            }
        }

        const deleteEmployee = () => {
            axios.delete("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedId)
                .then((res) => {
                    getEmployee();
                    changeDeleteModal();
                    toast.success(res.data.message);
                })
                .catch((error) => {
                    toast.error("Xatolik!");
                })
        }

        const getEmployee = () => {
            axios.get("https://nimadir.herokuapp.com/api/employee")
                .then((res2) => {
                    console.log(res2);
                    this.setState({
                        employees: res2.data.object
                    })
                })
        }

        const showEditModal = (item) => {
            this.setState({
                selectedItem: item
            })
            changeModal();
        }

        const changeInput = (e) => {
            this.setState({
                file: e.target.files[0]
            })
        }

        const closeModal = () =>{
            this.setState({
                selectedItem: {},
                open: false
            })
            // changeModal();
        }

        const login = () => {
            localStorage.setItem("username", this.state.username);

            this.props.history.push("/hooks");
        }

        const changeUsername = (event) =>{
            this.setState({
                username: event.target.value
            })
        }

        return (
            <div className="container">

                <input type="text" onChange={changeUsername} name="username" placeholder="Your username" className="form-control my-3"/>
                <button type="button" onClick={login} className="btn btn-success">Login</button>

                {localStorage.getItem("username")}


                {this.state.isLoading ?
                    <div className="loader">
                        <PacmanLoader color="#7dba29" loading={this.state.isLoading}/>
                    </div> : ""
                }

                <div className="row">
                    <div className="col-12">
                        <button type="button" className="btn btn-success my-5" onClick={changeModal}>Add</button>
                    </div>

                    {this.state.employees.map((item, index) => {
                        return (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.firstName} {item.lastName}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Age: <b>{item.age}</b></p>
                                        <p>Salary: <b>{item.salary}</b></p>
                                        <p>Position: <b>{item.position}</b></p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button type="button" className="btn btn-primary"
                                                onClick={() => showEditModal(item)}>Edit
                                        </button>
                                        <button type="button" className="btn btn-danger"
                                                onClick={() => changeDeleteModal(item.id)}>Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <Modal isOpen={this.state.open} toggle={() => {
                    this.setState({
                        selectedItem: {}
                    });
                    changeModal()
                }}>
                    <ModalHeader toggle={changeModal}>Add Employee</ModalHeader>
                    <AvForm onSubmit={saveEmployee} model={this.state.selectedItem}>
                        <ModalBody>

                            <AvField type="text" name="firstName" label="Employee name"/>

                            <AvField type="text" name="lastName" label="Employee surname"/>

                            <AvField type="number" name="age" label="Employee age"/>

                            <AvField type="number" name="salary" label="Employee salary"/>

                            <AvField type="select" name="position" label="Employee position">
                                <option value="Director">Director</option>
                                <option value="Security">Security</option>
                                <option value="Driver">Driver</option>
                                <option value="Programmer">Programmer</option>
                            </AvField>

                            <input type="file" onChange={changeInput}/>
                        </ModalBody>
                        <ModalFooter>
                            <button type="submit" className="btn btn-success" disabled={this.state.saveLoading}>
                                {this.state.saveLoading ?
                                    <span className="spinner-border spinner-border-sm"/> : ""} Save
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>

                <Modal isOpen={this.state.deleteOpen} toggle={changeDeleteModal}>
                    <ModalBody>
                        <h4>Rostdan ham o'chirmoqchimisiz?</h4>
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-danger" onClick={deleteEmployee}>Ha</button>
                        <button type="button" className="btn btn-secondary" onClick={changeDeleteModal}>Yo'q</button>
                    </ModalFooter>
                </Modal>

                <ToastContainer/>



            </div>
        );
    }
}

export default Employee;