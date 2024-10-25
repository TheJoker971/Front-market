import { ChangeEvent } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { config } from 'dotenv';
import imgProduct from "../../img-product.avif" ;

export default function Home() {
    return(
        <div id="home">
            <header>
                <h1>Welcome on my website</h1>
            </header>
            <div id="home-container">
                <div id="filter-container">
                    <div id="filter-block">
                        <header>
                            <h2>Filters</h2>
                        </header>
                        <ul>
                            <li><a>Test1</a></li>
                            <li><a>Test2</a></li>
                            <li><a>Test3</a></li>
                        </ul>
                    </div>
                </div>
                <div id="products-container">
                    <a href="/product/01" className='product'>
                        <header>
                            <img src={imgProduct} alt='img-product'/>
                        </header>
                        <p className='price-product'>10$</p>
                        <p className='name-product'>Pack de gel douche</p>
                        <p className='description-product'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </a>
                    <a href="/product/02" className='product'>
                        <header>
                            <img src={imgProduct} alt='img-product'/>
                        </header>
                        <p className='price-product'>10$</p>
                        <p className='name-product'>Pack de gel douche</p>
                        <p className='description-product'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </a>
                    <a href="/product/03" className='product'>
                        <header>
                            <img src={imgProduct} alt='img-product'/>
                        </header>
                        <p className='price-product'>10$</p>
                        <p className='name-product'>Pack de gel douche</p>
                        <p className='description-product'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </a>
                    <a href="/product/04" className='product'>
                        <header>
                            <img src={imgProduct} alt='img-product'/>
                        </header>
                        <p className='price-product'>10$</p>
                        <p className='name-product'>Pack de gel douche</p>
                        <p className='description-product'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </a>
                    <a href="/product/05" className='product'>
                        <header>
                            <img src={imgProduct} alt='img-product'/>
                        </header>
                        <p className='price-product'>10$</p>
                        <p className='name-product'>Pack de gel douche</p>
                        <p className='description-product'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </a>
                    
                </div>
            </div>
        </div>
    );
}