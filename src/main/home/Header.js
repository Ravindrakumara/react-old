import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Ebook from '/Users/Ravindrakumara/Desktop/books/src/assert/Ebook.PNG';
import HouseIcon from '@material-ui/icons/House';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
   

    return (
        <nav className="header">
          {/*Logo on the left*/}
            {/*Search Box*/}
            {/*Menu*/}
            <Link to="/contact">
                <img src={Ebook} className="header__logo"/>
            </Link>

            <div className="header__search">
                <FindInPageIcon className="button_cat" ></FindInPageIcon> 
                <form action="" method="POST">
                <input type="text" placeholder="Search . . ." className="header__searchInput" />
                </form>
                <SearchIcon className="button_search">Search</SearchIcon > 
            
            </div>
            {/* header section */}

            <div className="hearder__nav">{/* navigation */}
                    <Link to ="/" className="header__link">
                        
                    <div className="header__option">
                            
                        <HouseIcon className="home_icon">
                            <span className="header__option1">Home</span>
                         </HouseIcon>  
                        </div>
                    </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <LocalLibraryIcon className="loli" ></LocalLibraryIcon>
                        <span className="header__option2">தமிழ்</span>
                        
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <LocalLibraryIcon className="loli" ></LocalLibraryIcon>
                        <span className="header__option2">සිංහල</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <LocalLibraryIcon className="loli" ></LocalLibraryIcon>
                        <span className="header__option2">English</span>
                    </div>
                </Link>
                
                <Link to="/Footer" className="header__link">
                    <div className="header__option">
                        <LocalPhoneIcon className="Lolphone"></LocalPhoneIcon>
                    </div>
                </Link>
            </div>{/* navigation */}


        </nav>
    )
}

export default Header
