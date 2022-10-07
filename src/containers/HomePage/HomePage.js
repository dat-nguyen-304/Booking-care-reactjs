import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Speciality from './Section/Speciality';
import OutstandingDoctor from './Section/OutstandingDoctor';
import MedicalFacility from './Section/MedicalFacility';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePage.scss';
class HomePage extends Component {

    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <div>
                <HomeHeader />
                <Speciality settings={ settings } />
                <MedicalFacility settings={ settings } />
                <OutstandingDoctor settings={ settings } />
                <HandBook settings={ settings } />
                <About />
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);