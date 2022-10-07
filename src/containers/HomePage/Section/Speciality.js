import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import specialityImg from '../../../assets/speciality/viem-gan.jpg';
class Speciality extends Component {
    render () {

        return (
            <div className="section section-specialty">
                <div className="section-content">
                    <div className="section-header">
                        <div className="section-title"> Chuyên khoa phổ biến</div>
                        <a href="#" className="section-button">xem thêm</a>
                    </div>
                    <Slider { ...this.props.settings }>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${specialityImg})` } }>

                            </div>
                        </div>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${specialityImg})` } }>

                            </div>
                        </div>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${specialityImg})` } }>

                            </div>
                        </div>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${specialityImg})` } }>

                            </div>
                        </div>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${specialityImg})` } }>

                            </div>
                        </div>
                        <div>
                            <div className="section-img" style={ { backgroundImage: `url(${specialityImg})` } }>

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

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);