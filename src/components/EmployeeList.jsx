import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees, deleteEmployee, editEmployee }) => {
  if (employees.length === 0) {
    return <p className="no-employees">No employees found. Add a new employee using the form.</p>;
  }

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <div className="employee-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
              <th>Joining Date</th>
              <th>Salary (USD)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
                <td>{new Date(employee.joiningDate).toLocaleDateString()}</td>
                <td>${employee.salary}</td>
                <td>
                  <button 
                    onClick={() => editEmployee(employee)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => deleteEmployee(employee.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="employee-cards">
        {employees.map(employee => (
          <EmployeeCard 
            key={employee.id} 
            employee={employee} 
            deleteEmployee={deleteEmployee}
            editEmployee={editEmployee}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
