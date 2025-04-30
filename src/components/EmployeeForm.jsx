import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const EmployeeForm = ({ addEmployee, updateEmployee, employeeToEdit, setEmployeeToEdit }) => {
  const initialFormState = {
    id: '',
    name: '',
    position: '',
    department: '',
    joiningDate: '',
    salary: ''
  };

  const [employee, setEmployee] = useState(initialFormState);

  useEffect(() => {
    if (employeeToEdit) {
      setEmployee(employeeToEdit);
    }
  }, [employeeToEdit]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!employee.name || !employee.position || !employee.department || !employee.joiningDate || !employee.salary) {
      alert('Please fill in all fields');
      return;
    }

    if (employee.id) {
      // Update existing employee
      updateEmployee(employee);
    } else {
      // Add new employee with a UUID
      addEmployee({ ...employee, id: uuidv4() });
    }

    // Reset form
    setEmployee(initialFormState);
    if (setEmployeeToEdit) {
      setEmployeeToEdit(null);
    }
  };

  return (
    <div className="employee-form">
      <h2>{employee.id ? 'Edit Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleInputChange}
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={handleInputChange}
            placeholder="Job Position"
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleInputChange}
            placeholder="Department"
          />
        </div>
        <div className="form-group">
          <label>Joining Date:</label>
          <input
            type="date"
            name="joiningDate"
            value={employee.joiningDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Salary (USD):</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleInputChange}
            placeholder="Salary in USD"
          />
        </div>
        <button type="submit">{employee.id ? 'Update' : 'Add'} Employee</button>
        {employee.id && (
          <button 
            type="button" 
            onClick={() => {
              setEmployee(initialFormState);
              if (setEmployeeToEdit) {
                setEmployeeToEdit(null);
              }
            }}
            className="cancel-button"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default EmployeeForm;
