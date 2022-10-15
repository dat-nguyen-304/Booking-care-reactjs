import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createMarkDown } from '../../services/userService';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select'
import { LANGUAGES } from '../../utils/constant';
import './DoctorManage.scss';
const mdParser = new MarkdownIt(/* Markdown-it options */);

class DoctorManage extends Component {

    state = {
        contentMarkDown: '',
        contentHTML: '',
        description: '',
        selectedDoctor: null,
        options: [],
    }

    options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    componentDidMount () {
        this.props.getAllDoctorStart();
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let { allDoctors, language } = this.props;
            let options = allDoctors.map((doctor) => {
                return {
                    label: language === LANGUAGES.VI ? `${doctor.lastName} ${doctor.firstName}` : `${doctor.firstName} ${doctor.lastName}`,
                    value: doctor.id
                }
            })
            this.setState({
                options
            })
        }
    }

    handleSaveContentMarkDown = async () => {
        let res = await createMarkDown({
            contentHTML: this.state.contentHTML,
            contentMarkDown: this.state.contentMarkDown,
            description: this.state.description,
            doctorId: this.state.selectedDoctor.value,
        })
        if (res && res.errCode === 0) {
            toast.success('Add new markdown successfully');
        } else {
            toast.error(res.errMessage);
        }
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkDown: text,
            contentHTML: html,
        })
        console.log('handleEditorChange', html, text);
    }

    handleChangeDescription = (e) => {
        console.log('change text area');
        this.setState({
            description: e.target.value,
        })
    }

    handleChange = (selectedDoctor) => {
        this.setState({ selectedDoctor }, () =>
            console.log(`Option selected:`, this.state.selectedDoctor)
        );
    };

    render () {
        const { selectedDoctor, options } = this.state;
        console.log('all doctors: ', options);
        return (
            <div className="manage-doctor-container">
                <div className="text-center title" ><FormattedMessage id="manage-doctor.manage-doctor" /></div>
                <div className="manage-doctor-input">
                    <div className="doctor-description">
                        <label><FormattedMessage id="manage-doctor.introduction" /></label>
                        <textarea className="form-control "
                            onChange={ (e) => this.handleChangeDescription(e) }
                            rows='4' value={ this.state.description }></textarea>
                    </div>

                    <div className="doctor-select">
                        <label><FormattedMessage id="manage-doctor.choose-doctor" /></label>
                        <Select
                            value={ selectedDoctor }
                            onChange={ this.handleChange }
                            options={ options }
                        />
                    </div>

                </div>
                <label><FormattedMessage id="manage-doctor.description" /></label>

                <MdEditor style={ { height: '500px' } } renderHTML={ text => mdParser.render(text) } onChange={ this.handleEditorChange } />
                <button class="submit-btn btn btn-primary" onClick={ () => this.handleSaveContentMarkDown() }>
                    <FormattedMessage id="manage-doctor.save" />
                </button>
            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctorStart: () => dispatch(actions.fetchAllDoctorStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorManage);
