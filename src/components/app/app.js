import { Component } from "react";

import AppHead from "../app-head/app-head";
import About from "../about/about";
import BestProducts from "../best-products/best-products";
import Footer from "../footer/footer";
import AboutBeans from "../about-beans/about-beans";
import Search from "../search/search";

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            cardsData: [
                {
                    name: 'AROMISTICO Coffee',
                    country: 'Brazil',
                    price: '6.99$',
                    alt: 'Aromistico',
                    src: './img/Aromistico.svg'
                },
                {
                    name: 'Presto Coffee Beans',
                    country: 'Kenya',
                    price: '4.99$',
                    alt: 'Aromistico',
                    src: './img/Presto_coffee.svg'
                },
                {
                    name: 'AROMISTICO Coffee',
                    country: 'Brazil',
                    price: '6.99$',
                    alt: 'Aromistico',
                    src: './img/Aromistico.svg'
                },
                {
                    name: 'Presto Coffee Beans',
                    country: 'Kenya',
                    price: '6.99$',
                    alt: 'Aromistico',
                    src: './img/Presto_coffee.svg'
                },
                {
                    name: 'AROMISTICO Coffee',
                    country: 'Columbia',
                    price: '6.99$',
                    alt: 'Aromistico',
                    src: './img/Aromistico.svg'
                },
                {
                    name: 'AROMISTICO Coffee',
                    country: 'Brazil',
                    price: '6.99$',
                    alt: 'Aromistico',
                    src: './img/Aromistico.svg'
                },
                {
                    name: 'Solimo Coffee Beans',
                    country: 'Columbia',
                    price: '6.99$',
                    alt: 'Aromistico',
                    src: './img/Solimo_coffee.svg'
                },
            ],
            term: '',
            filter: ''
        }
    }

    filterCoffee = (items, filter) => {
        switch(filter) {
            case 'Brazil':
                return items.filter(item => item.country === filter)
            case 'Kenya':
                return items.filter(item => item.country === filter)
            case 'Columbia':
                return items.filter(item => item.country === filter)
            default:
                return items;
        }
    }
    onFilter = (filter) => {
        this.setState({filter})
    }

    searchCoffee = (items, term) => {
        if(term === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term) > -1
        })
    }
    onSearch = (term) => {
        this.setState({term})
    }

    render () {
        const {cardsData, term, filter} = this.state
        const filterData = this.filterCoffee(this.searchCoffee(cardsData, term), filter)
        
        return (
            <>
                <AppHead/>
                <About/>
                <BestProducts/>
                <AboutBeans/>
                <Search
                cardsData={filterData}
                onSearch={this.onSearch}
                onFilter={this.onFilter}/>
                <Footer/>
            </>
        );
    }
}

export default App;