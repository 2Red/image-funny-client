import React from 'react';

class SearchBox extends React.Component {
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            let { value } = e.target;

            // call api
            fetch(`http://localhost:8080/api/search?search_key=${value}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.props.onSearch(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (err) => {
                        this.props.onSearch(err);
                    }
                )
        }
    }

    render() {
        return (
            <div>
                <input onKeyDown={this.handleKeyDown} className='form-control' type='text' placeholder='Enter key word to search image' />
            </div>
        )
    }
}

export default SearchBox;