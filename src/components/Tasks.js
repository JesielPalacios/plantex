import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

class Tasks extends Component {

    render() {
        return this.props.tasks.map(elemento =>
            <Task
                elemento={elemento}
                key={elemento.id}
                deleteTask={this.props.deleteTask}
                cheackDone={this.props.cheackDone}
            />);
    }
}

Task.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default Tasks;
