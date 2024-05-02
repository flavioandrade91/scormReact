import React, { useState } from "react";
import styles from "./Sanfona.module.css"
import seta from '../../../assets/SetaCima.svg'

export function Sanfona({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.sanfonaContent}>
                    <div className={styles.headerSanfona}>
                        <span className={styles.title}>Anos 20 e 30</span>
                        <button className={styles.colapse}>
                            <img src={seta} alt="" />
                        </button>
                    </div>
                <div className={styles.boxSanfona}>
                    <div className={styles.bodySanfona}>
                        <div className={styles.sanfonaItem}>
                            <p>
                            Ênfase na individualidade e na expressão
                            pessoal na moda, que foi um precursor para
                            o desenvolvimento da produção de moda como
                            a conhecemos hoje.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
