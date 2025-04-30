import { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'card'

  // Load employees from localStorage on initial render
  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  // Save employees to localStorage whenever the employees state changes
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Add a new employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // Delete an employee
  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((employee) => employee.id !== id));
      if (employeeToEdit && employeeToEdit.id === id) {
        setEmployeeToEdit(null);
      }
    }
  };

  // Set employee to edit
  const editEmployee = (employee) => {
    setEmployeeToEdit(employee);
  };

  // Update an employee
  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  };

  // Toggle view mode between table and card
  const toggleViewMode = () => {
    setViewMode(viewMode === "table" ? "card" : "table");
  };

  return (
    <div className="app-container">
      <header>
        <h1>Employee Management System</h1>
      </header>

      <main>
        <div className="content-container">
          <section className="form-section">
            <EmployeeForm
              addEmployee={addEmployee}
              updateEmployee={updateEmployee}
              employeeToEdit={employeeToEdit}
              setEmployeeToEdit={setEmployeeToEdit}
            />
          </section>

          <section className="list-section">
            {/* <div className="view-controls">
              <button onClick={toggleViewMode} className="view-toggle">
                View as {viewMode === "table" ? "Cards" : "Table"}
              </button>
            </div> */}

            <EmployeeList
              employees={employees}
              deleteEmployee={deleteEmployee}
              editEmployee={editEmployee}
              viewMode={viewMode}
            />
          </section>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 Employee Management System</p>
      </footer>
    </div>
  );
}

export default App;
