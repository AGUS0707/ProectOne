import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            son: 15
        }

    }


    render() {


        const incrementNumber = () => {

            this.setState({
                son: this.state.son + 1
            })

        }

        const decrementNumber = () => {
            this.setState({
                son: this.state.son - 1
            })
        }

        const changeInput = (event) => {
            console.log(event.target.value);

            this.setState({
                son: parseInt(event.target.value)
            })
        }

        return (
            <div className="card">
                <div className="card-body">
                    <h1 className="my-3 text-center">{this.state.son}</h1>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <button type="button" className="btn btn-success" onClick={incrementNumber}>+</button>

                    <input type="range" value={this.state.son} max={500} min={50} className="shadow-none form-control p-0" onChange={changeInput}/>

                    <button type="button" className="btn btn-danger" onClick={decrementNumber}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;