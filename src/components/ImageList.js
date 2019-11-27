import React from 'react';

class ImageList extends React.Component {
    state = {
        imageList: []
    }

    handleImagePath = (path) => {
        let tempPath = path.replace('public', '');
        return 'http://localhost:8080' + tempPath;
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        this.setState({
            imageList: newProps.imageList || []
        });
    }

    render() {
        return (
            <div className="row">
                {this.state.imageList.map(item => <div className="col-md-4" key={item._id}>
                    <div className="mg-list">
                        <img className="img-custom" alt={item.category} src={this.handleImagePath(item.path)} />
                    </div>
                </div>)}
            </div>
        )
    }
}

export default ImageList;