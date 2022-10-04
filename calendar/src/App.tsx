import { useEffect, useState } from "react";
import "./App.css";
import Order from "./components/Order";
import IOrder from "./interface/IOrder";
import { getAllOrders } from "./services/Order.service";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { LittleCalendar } from "./components/LittleCalendar";

function App() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }

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

  if (!active) {
    return (
      <div className="App">
        <button onClick={handleClick}>passer en mode calendrier</button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="center">date</TableCell>
                <TableCell align="right">statut</TableCell>
                <TableCell align="left">adresse d'entrée</TableCell>
                <TableCell align="right">conducteur</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  } else {
    return(
      <LittleCalendar/>
    );
    
  
  }
}

export default App;
