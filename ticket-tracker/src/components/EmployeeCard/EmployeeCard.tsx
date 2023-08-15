import { useState } from "react"
import employee from '../../data/types/Employee'
import './EmployeeCard.scss'
import Counter from "../counter/Counter";

type EmployeeProps = {
  id: number;
  name: string;
  role: string;
};

const EmployeeCard = ({ id, name, role }: EmployeeProps) => {
console.log(name, id, role)
  return (
    <>
    <h2>{name}</h2>
    <h2>{role}</h2>
    <Counter/>
    </>
  )
}

export default EmployeeCard
