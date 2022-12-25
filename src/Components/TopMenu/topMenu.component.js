import React, {Component} from 'react';
import Logo from "../../assets/Logo.png";
import classnames from "classnames";
import "./topMenu.scss";

class TopMenuComponent extends Component {

    state = {
        isMenuOpen: false
    }

    menuData = [
        {
            name: 'Home',
            id: 'home',
        },
        {
            name: 'Services',
            id: 'services',
        },
        {
            name: 'About Us',
            id: 'aboutUs',
        },
        {
            name: 'Testimonials',
            id: 'testimonials',
        },
        {
            name: 'Gallery',
            id: 'gallery',
        },
        {
            name: 'FAQ',
            id: 'faq',
        },
        {
            name: 'Partners',
            id: 'partners',
        },
    ];


    jdUrl = "https://www.justdial.com/Mahabubnagar/Sree-Devi-Chandra-Ent-Hospital-Opposite-Panchvati-Restaurant-Behind-Sanskriti-Shopping-Mall-New-Town/9999P8545-8545-110126224229-X5K5_BZDET";
    locationUrl = "https://goo.gl/maps/wXKrHwgLzmvg74cF6";

    handleIconClick = (url) => {
        window.open(url, '_blank').focus();
    }

    handleMenuItemClick = (id) => {
        console.log(id);

        const yOffset = -106;
        const element = document.getElementById(id);
        const y = element.offsetTop;
        const ele = document.getElementById('app-container');
        ele.scrollTop = y + yOffset;
        // document.getElementById('app-container').scrollTo({top: y, behavior: 'smooth'});


    }

    handleToggleMenu = () => {
        this.setState(prevState => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
        this.handleMenuItemClick('home');
    }

    render() {
        const { activeMenuItem, isMobileView  } = this.props;
        const { isMenuOpen } = this.state;


        if (isMobileView) {

            return (

                <>
                    <div className="top-menu-container">
    
                        <div className="top-menu-wrapper">
                            {/* <div className="hospital-main-logo">
                                <img src={Logo}/>
                            </div> */}
    
                            <div className="all-menu-container">
                                <div className="top-menu-helper">
                                    <div className="top-menu-left">
                                        <div
                                            className="just-dail"
                                            onClick={() => this.handleIconClick(this.jdUrl)}
                                        >
                                            Jd
                                        </div>
                                        <div className="number">
                                            <i className="material-icons-outlined">phone_in_talk</i>
                                            9848421036
                                        </div>
                                    </div>
                                    <div className="top-menu-right" onClick={() => this.handleIconClick(this.locationUrl)}>
                                        <i className="material-icons-outlined">location_on</i>
                                        Mahabubnagar
                                    </div>
                                </div>
    
                                <div className="top-menu">
                                    <div className="hospital-title-wrapper">
                                        
                                        <div className="menu-logo" onClick={this.handleToggleMenu}>
                                            <span class="material-icons-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                                        </div>
                                            
                                        <div className="hospital-logo">
                                                Sri Devichandra Hospital
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isMenuOpen && (
                                <div className="menu-open-container">

                                    <div className="menu-items-wrapper">
                                        {this.menuData.map(menuDataItem => (
                                            <div
                                                key={menuDataItem.id}
                                                className={classnames('menu-item', {'active': activeMenuItem === menuDataItem.id})}
                                                onClick={() => this.handleMenuItemClick(menuDataItem.id)}
                                            >
                                                {menuDataItem.name}
                                            </div>
                                        ))}
                                    </div>
                                    
                                </div>
                    )}


                </>
    
            );

        }
        return (

            <>


                <div className="top-menu-container">

                    <div className="top-menu-wrapper">
                        <div className="hospital-main-logo">
                            <img src={Logo}/>
                        </div>

                        <div className="all-menu-container">
                            <div className="top-menu-helper">
                                <div className="top-menu-left">
                                    <div
                                        className="just-dail"
                                        onClick={() => this.handleIconClick(this.jdUrl)}
                                    >
                                        Jd
                                    </div>
                                    <div className="number">
                                        <i className="material-icons-outlined">phone_in_talk</i>
                                        9848421036
                                    </div>
                                </div>
                                <div className="top-menu-right" onClick={() => this.handleIconClick(this.locationUrl)}>
                                    <i className="material-icons-outlined">location_on</i>
                                    Mahabubnagar
                                </div>
                            </div>

                            <div className="top-menu">
                                <div className="hospital-title-wrapper">
             
                                    <div className="hospital-logo">
                                         Sri Devichandra Hospital
                                    </div>
                                </div>

                                <div className="menu-items-wrapper">
                                    {this.menuData.map(menuDataItem => (
                                        <div
                                            key={menuDataItem.id}
                                            className={classnames('menu-item', {'active': activeMenuItem === menuDataItem.id})}
                                            onClick={() => this.handleMenuItemClick(menuDataItem.id)}
                                        >
                                            {menuDataItem.name}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>




                </div>
            </>

        );
    }
}

export default TopMenuComponent;
