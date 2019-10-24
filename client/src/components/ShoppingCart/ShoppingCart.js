import React from "react";
import "./shoppingCart.css"
import API from "../../utils/CartAPI"
import localStorage from "local-storage"
// import { withRouter } from 'react-router-dom'


class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.loadCart = this.loadCart.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.subtotalValue = this.subtotalValue.bind(this);
        this.goBack = this.goBack.bind(this);
        // this.updateProduct = this.updateProduct.bind(this);
        this.state = {
            items: [],
            total: "",
            subtotalValue: "",
        };
    }
    componentDidMount() {
        // this.loadCart();
    };

    goBack() {
        this.props.history.goBack();
    };

    loadCart = () => {
        API.getCart(localStorage.get("UserId"))
            // API.getCart(111)
            .then(res =>
                this.setState({ items: res.data, total: "0" })
            )
            .catch(err => console.log(err));
    };

    deleteItem = id => {
        API.deleteCartItem(id)
            .then(res => this.loadCart())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // if (this.state.title && this.state.author) {
        //   API.saveBook({
        //     title: this.state.title,
        //     author: this.state.author,
        //     synopsis: this.state.synopsis
        //   })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        // }
    };

    subtotalValue = (price, quantity) => {
        return price * quantity
    }


    render() {
        return (
            <div id="cartContainer"className="container">
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th style={{ width: "50%" }}>Product</th>
                            <th style={{ width: "10%" }}>Price</th>
                            <th style={{ width: "8%" }}>Quantity</th>
                            <th style={{ width: "22%" }} className="text-center">Subtotal</th>
                            <th style={{ width: "10%" }}></th>
                        </tr>
                    </thead>

                    {this.state.items
                        ?
                        this.state.items.map(item =>
                            <tbody>
                                <tr>
                                    <td data-th="Product">
                                        <div className="row">
                                            <div className="col-sm-2 hidden-xs"><img src={item.imgs[0]} alt="..." className="img-responsive" /></div>
                                            <div className="col-sm-10">
                                                <h4 className="nomargin">{item.name}</h4>
                                                <p>{item.details}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-th="Price">${item.price}</td>
                                    <td data-th="Quantity">
                                        <input id={`quantity${item._id}`} type="number" className="form-control text-center" value={item.quantity} />
                                    </td>
                                    <td data-th="Subtotal" className="text-center">${this.subtotalValue(item.price, item.quantity)}</td>
                                    <td className="actions" data-th="">
                                        <button onclick={this.updateProduct(item._id)} className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                                        <a onclick={this.deleteItem(item._id)} data-productId={item._id} className="btn btn-danger btn-sm"><i
                                            className="fa fa-trash-o"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        ) :
                        <div>Cart empty</div>}
                    <tfoot>
                        <tr className="visible-xs">
                            <td className="text-center" ><strong>{this.state.total}</strong></td>
                        </tr>
                        <tr>
                            <td><a onClick={this.goBack} className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a>
                            </td>
                            <td colspan="2" className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>${this.state.total}</strong></td>
                            < td > <a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
                        </tr>

                    </tfoot>
                </table>

                <form className="bttn" action="/paysuccess" method="post">
                    <script src="https://checkout.stripe.com/checkout.js" className="stripe-button"
                        data-key="pk_test_wUg2srzfzQ765a55uHxDuozS00je8H7WJi" data-amount={this.state.total2 + "00"} data-name="Unload.com"
                        data-description="Thank you for your order" data-locale="auto" data-currency="usd">
                    </script>
                    <input type="hidden" name="chargeAmount" value={this.state.total} />
                </form>
            </div>
        );
    }
}

export default ShoppingCart;

