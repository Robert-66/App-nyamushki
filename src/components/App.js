import React, {Component} from 'react';
import './App.css';
import ProductList from './ProductList'
import products from './productsDB'
import '../index.css';
class App extends Component {
    render() {
        return (
        <React.Fragment>
            <h1 className="visually-hidden">Кошачий корм «Нямушки»</h1>
            <section className="products">
                <div className="container">
                    <h2 className="products__title">Ты сегодня покормил кота?</h2>
                    <ProductList products={products} />
                </div>
            </section>
        </React.Fragment>
        );
    }
}

export default App;
