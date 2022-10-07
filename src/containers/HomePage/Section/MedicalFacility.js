import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import facilityImg from '../../../assets/medical-facility/facility.jpg';
class MedicalFacility extends Component {
    render () {

        return (
            <div className="section section-medical-facility">
                <div className="section-content">
                    <div className="section-header">
                        <div className="section-title">Cơ sở y tế nổi bật</div>
                        <a href="#" className="section-button">tìm kiếm</a>
                    </div>
                    <Slider { ...this.props.settings }>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${facilityImg})` } }>

                            </div>
                        </div>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${facilityImg})` } }>

                            </div>
                        </div>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${facilityImg})` } }>

                            </div>
                        </div>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${facilityImg})` } }>

                            </div>
                        </div>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${facilityImg})` } }>

                            </div>
                        </div>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${facilityImg})` } }>

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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
