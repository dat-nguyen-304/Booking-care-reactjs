import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createMarkDown, updateMarkDown } from '../../services/userService';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select'
import { CRUD_ACTION, LANGUAGES } from '../../utils/constant';
import './DoctorManage.scss';
import { getDetailDoctorById } from '../../services/userService';
import _ from 'lodash';
const mdParser = new MarkdownIt(/* Markdown-it options */);

class DoctorManage extends Component {

    state = {
        contentMarkDown: '',
        contentHTML: '',
        description: '',
        selectedDoctor: null,
        options: [],
        action: CRUD_ACTION.CREATE,
    }
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

    handleUpdateContentMarkDown = async () => {
        let res = await updateMarkDown({
            contentHTML: this.state.contentHTML,
            contentMarkDown: this.state.contentMarkDown,
            description: this.state.description,
            doctorId: this.state.selectedDoctor.value,
        })
        if (res && res.errCode === 0) {
            toast.success('update markdown successfully');
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

    handleChange = async (selectedDoctor) => {
        let doctorId = selectedDoctor.value;
        const res = await getDetailDoctorById(doctorId);
        if (res && res.errCode === 0) {
            let { description, contentHTML, contentMarkDown } = res.doctorInfo.MarkDown;
            if (!description && !contentHTML && !contentMarkDown) {
                this.setState({
                    action: CRUD_ACTION.CREATE,
                    selectedDoctor,
                    contentHTML: '',
                    contentMarkDown: '',
                    description: '',
                })
            } else {
                this.setState({
                    action: CRUD_ACTION.UPDATE,
                    selectedDoctor,
                    contentHTML: contentHTML,
                    contentMarkDown: contentMarkDown,
                    description: description,
                })
            }
        }
        console.log(`Option selected:`, this.state.selectedDoctor)

    };

    render () {
        const { selectedDoctor, options, action, contentMarkDown, description } = this.state;
        return (
            <div className="manage-doctor-container">
                <div className="text-center title" ><FormattedMessage id="manage-doctor.manage-doctor" /></div>
                <div className="manage-doctor-input">
                    <div className="doctor-description">
                        <label><FormattedMessage id="manage-doctor.introduction" /></label>
                        <textarea className="form-control "
                            onChange={ (e) => this.handleChangeDescription(e) }
                            rows='4' value={ description }></textarea>
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

                <MdEditor style={ { height: '500px' } }
                    renderHTML={ text => mdParser.render(text) }
                    onChange={ this.handleEditorChange }
                    value={ contentMarkDown ? contentMarkDown : '' }
                />
                { action === CRUD_ACTION.CREATE ?
                    <button class="submit-btn btn btn-primary" onClick={ () => this.handleSaveContentMarkDown() }>
                        <FormattedMessage id="manage-doctor.save" />
                    </button>
                    :
                    <button class="submit-btn btn btn-primary" onClick={ () => this.handleUpdateContentMarkDown() }>
                        <FormattedMessage id="manage-doctor.update" />
                    </button>
                }
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
