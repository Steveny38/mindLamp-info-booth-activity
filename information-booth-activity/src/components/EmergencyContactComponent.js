import { useCentralContext } from '../context/centralContext';
import styles from '../styles/EmergencyContactComponent.module.css'
import EmergencyContactSection from './EmergencyContactSection';
const EmergencyContactComponent = () => {
    
    const {emergencyContacts, addContact} = useCentralContext()

    
    return ( 
    
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Emergency Contacts</h2>
                <button onClick={() => addContact()} >+</button>
            </div>

            {emergencyContacts.map((contact) => (
                <EmergencyContactSection {...contact} ></EmergencyContactSection>
            ))}


        </div>

    );
}
 
export default EmergencyContactComponent;