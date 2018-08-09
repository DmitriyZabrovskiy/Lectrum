import React, { Component } from 'react';

import Photo from './photo';

import { photos } from '../theme/assets/images/photos';

export default class Photos extends Component {
    render () {
        const photosJSX = photos.map((photo) => {
            return <Photo key = { photo.id } secured = { photo.secured } src = { photo.src }/>
        });

        return (
            <div className= 'photos'>{ photosJSX }</div>
        );
    }
}