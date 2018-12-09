import React, { Component } from 'react';
import './style.css';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onSelected: false,
            onMouseEnter: false
        };

        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    render() {
        const { isActive, textTopDefault, textTopSelectedHover, name, taste, portionNumber, portionText, presentNumber, presentText, massNumber, massMeasure, textAdd, textCallSelected } = this.props.product;
        let textCall = null;

        if (!isActive) {
            textCall = <span className="product__call">{`Печалька, ${taste} закончился`}</span>;
        } else if (this.state.onSelected) {
            textCall = <span className="product__call">{textCallSelected}</span>
        } else {
            textCall = <span className="product__call">Чего сидишь? Порадуй котэ, <span className="product__call-link-wrap"><button className="product__call-link"
                                                                                                                               href="#" onClick={this.onClick}>купи</button>.</span></span>;
        }

        return (
            <div className={`product${this.state.onSelected ? ' product_selected' : ''}${!isActive ? ' product_disabled' : ''}${this.state.onMouseEnter ? ' product_hover' : ''}`}>
                <div className="product__desc-wrap" onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <div className="product__desc">
                        <span className="product__text-top text-gray">{this.state.onMouseEnter ? textTopSelectedHover : textTopDefault}</span>
                        <span className="product__name">{name}</span>
                        <span className="product__taste">{taste}</span>
                        <span className="product__portion text-gray">
                            <span className="product__portion-number font-weight-bold">{portionNumber}</span> <span className="product__portion-text">{portionText}</span>
                        </span>
                        <span className="product__present text-gray">
                            <span className="product__present-number font-weight-bold">{presentNumber}</span> <span className="product__present-text">{presentText}</span>
                        </span>
                        <span className="product__text-add text-gray">{textAdd}</span>
                        <div className="product__mass">
                            <span className="product__mass-number">{massNumber}</span>
                            <span className="product__mass-measure">{massMeasure}</span>
                        </div>
                        <div className="product__img"></div>
                    </div>
                </div>
                {textCall}
            </div>
        )
    }

    onClick() {
        if (!this.props.product.isActive) return;

        this.setState({
            onSelected: !this.state.onSelected,
            onMouseEnter: false
        });
    }

    onMouseEnter() {
        if (!this.state.onSelected) return;

        this.setState({
            onMouseEnter: true
        });
    }

    onMouseLeave() {
        if (!this.state.onSelected) return;

        this.setState({
            onMouseEnter: false
        });
    }
}


export default Product