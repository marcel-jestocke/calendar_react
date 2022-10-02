import React from "react";
import Driver from "./Driver";
import Warehouse from "./Warehouse";
import { isoToDate } from "../services/Order.service";

function Order(props: any) {
  const date = isoToDate(props.date);

  return (
    <tr>
      <td>{props.id}</td>
      <td>
        jour:{date[0]}, heure:{date[1]}{" "}
      </td>
      <td>{props.type}</td>

      <Warehouse address={props.warehouses.address} />
      <tr>
        <Driver name={props.driverName} phone={props.driverPhone} />
      </tr>
    </tr>
  );
}

export default Order;
