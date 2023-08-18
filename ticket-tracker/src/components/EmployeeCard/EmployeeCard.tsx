import { useState } from "react"
// import employee from '../../data/types/Employee'
import './EmployeeCard.scss'
import Counter from "../Counter/Counter";
import EmployeeLink from "../EmployeeLink/EmployeeLink"

type EmployeeProps = {
  name: string;
  role: string;
  id: number;
};

const EmployeeCard = ({ name, role, id }: EmployeeProps) => {
  return (
    <>
    <div className="employee-card">
      <h2 id="employee-card__name">{name}</h2>
      <EmployeeLink key={id} name={name} id={id}></EmployeeLink>
      <h2 id="employee-card__role">{role}</h2>
      <Counter/>
    </div>
      
    </>
  )
}

export default EmployeeCard
