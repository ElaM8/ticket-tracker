import './App.css'
import EmployeeCard from './components/EmployeeCard/EmployeeCard'
import employees from './data/team'

function App() {
const [ { id, name, role } ] = employees

  return (
    <>
    {employees.map(employee => (
   <EmployeeCard 
      id={id} 
      name={name} 
      role={role}/>
    ))}
    </>
  )
}

export default App