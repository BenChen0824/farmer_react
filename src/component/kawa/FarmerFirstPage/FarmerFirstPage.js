// import logo from './logo.svg';
// import './App.css';

import IndexBanner from './IndexBanner/IndexBanner';
import News from './News/News';
import ContactUs from './ContactUs/ContactUs';

import AboutUs from './AboutUs/AboutUs';

function FarmerFirstPage() {
    return (
        <>
            <IndexBanner />
            <AboutUs />
            <News />
            <ContactUs />
            {/* <TopButton /> */}
        </>
    );
}

export default FarmerFirstPage;
