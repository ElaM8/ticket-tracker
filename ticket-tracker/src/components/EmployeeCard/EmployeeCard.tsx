import { useState } from "react"
// import employee from '../../data/types/Employee'
import './EmployeeCard.scss'
import Counter from "../Counter/Counter";

type EmployeeProps = {
  name: string;
  role: string;
};

const EmployeeCard = ({ name, role }: EmployeeProps) => {
  return (
    <>
    <div className="employee-card">
      <h2 id="employee-card__name">{name}</h2>
      <h2 id="employee-card__role">{role}</h2>
      <Counter/>
    </div>
      
    </>
  )
}

export default EmployeeCard
