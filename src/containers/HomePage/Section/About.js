import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
class About extends Component {
    render () {

        return (
            <div className="section section-about">
                <div className="section-content">
                    <div className="section-video">
                        <iframe width="956" height="538"
                            src="https://www.youtube.com/embed/ek-672uRnhQ"
                            title="Worlds 2020 | Orchestral Theme - League of Legends"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="section-about-description">
                        <FormattedMessage id="home-section.description" />
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
