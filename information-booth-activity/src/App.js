
import './App.css';
import AddToComponent from './components/AddToComponent';
import CarEssentialsComponent from './components/CarEssentialsComponent';
import './components/EmergencyContactComponent'
import EmergencyContactComponent from './components/EmergencyContactComponent';
import ImportantNotesComponent from './components/ImportantNoteComponent';
import TowServiceComponent from './components/TowServiceComponent';
import { useCentralContext } from './context/centralContext';


function App() {
  const {toggleAdd, addType} = useCentralContext()
  
  return (
      

      <div className="App">
        <EmergencyContactComponent></EmergencyContactComponent>

        <TowServiceComponent></TowServiceComponent>

        <CarEssentialsComponent></CarEssentialsComponent>

        <ImportantNotesComponent></ImportantNotesComponent>
      {
        toggleAdd && addType &&
        <AddToComponent componentType={addType} ></AddToComponent>

      }
      </div>

  );
}

export default App;