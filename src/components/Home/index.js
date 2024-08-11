import { Component } from "react";
import { LuArrowBigDownDash, LuArrowBigUpDash } from "react-icons/lu";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Header from '../Header';
import Products from '../Products';

import './index.css';

const productCategoriesList = [
    {
        id: 1,
        category: "All",
        categoryPath: "all",
    },
    {
        id: 2,
        category: "Men's",
        categoryPath: "men's%20clothing",
    },
    {
        id: 3,
        category: "Women's",
        categoryPath: "women's%20clothing",
    },
    {
        id: 4,
        category: "Electronics",
        categoryPath: "electronics",
    },
    {
        id: 5,
        category: "Jewelery",
        categoryPath: "jewelery",
    },
];

class Home extends Component {
    state = {
        filterToggle: false,
        activeCategoryPath: 'all',
        productCount: 0,
    };

    onCLickFilterToggle = () => {
        this.setState(prevState => ({ filterToggle: !prevState.filterToggle }));
    };

    onClickCategoryItem = (eachCategory) => {
        this.setState({ activeCategoryPath: eachCategory.categoryPath });
    };

    getProductCount = (count) => {
        this.setState({ productCount: count });
    };

    render() {
        const { filterToggle, activeCategoryPath, productCount } = this.state;

        const isUpArrow = filterToggle
            ? (<LuArrowBigUpDash className="arrow-icons" size={20} />)
            : (<LuArrowBigDownDash className="arrow-icons" size={20} />);

        const isDisplayFilterItems = filterToggle
            ? "filter-items-main-container"
            : "not-display-filter-items-conntainer";

        const isShowFilterText = filterToggle ? 'HIDE FILTER' : 'SHOW FILTER';

        return (
            <div className="home-main-container">
                <Header />
                <div className="home-container">
                    <div className='indicate-nav-container'>
                        <p className='indicate-home-item'>HOME</p>
                        <p className='indicate-shop-item'>SHOP</p>
                    </div>
                    <div className='home-heading-and-description'>
                        <h1 className='home-heading'>DISCOVER OUR PRODUCTS</h1>
                        <p className='home-description'>
                            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementun dolor.
                        </p>
                    </div>

                    <div className="small-device-filters-section-container">
                        <div className="filter-heading-container" onClick={this.onCLickFilterToggle}>
                            <h1 className='filter-heading-button'>FILTER</h1>
                            {isUpArrow}
                        </div>
                        <div className='filter-select-container'>
                            <select className='filter-select'>
                                <option id="Recommended" className='filter-option'>RECOMMENDED</option>
                                <option id="NewestFirst" className='filter-option'>NEWEST FIRST</option>
                                <option id="Popular" className='filter-option'>POPULAR</option>
                                <option id="HighToLow" className='filter-option'>HIGH TO LOW</option>
                                <option id="LowToHigh" className='filter-option'>LOW TO HIGH</option>
                            </select>
                        </div>
                    </div>

                    <div className="large-device-filters-section-container">
                        <div className="filter-section-container">
                            <h1 className='filter-item-count'>{productCount} ITEMS</h1>
                            <div className="showFilter-heading-container">
                                {filterToggle ? (<MdChevronLeft className="arrow-icons" size={23} />) : (<MdChevronRight className="arrow-icons" size={23} />)}
                                <h1 className="showFilter-heading" onClick={this.onCLickFilterToggle}>{isShowFilterText}</h1>
                            </div>
                        </div>
                        <div className='filter-select-container'>
                            <select className='filter-select'>
                                <option id="Recommended" className='filter-option'>RECOMMENDED</option>
                                <option id="NewestFirst" className='filter-option'>NEWEST FIRST</option>
                                <option id="Popular" className='filter-option'>POPULAR</option>
                                <option id="HighToLow" className='filter-option'>HIGH TO LOW</option>
                                <option id="LowToHigh" className='filter-option'>LOW TO HIGH</option>
                            </select>
                        </div>
                    </div>
                    <div className="filter-and-product-section-container">
                        <div className={isDisplayFilterItems}>
                            <ul className="filter-items-container">
                                {productCategoriesList.map(eachCategory => (
                                    <li 
                                        className={activeCategoryPath === eachCategory.categoryPath ? 'active-filter-item' : 'filter-item'} 
                                        key={eachCategory.id} 
                                        onClick={() => this.onClickCategoryItem(eachCategory)}
                                    >
                                        {eachCategory.category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Products 
                            filterToggle={filterToggle} 
                            activeCategoryPath={activeCategoryPath} 
                            getProductCount={this.getProductCount}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
