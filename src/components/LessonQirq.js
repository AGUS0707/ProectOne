import React, {Component} from 'react';

class LessonQirq extends Component {

    constructor(props) {
        super(props);

        this.state  = {
            users: [
                {
                    name: "Nizom",
                    surname: "Muxammatov",
                    phoneNumber: "+998934366331",
                    email: "nizom702@gmail.com"
                },
                {
                    name: "Abdulaziz",
                    surname: "Azizxo'jayev",
                    phoneNumber: "+998946665544",
                    email: "abulaziz@gmail.com"
                },
                {
                    name: "Palonchi",
                    surname: "Palonchiyev",
                    phoneNumber: "+998999999999",
                    email: "palonchi@gmail.com"
                }
            ],
            products: [],
            selectedIndex: -1
        }
    }


    render() {

        const arrayFunction = () => {
            let numbers = [12, -43, 58, 91, 142, -46];

            // for (let i = 0; i < numbers.length; i++){
            //     console.log(numbers[i]);
            // }

            numbers.forEach((item, index, array) => {
                console.log(item, index, array);

            //     item     ====>    numbers[i]
            //     index    ====>    i
            })

            let mappedNumbers = numbers.map((item, index) => {
                return 1
            })

            console.log(mappedNumbers);

            let filteredNumbers = numbers.filter((item, index) => {
                return item > 0;
            })

            console.log(filteredNumbers);

            let sortedNumber = numbers.sort((item1, item2) => {
                return item1 - item2
            })

            console.log(sortedNumber);

        }

        arrayFunction();

        const addProduct = (event) => {
            event.preventDefault(); // page qayta yuklanmasligi uchun

            let productName = event.target.productName.value;
            let productPrice = event.target.productPrice.value;
            let productColor = event.target.productColor.value;

            event.target.reset();

            let newProduct = {
                name: productName,
                price: productPrice,
                color: productColor
            }

            if (this.state.selectedIndex >= 0){
                this.state.products[this.state.selectedIndex] = newProduct;
            } else {
                this.state.products.push(newProduct);
            }


            this.setState({
                products: this.state.products,
                selectedIndex: -1
            })
        }

        const deleteProduct = (index) => {
            this.state.products.splice(index, 1);
            this.setState({
                products: this.state.products
            })
        }

        const editProduct = (index) => {
            this.setState({
                selectedIndex: index
            });
        }

        return (
            <div>
                <div className="container">
                    <div className="row mt-3">
                        {this.state.users.map((item, index) => {
                            // this.state.users[index]    ======>   item
                            return (
                                <div className="col-4" key={index}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>{item.name} {item.surname}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p>Phone number: <b>{item.phoneNumber}</b></p>
                                            <p>Email: <b>{item.email}</b></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="row mt-3">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={addProduct}>
                                        {/*<input type="text" defaultValue={this.state.products[this.state.selectedIndex] ? this.state.products[this.state.selectedIndex].name : ""} className="form-control" placeholder="Product name" name="productName"/>*/}
                                        <input type="text" defaultValue={this.state.products[this.state.selectedIndex]?.name} className="form-control" placeholder="Product name" name="productName"/>
                                        <input type="number" defaultValue={this.state.products[this.state.selectedIndex]?.price} className="form-control mt-3" placeholder="Product price" name="productPrice"/>
                                        <input type="color" defaultValue={this.state.products[this.state.selectedIndex]?.color} className="form-control mt-3" name="productColor"/>
                                        <button type="submit" className='btn btn-success d-block ml-auto mt-3'>Add</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                {this.state.products.map((item, index) => {
                                    return (
                                        <div className="col-4 mb-3">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5>{item.name}</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p>Price: <b>{item.price}</b></p>
                                                    <p>Color: <b>{item.color}</b></p>
                                                </div>
                                                <div className="card-footer d-flex justify-content-between">
                                                    <button type="button" className="btn btn-primary" onClick={() => {editProduct(index)}}>Edit</button>
                                                    <button type="button" className="btn btn-danger" onClick={() => {deleteProduct(index)}}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default LessonQirq;