import { Link } from "react-router-dom";
import './EmployeeLink.scss'

type EmployeeLinkProps = {
  name: string;
  id: number;
};

const EmployeeLink = ({ name, id }: EmployeeLinkProps) => {
  return (
    <>
    <div className="employee-link">
      <Link to={`/profile/${id}`} key={id}>
        <h2>{name}</h2>
      </Link>

    </div>
      
    </>
  )
}

export default EmployeeLink
