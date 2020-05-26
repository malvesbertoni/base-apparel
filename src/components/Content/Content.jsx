import React from 'react';
import styles from './Content.module.css';

import imgLogo from '../../image/logo.svg';

function Content() {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.logo}>
                <img src={imgLogo} alt="Brand Logo"/>
            </div>
            <div className={styles.titleContainer}>
                <p className={styles.title}>W E ' R E</p>
                <p className={styles.subtitle}>C O M I N G</p>
                <p className={styles.subtitle}>S O O N</p>
            </div>
            <div className={styles.content}>
                <p>Hello fellow shoppers! We're currently building our new
                    fashion store. Add your email below to stay up-to-date with
                    announcements and our launch deals.
                </p>
            </div>
            <div className={styles.formButton}>
                <form>
                    <input type="email" placeholder="Email Address"/>
                    <input type="button" /> 
                </form>
            </div>
        </div>
    );
}

export default Content;