import React, { useState, useEffect } from 'react';

function Uploadimages(props) {
    const [uploadImages, setUploadImages] = useState('');
    useEffect(() => {
        const reader = new FileReader();
        reader.readAsDataURL(props.blob);
        reader.onload = function () {
            setUploadImages(reader.result);
        };
    }, [props.blob]);
    return (
        <img
            style={{ width: 150, height: 'auto' }}
            src={uploadImages}
            alt={props.fileName}
        />
    );
}

export default Uploadimages;
