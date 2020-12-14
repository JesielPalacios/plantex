import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

class Task extends Component {

    render() {
        const { elemento } = this.props;

        const btnDelete = {
            fontSize: '18px',
            background: '#ea2027',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '50%',
            cursor: 'pointer',
        };

        Task.propTypes = {
            task: PropTypes.object.isRequired
        };

        return <p style={this.styleComleted()}>
            {elemento.title} -
            {elemento.description} -
            {elemento.done} -
            {elemento.id}
            <input type="checkbox" onChange={this.props.cheackDone.bind(this, elemento.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, elemento.id)}>
                x
            </button>
        </p>
    };

    styleComleted() {
        return {
            fontSize: '20px',
            color: this.props.elemento.done ? 'gray': 'orange',
            textDecoration: this.props.elemento.done ? 'line-through': 'none'
        }
    }
}

export default Task;
