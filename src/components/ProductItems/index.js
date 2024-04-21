import { IoHeartSharp } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import {Link} from "react-router-dom"

import './index.css'

const ProductItems = props => {
    const {productItems, onClickLike} = props
    const {id, image, title, category, description, price, rating, isLike} = productItems


    const onClickLikeButton = () => {
        onClickLike(id)
    }

    return (
        <Link to={`/products/${id}`} className='product-main-items-container nav-link'>
            <li className='product-items-container'>
                <div className='product-image-container'>
                    <img src={image} className='product-image' alt='Product'/>
                </div>
                <div className='product-details-container'>
                    <div  className='product-details'>
                        <h4 className='product-title'>{title}</h4>
                        <p className='product-description'>{description}</p>
                    </div>
                    <IoHeartSharp size={20} color={isLike ? 'red' : 'gray'} className='like-icon' onClick={onClickLikeButton}/>
                </div>
                <div className='product-price-and-rating'>
                    <h4 className='product-price'> Rs.{price}</h4>
                    <div className='rating-container'>
                        <GoStarFill size={10} color="white" />
                        <p className='rating'>{rating.rate}</p>
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default ProductItems