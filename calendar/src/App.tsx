import  { useEffect, useState } from "react";
import "./App.css";
import Order from "./components/Order";
import IOrder from "./interface/IOrder";
import { getAllOrders } from "./services/Order.service";



function App() {
  const [orders, setOrders] = useState<IOrder[]>([]);

  const handleRequest = async () => {
    const response = await getAllOrders();
    setOrders(response.results);
  };
  useEffect(() => {
    try {
      handleRequest();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <td>id</td>
            <td>date </td>
            <td>statut </td>
            <td>adresse d'entrée </td>
            <td>conducteur</td>
          </tr>

          {orders.map((order) => {
            return (
              <Order
                key={order.id}
                id={order.id}
                date={order.orderDateStart}
                type={order.orderType}
                warehouses={order.warehouse}
                driverName={order.driverName}
                driverPhone={order.driverPhone}
              />
            );
          })}
        </table>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
