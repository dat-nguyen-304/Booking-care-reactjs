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
                        "...Ngôi đền đầu tiên do vua Solomon xây dựng vào khoảng thế kỷ 10 trước Công nguyên, là trung tâm phụng thờ của Do Thái giáo cổ. Ngôi đền này chính thức thay thế cho nơi mà Mô-sê hằng phụng thờ và những nơi khác tại Shiloh, Nov, và Givon, trở thành nơi tập trung cao độ của đức tin người Do Thái. Ngôi đền thứ nhất này bị phá hủy bởi những người Babylon vào năm 586 TCN, và được xây dựng lại (là ngôi đền thứ hai) bảy mươi năm sau tức 515 TCN..."
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
