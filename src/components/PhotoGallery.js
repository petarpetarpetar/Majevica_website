import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: '/gallery/slika (1).jpg',
        thumbnail: '/gallery/slika (1).jpg',
    },
    {
        original: '/gallery/slika (2).jpg',
        thumbnail: '/gallery/slika (2).jpg',
    },
    {
        original: '/gallery/slika (3).jpg',
        thumbnail: '/gallery/slika (3).jpg',
    },
    {
        original: '/gallery/slika (4).jpg',
        thumbnail: '/gallery/slika (4).jpg',
    },
    {
        original: '/gallery/slika (5).jpg',
        thumbnail: '/gallery/slika (5).jpg',
    },
    {
        original: '/gallery/slika (6).jpg',
        thumbnail: '/gallery/slika (6).jpg',
    },
    {
        original: '/gallery/slika (7).jpg',
        thumbnail: '/gallery/slika (7).jpg',
    },
    {
        original: '/gallery/slika (8).jpg',
        thumbnail: '/gallery/slika (8).jpg',
    },
    {
        original: '/gallery/slika (9).jpg',
        thumbnail: '/gallery/slika (9).jpg',
    },
    {
        original: '/gallery/slika (10).jpg',
        thumbnail: '/gallery/slika (10).jpg',
    },
    {
        original: '/gallery/slika (11).jpg',
        thumbnail: '/gallery/slika (11).jpg',
    },
    {
        original: '/gallery/slika (12).jpg',
        thumbnail: '/gallery/slika (12).jpg',
    },
    {
        original: '/gallery/slika (13).jpg',
        thumbnail: '/gallery/slika (13).jpg',
    },
    {
        original: '/gallery/slika (14).jpg',
        thumbnail: '/gallery/slika (14).jpg',
    },
    {
        original: '/gallery/slika (15).jpg',
        thumbnail: '/gallery/slika (15).jpg',
    },
    {
        original: '/gallery/slika (16).jpg',
        thumbnail: '/gallery/slika (16).jpg',
    },
    {
        original: '/gallery/slika (17).jpg',
        thumbnail: '/gallery/slika (17).jpg',
    },
    {
        original: '/gallery/slika (18).jpg',
        thumbnail: '/gallery/slika (18).jpg',
    },
];

class MyGallery extends React.Component {
  
    render() {
        return (
        <div id="photoGallery">
            <ImageGallery  items={images} />
        </div>
        )
    }
}
export default MyGallery;
