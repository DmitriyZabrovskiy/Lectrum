import React, { Component } from 'react';

import avatar from '../theme/assets/images/nasa.jpg';

export default  class Profile extends Component {
    render () {
        return (
            <div className = 'profile'>
                <img src = { avatar } />
                <div>
                    <div className = 'nickname'>
                        <span>nasa</span>
                    </div>
                    <div className= 'stats'>
                        <span>
                        <span>2389&nbsp;</span>
                        <span>posts</span>
                        </span>
                        <span>
                            <span>3.6 million&nbsp;</span>
                            <span>followers</span>
                        </span>
                        <span>
                            <span>69&nbsp;</span>
                            <span>following</span>
                        </span>
                    </div>
                    <div className= 'name'>NASA</div>
                </div>
            </div>
        );
    }
}