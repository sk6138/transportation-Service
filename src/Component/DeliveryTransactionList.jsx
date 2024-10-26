import React from 'react';
import '../Css/DeliveryTransactionList.css';

const transactions = [
  { id: 'DEL001', name: 'John Doe', time: '2024-10-25 14:30', price: 150.0, bookingPrice: 30.0, status: 'Completed' },
  { id: 'DEL002', name: 'Jane Smith', time: '2024-10-26 09:00', price: 200.0, bookingPrice: 40.0, status: 'Pending' },
  { id: 'DEL003', name: 'Mike Johnson', time: '2024-10-27 12:00', price: 250.0, bookingPrice: 50.0, status: 'In Progress' },
  
];

const DeliveryTransactionList = () => {
  return (
    <div className="delivery-transaction-list">
      <h1>Goods Delivery Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Name</th>
            <th>Delivery Time</th>
            <th>Price ($)</th>
            <th>Booking Price ($)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.name}</td>
              <td>{transaction.time}</td>
              <td>{transaction.price.toFixed(2)}</td>
              <td>{transaction.bookingPrice.toFixed(2)}</td>
              <td className={`status ${transaction.status.toLowerCase().replace(' ', '-')}`}>
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryTransactionList;
