import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import ImageList from './components/ImageList';

class App extends React.Component {
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
      <div className="container">
        <Header />
        <SearchBox onSearch={this.handleSearch} />
        <ImageList imageList={this.state.imageList} />
      </div>
    );
  }
}

export default App;
