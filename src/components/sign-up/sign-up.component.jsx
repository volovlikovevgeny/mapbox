import React, { Component } from 'react';


export default class SignUp extends Component {
    render() {
        return (
            <div className='mapbox-header'
                style={{
                    color: '#fff',
                    backgroundColor: 'black',
                }}>
                <Link to='/' className='link'>
                    Log Out
                </Link>
            </div>
        )
    }
}
