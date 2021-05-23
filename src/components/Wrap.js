import React, {Component} from 'react';

import Element from "./Element";
import Counter from "./Counter";

import {Collapse} from "reactstrap";

class Wrap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open:-1
        }
    }


    render() {

        const collapse = (number) => {
            this.setState({
                open: number
            })
        }

        // const collapse = (number) => {
        //     this.setState({
        //         open: !this.state.open
        //     })
        // }

        return (
            <div className="container">
                <div className="row mt-3">

                    <div className="col-4">
                        <Element title="Hello world!" text="fejifjeiwjf emwfkmewlkfmewkm" rasm="/images/img100.jpg"/>
                    </div>
                    <div className="col-4">
                        <Element title="Salom dunyo!" text="femwkf mewklf newjfn ejwknfekwj" rasm="/images/img102.jpg"/>
                    </div>
                    <div className="col-4">
                        <Element title="Привет мир!" text="fmeklw mfklewn jfenwkfjewmk fm" rasm="/images/img103.png"/>
                    </div>
                    <div className="col-4 offset-4 my-3">
                        <Counter/>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header" onClick={() => collapse(0)}>
                                <h5>Lorem ipsum dolor.</h5>
                            </div>
                            <Collapse isOpen={this.state.open  === 0}>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut cumque
                                    dicta distinctio ducimus eum, fuga id nam nemo nisi nostrum numquam officia quasi
                                    quis similique tenetur! Cum, voluptatibus!
                                </div>
                            </Collapse>
                        </div>
                        <div className="card">
                            <div className="card-header" onClick={() => collapse(1)}>
                                <h5>Lorem ipsum dolor.</h5>
                            </div>
                            <Collapse isOpen={this.state.open  === 1}>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut cumque
                                    dicta distinctio ducimus eum, fuga id nam nemo nisi nostrum numquam officia quasi
                                    quis similique tenetur! Cum, voluptatibus!
                                </div>
                            </Collapse>
                        </div>
                        <div className="card">
                            <div className="card-header" onClick={() => collapse(2)}>
                                <h5>Lorem ipsum dolor.</h5>
                            </div>
                            <Collapse isOpen={this.state.open  === 2}>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut cumque
                                    dicta distinctio ducimus eum, fuga id nam nemo nisi nostrum numquam officia quasi
                                    quis similique tenetur! Cum, voluptatibus!
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrap;

// rcc - class component
// rsc - arrow function component
// rsf - function component
// react snippets