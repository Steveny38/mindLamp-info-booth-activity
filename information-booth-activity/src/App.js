
import './App.css';
import AddToComponent from './components/AddToComponent';
import CarEssentialsComponent from './components/CarEssentialsComponent';
import './components/EmergencyContactComponent'
import EmergencyContactComponent from './components/EmergencyContactComponent';
import HeaderComponent from './components/HeaderComponent';
import ImportantNotesComponent from './components/ImportantNoteComponent';
import SaveButtonComponent from './components/SaveButtonComponent';
import TowServiceComponent from './components/TowServiceComponent';
import { useCentralContext } from './context/centralContext';


function App() {
  const {toggleAdd, addType} = useCentralContext()
  
  return (
      

      <div className="App">
        <HeaderComponent></HeaderComponent>
        <EmergencyContactComponent></EmergencyContactComponent>

        <TowServiceComponent></TowServiceComponent>

        <CarEssentialsComponent></CarEssentialsComponent>

        <ImportantNotesComponent></ImportantNotesComponent>
      {
        toggleAdd && addType &&
        <AddToComponent componentType={addType} ></AddToComponent>

      }
      {
        !toggleAdd && <SaveButtonComponent></SaveButtonComponent>
      }

      </div>

  );
}

export default App;