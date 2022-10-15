import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import handbookImg from '../../../assets/handbook/cam-nang.png';
class HandBook extends Component {

    render () {
        let copyProps = {
            ...this.props,
            slidesToShow: 4,
        }
        return (
            <div className="section section-book">
                <div className="section-content">
                    <div className="section-header">
                        <div className="section-title"><FormattedMessage id="home-section.handbook" /></div>
                        <a href="#" className="section-button"><FormattedMessage id="home-section.all-post" /></a>
                    </div>
                    <Slider { ...copyProps }>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${handbookImg})` } }>

                            </div>
                        </div>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${handbookImg})` } }>

                            </div>
                        </div>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${handbookImg})` } }>

                            </div>
                        </div>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${handbookImg})` } }>

                            </div>
                        </div>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${handbookImg})` } }>

                            </div>
                        </div>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${handbookImg})` } }>

                            </div>
                        </div>
                    </Slider>

                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
