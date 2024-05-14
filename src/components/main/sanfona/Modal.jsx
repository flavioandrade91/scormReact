import React from 'react'
import styles from '../sanfona/Sanfona.module.css'

const Modal = ({ modal, setModal, text}) => {

    if (Modal) 
        return (
            <div className={styles.boxSanfona}>
                <div className={styles.bodySanfona}>
                    <div className={styles.sanfonaItem}>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        );
    return null
}

export default Modal;