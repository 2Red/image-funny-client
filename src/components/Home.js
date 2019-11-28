import React from 'react';
import SearchBox from './SearchBox';
import ImageList from './ImageList';

class Home extends React.Component {
    state = {
        imageList: []
    };

    handleSearch = (result) => {
        this.setState({
            imageList: result.data
        });
    }

    render() {
        return (
            <div>
                <SearchBox onSearch={this.handleSearch} />
                <ImageList imageList={this.state.imageList} />
            </div>
        )
    }
}

export default Home;