import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            taskName : ''
        }
    }

    submitTask(e){
        if (this.state.taskName.length > 0) {
            this.props.onSubmit(this.state.taskName);
        }
    }

    handleChange(e) {
        this.setState({
            taskName: e.target.value
        });
    }

    render() {
        return (
            <form action="#">
                <input 
                    type="text" 
                    onChange={this.handleChange.bind(this)} 
                    placeholder="enter task here" 
                    value={this.state.taskName} />
                <button 
                    href="#" 
                    onClick={this.submitTask.bind(this)}>
                    Submit task
                </button>
            </form>
        );
    }
}


export default TodoForm;