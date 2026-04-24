import { createContext, useContext, useState } from "react";

import baseData from '../BaseData.json'

export const CentralContext = createContext()

export const CentralContextProvider = ({children}) => {
    
    const [emergencyContacts, setEmergencyContact] = useState(baseData.emergencyContacts)
    const [towServices, setTowServices] = useState(baseData.towServices)
    const [carEssentials, setCarEssentials] = useState(baseData.carEssentials)
    const [toggleAdd, setToggle] = useState(false)
    const [addType, setAddType] = useState(null)
    const [importantNotes, setImportantNotes] = useState(baseData.importantNotes)



    function resetAdd(){
        setToggle(false)
        setAddType(null)
    }

    function addContact(){
        setToggle(true)
        setAddType('emergencyContact')
    }
    function addTow(){
        setToggle(true)
        setAddType('towService')
    }
    function addEssential(){
        setToggle(true)
        setAddType('item')
    }



function removeCarEssential(id) {
  setCarEssentials((prev) =>
    prev.filter((item) => item.id !== id)
  );
}

function toggleCarEssential(id) {
  setCarEssentials((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, checked: !item.checked }
        : item
    )
  );
}


    function removeEmergencyContact(phoneNumber) {
  setEmergencyContact(prev =>
    prev.filter(contact => contact.phoneNumber !== phoneNumber)
  );
}
    function removeTowService(servNumber) {
  setTowServices(prev =>
    prev.filter(contact => contact.servNumber !== servNumber)
  );
  console.log(towServices)
}

  function saveJSON(){
    
  }

    return(

        <CentralContext.Provider value={{emergencyContacts, setEmergencyContact, toggleAdd, setToggle, addType, setAddType, addTow, addContact, towServices, setTowServices, resetAdd, removeEmergencyContact, removeTowService, carEssentials,    setCarEssentials,
    toggleCarEssential,
    removeCarEssential, addEssential, importantNotes, setImportantNotes}}>
            {children}
        </CentralContext.Provider>
    )
}

export const useCentralContext = () => {
    // console.log("hi")
    return useContext(CentralContext)
}
