import "./Home.scss";
import EmployeeLink from "../EmployeeLink/EmployeeLink"
import Employee from "../../data/types/Employee";

type HomeProps = {
  employees: Employee[];
};

const Home = ({ employees }: HomeProps) => {
  return (
    <>
      <h1>HOME</h1>
      <div className="home__names-links"></div>
        {employees.map(emp => (
          <EmployeeLink key={emp.id} name={emp.name} id={emp.id}></EmployeeLink>
        ))}
    </>
  );
}

export default Home;
