import { useState } from 'react';
import styles from '../styles/AddToComponent.module.css'
import { useCentralContext } from '../context/centralContext';

const AddToComponent = ({componentType}) => {
    
    const [fullName, setName] = useState("")
    const [number, setNumber] = useState("")
    const [rel, setRel] = useState("")
    const [servName, setServName] = useState("")
    const [servNumber, setServNumber] = useState("")
    const [note, setNote] = useState("")
    const [item, setItem] = useState("")

    const {resetAdd, setEmergencyContact, setTowServices, setCarEssentials} = useCentralContext()

    function resetContact(){
        setName("")
        setNumber("")   
        setRel("")
    }
    function resetTow(){
        setServName("")
        setServNumber("")
        setNote("")
    }

    return(
        <div className={styles.background}>
            <div className={styles.container}>
                {
                    componentType === 'emergencyContact' && (
                        <div>
                            <div className={styles.header}>Add Emergency Contact</div>


                            <form onSubmit={(e) => {e.preventDefault()
                            setEmergencyContact(prev=>[...prev, {fullName, "phoneNumber":number, "relationship": rel }])
                            resetContact()
                            resetAdd()
                            }}>

                            <div>
                                <h5 className={styles.label} >Full Name*</h5>
                                <input className={styles.input} type="text" value={fullName} onChange={(e)=>setName(e.target.value)} placeholder='Full Name' required />
                            </div>
                            <div>
                                <h5 className={styles.label} >Phone Number*</h5>
                                <input className={styles.input} type="tel" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Phone Number' required />
                            </div>
                            <div>
                                <h5 className={styles.label} >Relation</h5>
                                <input className={styles.input} type="text" value={rel} onChange={(e) => setRel(e.target.value)} placeholder='Relation' />
                            </div>
                            <div className={styles.footer}>
                                <button type='button' onClick={()=>resetAdd()} >Cancel</button>
                                <button type='submit'>Add Contact</button>
                            </div>
                            </form>

                        </div>
                    )
                }
                {
                    componentType === 'towService' && (
                        <div>
                            <div className={styles.header}>Add Tow Service</div>
                  

                            <form onSubmit={(e) => {e.preventDefault()
                            setTowServices(prev => [...prev, {servName,servNumber,note} ])
                            resetTow()
                            resetAdd()
                            }}>

                            <div>
                                <h5 className={styles.label} >Service Name*</h5>
                                <input className={styles.input} type="text" value={servName} onChange={(e)=>setServName(e.target.value)} placeholder='Service Name' required />
                            </div>
                            <div>
                                <h5 className={styles.label} >Phone Number*</h5>
                                <input className={styles.input} type="tel" value={servNumber} onChange={(e) => setServNumber(e.target.value)} placeholder='Phone Number' required />
                            </div>
                            <div>
                                <h5 className={styles.label} >Note</h5>
                                <input className={styles.input} type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder='Note' />
                            </div>
                            <div className={styles.footer}>
                                <button type='button' onClick={()=>resetAdd()} >Cancel</button>
                                <button type='submit'>Add Tow Service</button>
                            </div>
                            </form>

                        </div>
                    )
                }
                {
                    componentType === 'item' && (
                        <div>
                            <div className={styles.header}>Add Item</div>
                  

                            <form onSubmit={(e) => {e.preventDefault()
                            setCarEssentials(prev => [...prev, {id: crypto.randomUUID(), label: item, checked:false} ])
                            setItem("")
                            resetAdd()
                            }}>

                            <div>
                                <h5 className={styles.label} >Item*</h5>
                                <input className={styles.input} type="text" value={item} onChange={(e)=>setItem(e.target.value)} placeholder='Item' required />
                            </div>
                
                            <div className={styles.footer}>
                                <button type='button' onClick={()=>resetAdd()} >Cancel</button>
                                <button type='submit'>Add Item</button>
                            </div>
                            </form>

                        </div>
                    )
                }

            </div>
        </div>
    )

    // if(componentType == 'emergencyContact'){
    //     return(
    //         <div></div>
    //     )
    // }
    // elif(componentType=='towService'){
    //     return(
    //         <div></div>
    //     )
    // }
}
 
export default AddToComponent;