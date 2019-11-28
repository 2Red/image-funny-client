import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className='text-center'>
                <h1><a href='/' style={{ textDecoration: 'none' }}>Image <span style={{ color: 'red' }}>Funny</span></a></h1>
            </header>
        )
    }
}

export default Header;