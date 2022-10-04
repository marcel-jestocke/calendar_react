import Driver from "./Driver";
import Warehouse from "./Warehouse";
import { isoToDate } from "../services/Order.service";
import TableCell from "@mui/material/TableCell";
import { TableRow } from "@mui/material";

function Order(props: any) {
  const date = isoToDate(props.date);
  const jour = date[0].split("-").reverse().join("-");

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="right">{props.id}</TableCell>
      <TableCell align="right">
        jour:{jour}, heure:{date[1]}
      </TableCell>
      <TableCell align="right">{props.type}</TableCell>
      <TableCell align="right">
        <Warehouse address={props.warehouses.address} />
      </TableCell>
      <TableCell align="right">
        <Driver name={props.driverName} phone={props.driverPhone} />
      </TableCell>
    </TableRow>
  );
}

export default Order;
