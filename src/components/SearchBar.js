import React from "react";

//create class based component
class SearchBar extends React.Component {
    //initialise the state object
    state = { term: '' };
    
    //callback function that sets the state to equal the input to the search bar
    //i.e. when 'House' is typed in, the state will be set to House
    onInputChange = event => {
        this.setState({ term: event.target.value });

    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.term} onChange={this.onInputChange} type="text" placeholder="Search..."></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;