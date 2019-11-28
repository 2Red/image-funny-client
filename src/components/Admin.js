import React from 'react';

class Admin extends React.Component {
    render() {
        return (
            <form method='POST' action='http://localhost:́8080/api/upload'>
                <div className='form-group'>
                    <label>Image file:</label>
                    <input type='file' name='file' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Category:</label>
                    <input type='text' name='category' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Search key:</label>
                    <input type='text' name='search_key' className='form-control' />
                </div>
                <button className='btn btn-primary' type='submit'>Upload</button>
            </form>
        )
    }
}

export default Admin;