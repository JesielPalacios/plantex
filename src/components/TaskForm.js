import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    guardarFormulario = event =>{
        this.props.addTask(this.state.title, this.state.description)
        event.preventDefault()
    }

    detectaCambio = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.guardarFormulario}>
                <input
                    type="text"
                    name="title"
                    placeholder="Escribe una tarea"
                    onChange={this.detectaCambio}
                    value={this.state.title}/>
                <br />
                <br/>
                <textarea
                    name="description"
                    placeholder="Escriba una descripción"
                    onChange={this.detectaCambio}
                    value={this.state.description}>
                </textarea>
                <button type="submit">Guardar tarea</button>
            </form>
        )
    }
}
