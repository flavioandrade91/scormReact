import React from 'react'
import styles from '../sanfona/Sanfona.module.css'
import { Sanfona } from './Sanfona'

const Modal = ({ modal, setModal}) => {

    if (Modal) 
        return (
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
        );
    return null
}

export default Modal;