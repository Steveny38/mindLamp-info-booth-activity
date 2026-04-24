import styles from '../styles/SaveButtonComponent.module.css'

const SaveButtonComponent = () => {
    return ( <div className={styles.container} >
        <button className={styles.button} >Save & Sync</button>
    </div> );
}
 
export default SaveButtonComponent;