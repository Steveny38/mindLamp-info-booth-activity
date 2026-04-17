import styles from '../styles/TowServiceComponent.module.css'

import TowServiceSection from '../components/TowServiceSection'

import { useCentralContext } from "../context/centralContext";

const TowServiceComponent = () => {

    const {towServices, setTowServices, addTow } = useCentralContext()


    return ( 
    
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Tow Services</h2>
                <button onClick={() => addTow()} >+</button>
            </div>

            {towServices.map((service) => {
                return(
                    <TowServiceSection {...service} ></TowServiceSection>
                )
            })

            }



        </div>

    );
}
 
export default TowServiceComponent;