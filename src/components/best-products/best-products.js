import BestProductsItem from "../best-products-item/best-products-item";

import './best-products.scss'

const BestProducts = () => {
    return (
        <section className="best_products">
            <div className="container">
                <h2 className="title title24">Our best</h2>
                <div className="best_products_wrapper">
                    <BestProductsItem 
                        src={'../img/Solimo_coffee.svg'}
                        name={'Solimo Coffee Beans 2 kg'} 
                        alt={'Solimo Coffee'}
                        price={'10.73$'}/>
                    <BestProductsItem
                        src={'./img/Presto_coffee.svg'}
                        name={'Presto Coffee Beans 1 kg'} 
                        alt={'Presto Coffee'}
                        price={'15.99$'}/>
                    <BestProductsItem
                        src={'./img/Aromistico_coffee.svg'}
                        name={'AROMISTICO Coffee 1 kg'} 
                        alt={'AROMISTICO'}
                        price={'6.99$'}/>
                </div>
            </div>
        </section>
    )
}

export default BestProducts;