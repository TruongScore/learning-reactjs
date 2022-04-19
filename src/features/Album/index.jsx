import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

const AlbumFeature = props => {
    const albumList = [
        {
            id: 1,
            name: 'V-Pop Đầy Hứa Hẹn',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/e/f/0/7ef0b772dcf72de9840c3d5a363ed027.jpg'
        },
        {
            id: 2,
            name: 'Pop Rising',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/9/6/b/096b489526e23d73f491cbcc46e1d85e.jpg'
        },
        {
            id: 3,
            name: 'Flow Này Mượt Phết',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/4/7/5/34757dc965d705b048638a49033bc6b3.jpg'
        },
    ]
    return (
        <div>
            <h3>Lựa chọn hôm nay</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
};

AlbumFeature.propTypes = {
    
};

export default AlbumFeature;