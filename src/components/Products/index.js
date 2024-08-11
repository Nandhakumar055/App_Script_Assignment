import { Component } from "react";
import { ThreeCircles } from 'react-loader-spinner';
import './index.css';
import ProductItems from '../ProductItems';

class Products extends Component {
    state = {
        productList: [],
        isLoadingScreen: false,
    };

    componentDidMount() {
        this.fetchGetProducts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeCategoryPath !== this.props.activeCategoryPath) {
            this.fetchGetProducts();
        }
    }

    fetchGetProducts = async () => {
        this.setState({ isLoadingScreen: true });

        const { activeCategoryPath, getProductCount } = this.props;

        const getProductApi = activeCategoryPath === "all" 
            ? 'https://fakestoreapi.com/products/' 
            : `https://fakestoreapi.com/products/category/${activeCategoryPath}`;

        const response = await fetch(getProductApi);
        const productsData = await response.json();

        const updateProductsData = productsData.map(eachProduct => ({
            category: eachProduct.category,
            description: eachProduct.description,
            id: eachProduct.id,
            image: eachProduct.image,
            price: eachProduct.price,
            rating: eachProduct.rating,
            title: eachProduct.title,
            isLike: false,
        }));

        this.setState({
            productList: updateProductsData,
            isLoadingScreen: false,
        });

        // Call the callback function to update the product count in the parent component
        getProductCount(updateProductsData.length);
    };

    onClickLike = (id) => {
        this.setState(prevState => ({
            productList: prevState.productList.map(eachProduct =>
                eachProduct.id === id 
                    ? { ...eachProduct, isLike: !eachProduct.isLike } 
                    : eachProduct
            ),
        }));
    };

    render() {
        const { isLoadingScreen, productList } = this.state;
        const { filterToggle } = this.props;

        return (
            <>
                {isLoadingScreen ? (
                    <div className="Loading-screen-container">
                        <ThreeCircles color="rgb(139, 31, 153)" height="70" width="70" />
                    </div>
                ) : (
                    <div className="product-section-container">
                        <ul className="product-main-container">
                            {productList.map(eachProduct => (
                                <ProductItems 
                                    key={eachProduct.id} 
                                    productItems={eachProduct} 
                                    onClickLike={this.onClickLike} 
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

export default Products;
