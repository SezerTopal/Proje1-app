import { useState } from "react";
import "./App.css";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import CustomerList from "./components/CustomerList/CustomerList";

function App() {
  const [customers, setCustomers] = useState([]);

  const AddNewCustomer = newCustomer => {
    /*     setCustomers([...customers, newCustomer]);
     */ setCustomers(prevState => [newCustomer, ...prevState]);
  };
  return (
    <div className="App">
      <h1>Customer Manage Sytem</h1>
      <CustomerForm addNewCustomer={AddNewCustomer} />
      {customers.length === 0 && "There are no customers..."}
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </div>
  );
}

export default App;
