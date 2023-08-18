import "./ProfileView.scss";
import Employee from "../../data/types/Employee";
import { useParams } from "react-router-dom"

type ProfileViewProps = {
  employees: Employee[];
};

const ProfileView = ({ employees }: ProfileViewProps) => {
  const { empid } = useParams();
  if (!empid) {
    throw new Error("no empid")
  }
  const targetEmployee: any = employees.find((emp) => emp.id === +empid)

  if (!targetEmployee) {
    throw new Error("no target employee")
  }

  return (
    <>
      <h1>PROFILE VIEW</h1>
      <div className="employee-profile__container">
        <div className="employee-profile__view">
          <h2>{targetEmployee.name}</h2>
          <h3>{targetEmployee.role}</h3>
            {Object.keys(targetEmployee.profile).map((key) => (
              <div>
                <div key={targetEmployee.id}>{key}: {targetEmployee.profile[key]}</div>
              </div>
                ))}
      </div>
      </div>
    </>
  );
}

export default ProfileView;