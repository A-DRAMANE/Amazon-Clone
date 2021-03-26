import React from 'react'
import "../css/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {useStateValue} from "../StateProvider"

function Header() {

    const [{basket},dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>

            <div className="header__search">
                <input className="header__searchInput"
                type="text"/>
                <SearchIcon className="header__searchIcon"/>
                <div className="header__nav">

                    <Link to="/logInPage">
                        <div className="header__option">
                            <span className="header__optionLineOne">Hello</span>
                            <span className="header__optionLinetwo">SignIn</span>
                        </div>
                    </Link>

                    <div className="header__option">
                            <span className="header__optionLineOne">returns</span>
                            <span className="header__optionLinetwo">&Order</span>
                    </div>

                    <div className="header__option">
                            <span className="header__optionLineOne">your</span>
                            <span className="header__optionLinetwo">Prime</span>
                    </div>

                    <Link to='/checkout'>
                        <div className="header__optionBasket">
                            <ShoppingBasket/>
                            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Header
