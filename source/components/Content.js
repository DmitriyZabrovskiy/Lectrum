import React, { Component } from 'react';

import Profile from './profile.js';
import Photos from './photos.js';


export  class Content extends Component {
    render () {
        return (
            <div className = 'content'>
                <Profile />
                <Photos />
            </div>
        );
    }
}