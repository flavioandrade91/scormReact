import React, {useState} from "react";
import styles from "./Sanfona.module.css"

export function Sanfona({title, children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>    
            <div className={styles.sanfonaContent}>
                <button onClick={() => setIsOpen(!isOpen)}>click</button>
            </div>
        </>
    );
}