import "./App.scss";
import EmployeeCard from './components/EmployeeCard/EmployeeCard'
import employees from './data/team'
import { FormEvent, useState } from 'react'

function App() {
const [searchInput, setSearchInput] = useState("")

const handleInput = (e: FormEvent<HTMLInputElement>) => {
  setSearchInput(e.currentTarget.value)
}

let filteredEmployees: any[] = [];

if (searchInput.length >= 3) {
filteredEmployees = employees.filter((employee) =>
  employee.name.toLowerCase().includes(searchInput.toLowerCase()))
}

return (
    <div className="outer-wrapper">
      <h1>Ticket Tracker</h1>
      <form action="">
        <label htmlFor="">Search Employee by Name:   </label>
        <input type="text" onInput={handleInput} /> 
      </form>
    <div className="employee-container">
      {searchInput.length >= 3 &&
      <div className="filtered-employees">
        {filteredEmployees.map(employee => (
        <EmployeeCard key={employee.id}
        name={employee.name} 
        role={employee.role}/>
      ))}
      </div>
      }
      <div className="all-employees">
      {searchInput.length < 3 && 
      employees.map(employee => (
        <EmployeeCard key={employee.id}
        name={employee.name} 
        role={employee.role}/>
      ))}
      </div>
      </div>
    </div>
  )
}

export default App