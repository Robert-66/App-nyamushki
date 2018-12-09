import React, { Component } from 'react';
import Product from '../Product';
import matchHeight from '../../matchHeight'
import './style.css';

export default class ProductList extends Component {
    componentDidMount() {
        const arrSelector = ['.product__text-top', '.product__name', '.product__taste', '.product__portion', '.product__present', '.product__text-add', '.product__call'];

        matchHeight(arrSelector);

        window.addEventListener('resize', () => {
            matchHeight(arrSelector);
        });

    }

    render() {
        const productElements = this.props.products.map((product, index) =>
            <li
                key = {index}
                className="products__item">
                {<Product product = {product} />}
            </li>
        );
        return (
            <div className="products__wrap">
                <ul className="products__list">
                    {productElements}
                </ul>
            </div>
        )
    }
}