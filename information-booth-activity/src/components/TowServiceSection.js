import { useCentralContext } from "../context/centralContext";
import styles from "../styles/TowServiceSection.module.css"

const TowServiceSection = ({servName, servNumber, note}) => {
    const {removeTowService} = useCentralContext()
    return ( <div className={styles.container}>

        <div className={styles.left}>
            <div>{servName}</div>
            <div>{note} - {servNumber}</div>
        </div>
        <div className={styles.right}>
            <button onClick={()=>removeTowService(servNumber)}>×</button>
        </div>
    </div> );
}
 
export default TowServiceSection;