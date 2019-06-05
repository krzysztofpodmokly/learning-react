import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({description, id, urls}) => {
        // 'key' element must be added to the root element.
        // If an <img> would be nested inside a div, 'key' must be added to this div.
        return <img key={ id } src={ urls.regular } alt={ description }/>
    });
    return <div>{ images }</div>
}

export default ImageList;