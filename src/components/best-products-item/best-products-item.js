import './best-products-item.scss'

const BestProductsItem = ({src, alt, name, price}) => {
    return (
        <div className="best_product">
            <img src={src} alt={alt} />
            <div className="best_product_name">{name}</div>
            <div className="best_product_price">{price}</div>
        </div>
    )
}

export default BestProductsItem;