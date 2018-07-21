import React, { Component } from 'react';
import { Image, Thumbnail } from 'react-bootstrap';

export default class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let item = this.props.item;
        return (
            <div>
                <Thumbnail src={ item.productImage } alt="171x180" responsive="true" />
                <h3> Product Title: { item.productTitle }  </h3>
                <p> Price: { item.price } </p>
                <p> Purchase date: { item.purchaseDate } </p>
                <p> Return date: { item.returnDate } </p>
                <p> Category { item.type } </p>
                <p> Category { item.productLink } </p>
            </div>
        )
    }
}