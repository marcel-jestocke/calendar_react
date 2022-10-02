import axios from "axios";
import IOrder from "../interface/IOrder";

axios.defaults.headers.common = {
  Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImhpamFja2VySWQiOm51bGwsImlhdCI6MTY2NDQ0NjMyMCwiZXhwIjoxNjY5NjMwMzIwfQ.562BnvfTIcQIJrNS4usH7z_qCaZHrqgNBFeLlSx4C-I`,
};

export async function getAllOrders() {
  const response = await axios.get(
    "http://localhost:3000/api/orders/?adjacentMonths=2022-08-31"
  );
  console.log("response  ", response);
  return response.data;
}

export function isoToDate(string: string) {
  const dayAndHour = string.substr(0, 16);
  const date = dayAndHour.split("T");
  date.splice(2, 1);

  return date;
}
