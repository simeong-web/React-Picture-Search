import React from 'react';

class SearchBar extends React.Component {
    // Use state instead, in order to control the element
    state = { term: '' }

    /*onInputChange(e) {
        e.target.value;
        // or define onChange={(event) => event.target.value} and also just use 'e' for event;
    }*/

    onInputSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onInputSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}/*{this.onInputChange}*/ />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar