import React, { useState, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import './Nav.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './images/fresh_LOGO_black.svg';
import CartCountContext from '../ben/cart_count/CartCountContext';

function Nav() {
    const { cartList, setCartList } = useContext(CartCountContext);
    const [navColor, setNavColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY > 100) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    };

    window.addEventListener('scroll', changeColor);
    //
    const a =
        'nav_active main_logo_active d-none d-md-flex justify-content-between align-items-center';
    //
    const b = ' d-none d-md-flex justify-content-between align-items-center';

    return (
        <>
            <header id="Navbar" className={navColor ? a : b}>
                {/* <Logo className="main_logo" /> */}
                <Link to="/">
                    <Logo
                        className={
                            navColor
                                ? 'main_logo_active main_logo'
                                : 'main_logo'
                        }
                    />
                </Link>

                {/* 選單 */}
                <nav className=" mt-3">
                    <ul className="header_menu d-flex">
                        <Link to="/game">
                            <li>
                                <span
                                    className={
                                        navColor
                                            ? 'menu_items_active menu_items'
                                            : 'menu_items'
                                    }
                                >
                                    每日登入
                                </span>
                            </li>
                        </Link>
                        <Link to="/activity">
                            <li>
                                <span
                                    className={
                                        navColor
                                            ? 'menu_items_active menu_items'
                                            : 'menu_items'
                                    }
                                >
                                    小農活動
                                </span>
                            </li>
                        </Link>
                        <Link to="/product">
                            <li>
                                <span
                                    className={
                                        navColor
                                            ? 'menu_items_active menu_items'
                                            : 'menu_items'
                                    }
                                >
                                    生鮮商品
                                </span>
                            </li>
                        </Link>
                        <Link to="/recipe">
                            <li>
                                <span
                                    className={
                                        navColor
                                            ? 'menu_items_active menu_items'
                                            : 'menu_items'
                                    }
                                >
                                    食譜分享
                                </span>
                            </li>
                        </Link>
                        <Link to="/customized_lunch">
                            <li>
                                <a
                                    href="/#"
                                    className={
                                        navColor
                                            ? 'menu_items_active menu_items'
                                            : 'menu_items'
                                    }
                                >
                                    客製化餐點
                                </a>
                            </li>
                        </Link>
                        <Link to="/comment">
                            <li>
                                <span
                                    href="/#"
                                    className={
                                        navColor
                                            ? 'menu_items_active menu_items'
                                            : 'menu_items'
                                    }
                                >
                                    顧客評論
                                </span>
                            </li>
                        </Link>
                    </ul>
                </nav>
                {/* ICONS */}
                <div className="d-flex px-5">
                    <div
                        className={
                            navColor
                                ? 'nav_icons_active nav_icons d-flex'
                                : 'nav_icons d-flex '
                        }
                    >
                        <Link to="/member">
                            <FaUserCircle size={30} />
                        </Link>
                        <Link to="/cart">
                            <FaShoppingCart
                                size={30}
                                className="mx-1 cursor_pointer"
                            />
                        </Link>

                        <div
                            className={
                                navColor
                                    ? 'cart_number_active cart_number px-3 fs-5'
                                    : 'cart_number px-3 fs-5'
                            }
                        >
                            {cartList.length}
                        </div>
                    </div>
                    {/* <div className="cart_number d-flex justify-content-center align-items-center">
                        <p className="fs-5 pl-4">0</p>
                    </div> */}
                </div>
            </header>

            {/* mobile */}
            <header className="d-flex d-md-none align-items-center ">
                <div className="px-4 navbar_toggle">
                    <AiOutlineMenu size={30} />
                </div>

                <div className="main_logo text-center ">
                    <Logo className="w-75 pl-5" />
                </div>

                {/* 選單 */}
                {/* <nav className=" mt-3">
                    <ul className="header_menu d-flex d-none">
                        <li>
                            <a href="/#">首頁</a>
                        </li>
                        <li>
                            <a href="/#">小農活動</a>
                        </li>
                        <li>
                            <a href="/#">生鮮商品</a>
                        </li>
                        <li>
                            <a href="/#">食譜分享</a>
                        </li>
                        <li>
                            <a href="/#">客製化餐點</a>
                        </li>
                        <li>
                            <a href="/#">顧客評論</a>
                        </li>
                    </ul>
                </nav> */}
                {/* ICONS */}
                <div className="d-flex">
                    <div className="nav_icons d-flex">
                        <FaUserCircle size={30} />
                        <Link to="/cart">
                            <FaShoppingCart
                                size={30}
                                className="mx-0 cursor_pointer"
                            />
                        </Link>

                        <div className="cart_number px-2 fs-10">
                            {cartList.length}
                        </div>
                    </div>
                    {/* <div className="cart_number d-flex justify-content-center align-items-center">
                        <p className="fs-5 pl-4">0</p>
                    </div> */}
                </div>
            </header>
        </>
    );
}

export default Nav;
