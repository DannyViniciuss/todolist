import React, { Component } from 'react';
import './todolist.css';
import ItemsList from './ItemsList';
import DropdownList from './DropdownList';
import NoOption from './NoOption';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onClickClose() {
        let index = parseInt(this.props.index);
        this.props.removeItem(index);
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                    <button>+</button>
                    <input value={this.state.term} onChange={this.onChange} />
                </form>
                <DropdownList />
                <NoOption />
                <ItemsList items={this.state.items} />
            </div>
        );
    }
}