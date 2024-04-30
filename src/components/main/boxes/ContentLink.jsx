import React from "react";
import styles from './ContentLink.module.css'
import backImage from '../../../assets/BannerHeader.svg'
import baloonGray from '../../../assets/BorderBottomGray.svg'
import baloonPurple from '../../../assets/BorderTopPurple.svg'
import hatsImage from '../../../assets/hatsImage.svg'


export function ContentLink() {
    return (
        <>
            <section className={styles.Contentlink}>
                <div className={styles.baloonGray}>
                    <img src={baloonGray} alt="" srcset="" />
                </div>

                <div className={styles.sectionHstoria}>
                    <h1>HISTÓRIA</h1>
                </div>

                <div className={styles.baloonPurple}>
                    <img src={baloonPurple} alt="" srcset="" />
                </div>
                <div className={styles.boxPurple}>
                    <div className={styles.introHistoria}>
                        <p>Antes de inicarmos o estudo sobre os fundamentos da produção
                            de moda, vamos compreender um pouco sobre seu contexto histórico
                            e como essa evolução contribuiu para que ela alçancasse cada 
                            vez mais espaço.
                        </p>
                    </div>
                </div>
                <div className={styles.bannerHats}>
                    {/* <img src={hatsImage} alt="" srcset="" /> */}
                </div>
            </section>

        </>
    );
}