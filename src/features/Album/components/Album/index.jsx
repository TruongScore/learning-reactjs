import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Album = memo(({ album }) => {
    return (
        <div className='album-item'>
            <div className='thumbnail'>
                <img src={album.thumbnailUrl} alt={album.name} />
            </div>
            <p>{album.name}</p>
        </div>
    );
});

Album.propTypes = {
    album : PropTypes.object.isRequired
};

export default Album;