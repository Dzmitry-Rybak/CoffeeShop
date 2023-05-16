
import './product-card.scss'

const ProductCard = ({name, src, alt, price, country}) => {
    return (
        <div className="product">
            <img src={src} alt={alt} />
            <div className="product_name">{name}</div>
            <div className="product_country">{country}</div>
            <div className="product_price">{price}</div>
        </div>
    )
}

export default ProductCard;