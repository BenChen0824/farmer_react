import React from 'react';
import { useParams } from 'react-router-dom';
import { LineShareButton, LineIcon } from 'react-share';

function LineShare() {
    const { sid } = useParams();
    const location = document.location.origin;

    const shareUrl = `${location}/product/${sid}`;

    return (
        <LineShareButton url={shareUrl} title={'跟你分享'}>
            <LineIcon size={32} round />
        </LineShareButton>
    );
}
export default LineShare;
