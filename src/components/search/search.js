import { Component } from "react";
import ProductCard from "../product-card/product-card";

import './search.scss'

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            filter: ''
        }
    }

    onSearch = (e) => {
        const term = e.target.value;
        this.setState(() => ({
            term: term,
        }));
        this.props.onSearch(term.toLowerCase())
    }

    onFilter = (filter) => {
        this.setState(() => ({
            filter: filter,
        }));
        this.props.onFilter(filter);
    }

    render(){
        const {cardsData} = this.props  
        const { filter } = this.state;  
        const cards = cardsData.map((item,i) => {
            return (
                <ProductCard
                    key={i}
                    name={item.name}
                    country={item.country}
                    price={item.price}
                    alt={item.alt}
                    src={item.src}
                />
            )
        })
        return (
            <section className="search">
                <div className="container">
                    <div className="search__wrapper">
                        <div className="search__wrapper-looking">
                            <div className="search__descr">
                                Looking for
                            </div>
                            <input 
                                type="text" 
                                className="search__input" 
                                placeholder="start typing here..." 
                                value={this.state.term}
                                onChange={this.onSearch}/>
                        </div>
                        <div className="search__wrapper-filter">
                            <div className="search__descr">
                                Or filter
                            </div>
                            <div className="search__buttons">
                                <button 
                                    className={`search__buttons-item ${filter === 'Brazil' ? 'active' : ''}`}
                                    onClick={() => this.onFilter('Brazil')}>Brazil</button>
                                <button 
                                    className={`search__buttons-item ${filter === 'Kenya' ? 'active' : ''}`}
                                    onClick={() => this.onFilter('Kenya')}>Kenya</button>
                                <button 
                                    className={`search__buttons-item ${filter === 'Columbia' ? 'active' : ''}`}
                                    onClick={() => this.onFilter('Columbia')}>Columbia</button>
                                <button 
                                    className={`search__buttons-item ${filter === '' ? 'active' : ''}`}
                                    onClick={() => this.onFilter('')}>All</button>
                            </div>                     
                        </div>
                    </div>
                    <div className="cards__wrapper">
                        {cards}
                    </div>                            
                </div>
            </section>
        )
    }

}

export default Search;