import TableCell from "@mui/material/TableCell";

function Warehouse(props: any) {
  return (
    <div>
      <TableCell align="right">{props.address}</TableCell>
    </div>
  );
}

export default Warehouse;
