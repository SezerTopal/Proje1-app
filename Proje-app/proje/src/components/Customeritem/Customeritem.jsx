const CustomerItem = ({ customer, handleDelete }) => {
  return (
    <li className="customer-item">
      <div className="customer-info">
        <img
          src="https://tr.m.wikipedia.org/wiki/Dosya:Red_Kitten_01.jpg"
          alt=""
          className="customer-avatar"
        />
        <span className="customer-name">{customer.customerName}</span>
      </div>
      <button className="delete-button" onClick={() => handleDelete(customer)}>
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
};

export default CustomerItem;
