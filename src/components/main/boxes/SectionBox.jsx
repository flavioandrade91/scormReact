import React from "react";
import styles from './SectionBox.module.css'
import backImage from '../../../assets/BannerHeader.svg'
import baloonGray from '../../../assets/BorderBottomGray.svg'
import baloonPurple from '../../../assets/BorderTopPurple.svg'
import hatsImage from '../../../assets/hatsImage.svg'


export function SectionBox() {
    return (
        <>
            <section className={styles.SectionBox}>
                <div className={styles.baloonGray}>
                    <img src={baloonGray} alt="" srcset="" />
                </div>

                <div className={styles.titleImageBox}>
                    <h1>HISTÓRIA</h1>
                </div>

                <div className={styles.baloonPurple}>
                    <img src={baloonPurple} alt="" srcset="" />
                </div>
            </section>

            
        </>
    );
}