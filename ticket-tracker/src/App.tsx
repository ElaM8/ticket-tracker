import "./App.scss";
import EmployeeCard from './components/EmployeeCard/EmployeeCard'
import employees from './data/team'
import { useState } from 'react'
import Employee from './data/types/Employee'

function App() {
const [searchInput, setSearchInput] = useState("")

const handleInput = (e: Event) => {
  setSearchInput((e.target as HTMLFormElement).value)
}

const filteredEmployees: any[] = employees.filter((employee) =>
  employee.name.toLowerCase().includes(searchInput.toLowerCase()))

console.log(filteredEmployees)

return (
    <div className="outer-wrapper">
      <h1>Ticket Tracker</h1>
      <form action="">
        <label htmlFor="">Search Employee by Name:   </label>
        <input type="text" onInput={handleInput} /> 
      </form>
    {/* I can get rid of this error by changing index.d.ts - the expected type to onInput can be set to any  */}
      <div className="filtered-employees">
      {(filteredEmployees).map(employee => (
        <EmployeeCard key={employee.id}
        name={employee.name} 
        role={employee.role}/>
      ))}
      </div>
      <div className="all-employees">
      {employees.map(employee => (
        <EmployeeCard key={employee.id}
        name={employee.name} 
        role={employee.role}/>
      ))}
      </div>
    </div>
  )
}

export default App