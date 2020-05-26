import React from 'react';
import styles from './ImageHolder.module.css';

import heroDesktop from '../../image/hero-desktop.jpg';
import heroMobile from '../../image/hero-mobile.jpg';

function ImageHolder() {
    return (
        <div className={styles.imageContainer}>
            <img src={heroDesktop} alt="Girl model"/>
        </div>
    );
}

export default ImageHolder;