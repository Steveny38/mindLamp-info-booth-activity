import { useCentralContext } from '../context/centralContext';
import styles from '../styles/EmergencyContactSection.module.css'

const EmergencyContactSection = ({fullName, phoneNumber, relationship}) => {

    const {removeEmergencyContact} = useCentralContext()

    return ( <div className={styles.container}>

        <div className={styles.left}>
            <div>{fullName}</div>
            <div>{relationship} - {phoneNumber}</div>
        </div>
        <div className={styles.right}>
            <button onClick={()=>removeEmergencyContact(phoneNumber)}>×</button>
        </div>
    </div> );
}
 
export default EmergencyContactSection;