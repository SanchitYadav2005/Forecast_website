import styles from '/styles/main.module.css';
import { useState } from 'react';

function Form(){
    return(
        <>
            <input className={styles.search} type="text" placeholder="search"/>
        </>
    )
}

export default Form;