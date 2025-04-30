const EmployeeCard = ({ employee, deleteEmployee, editEmployee }) => {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <div className="employee-details">
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Joining Date:</strong> {new Date(employee.joiningDate).toLocaleDateString()}</p>
        <p><strong>Salary:</strong> ${employee.salary}</p>
      </div>
      <div className="card-actions">
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
      </div>
    </div>
  );
};

export default EmployeeCard;
