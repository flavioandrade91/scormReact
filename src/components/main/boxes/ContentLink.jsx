import React from "react";
import styles from './ContentLink.module.css'
import backImage from '../../../assets/BannerHeader.svg'
import baloonGray from '../../../assets/BorderBottomGray.svg'
import baloonPurple from '../../../assets/BorderTopPurple.svg'


export function ContentLink() {
    return (
        <>
            <section className={styles.Contentlink}>                
            <div className={styles.baloonGray}>
                    <img src={baloonGray} alt="" srcset="" />
                </div>
                <div className={styles.baloonPurple}>
                    <img src={baloonPurple} alt="" srcset="" />
                </div>
            </section>
            
        </>
    );
}