import React, {Component, useState} from 'react';
import "./home.scss";
import TopMenuComponent from "../TopMenu/topMenu.component";
import IntroductoryImagesComponent from "../IntroductoryImages/IntroductoryImages.component";
import GeneralInformationComponent from "../GeneralInformation/GeneralInformation.component";
import HospitalInformationComponent from "../HospitalInformation/hospitalInformation.component";
import SeparatorComponent from "../separator/separator.component";
import MedicalServicesComponent from "../MedicalServices/medicalServices.component";
import AboutDoctorComponent from "../AboutDoctor/aboutDoctor.component";
import ClientTestimonialsComponent from "../ClientTestimonials/ClientTestimonials.component";
import HospitalStatsComponent from "../HospitalStats/hospitalStats.component";
import GalleryComponent from "../Gallery/gallery.component";
import FaqComponent from "../Faq/Faq.component";
import LocationComponent from "../Location/location.component";
import PartnersComponent from "../Partners/partners.component";
import debounce from "../../utils/common-utils";



const HomeComponent = () => {

    const servicesRef = React.useRef();
    const homeRef = React.useRef();
    const menuItem = [servicesRef];

    const menuIds = ['home', 'services', 'aboutUs', 'testimonials', 'gallery', 'faq'];

    const [activeMenuItem, setActiveMenuItem] = useState(menuIds[0]);

    const handleScroll = (event, menuItem) => {
        const availableHeight = event.target.clientHeight;
        const currentScroll = event.target.scrollTop;
        const availableScrollHeight = event.target.scrollHeight;
        const headerHeight = 106;

        menuIds.some(menuId => {
            const element = document.getElementById(menuId);
            const rect = element.getBoundingClientRect();
            // console.log(rect);
            const itemHeight = rect.height;
            const itemOffsetTop = element.offsetTop;
            // console.log('menuId', menuId, 'currentScroll', currentScroll, 'headerHeight', headerHeight, 'itemOffsetTop', itemOffsetTop, 'itemHeight', itemHeight);
            if (currentScroll + headerHeight >= itemOffsetTop && currentScroll + headerHeight < itemOffsetTop + itemHeight) {
                if (menuId === 'location') {
                    setActiveMenuItem('partners');
                } else {
                    setActiveMenuItem(menuId);
                }
                return true;
            }
        });
    }


    const debounced__handleScroll = debounce(handleScroll)

    return (
        <div onScroll={(event) => debounced__handleScroll(event, menuItem)} id="app-container">
            <TopMenuComponent activeMenuItem={activeMenuItem}/>
            <IntroductoryImagesComponent />
            {/*<SeparatorComponent />*/}
            <GeneralInformationComponent />
            <HospitalInformationComponent />
            {/*<HospitalServicesInformationComponent />*/}
            <SeparatorComponent />
            <MedicalServicesComponent ref={servicesRef}/>
            <SeparatorComponent />
            <AboutDoctorComponent />
            <ClientTestimonialsComponent />
            <HospitalStatsComponent />
            <GalleryComponent />
            <SeparatorComponent />
            <FaqComponent />
            <SeparatorComponent />
            <LocationComponent />
            <SeparatorComponent />
            {/*<PartnersComponent />*/}
            <div className="footer">
                <div className="footer-desc">
                    Copyrights 2022 - 2023, Sri Devichandra ENT Hospital. All Rights Reserved.
                </div>

            </div>

        </div>
    );
}

export default HomeComponent;
