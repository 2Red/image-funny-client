import React from 'react';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            category: '',
            search_key: ''
        }

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    updateCategory = (e) => {
        this.setState({
            category: e.target.value
        });
    }

    updateSearchKey = (e) => {
        this.setState({
            search_key: e.target.value
        });
    }

    onChangeHandler = e => {
        this.setState({
            selectedFile: e.target.files[0],
            loaded: 0
        })
    }

    onClickHandler = () => {
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        data.append('category', this.state.category);
        data.append('search_key', this.state.search_key);
        fetch("http://localhost:8080/api/upload/",
            {
                body: data,
                method: "post"
            }).then(res => {
                alert('Upload successfully!'); this.setState({
                    selectedFile: null,
                    category: '',
                    search_key: ''
                })
            }).catch(err => alert('Server Error!'));
    }

    render() {
        return (
            <form>
                <div className='form-group'>
                    <label>Image file:</label>
                    <input type='file' name='file' className='form-control' onChange={this.onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label>Category:</label>
                    <input type='text' name='category' className='form-control' value={this.state.category} onChange={this.updateCategory} />
                </div>
                <div className='form-group'>
                    <label>Search key:</label>
                    <input type='text' name='search_key' className='form-control' placeholder='cân;cà khịa;dog' value={this.state.search_key} onChange={this.updateSearchKey} />
                </div>
                <button className='btn btn-primary' type='button' onClick={this.onClickHandler}>Upload</button>
            </form>
        )
    }
}

export default Admin;