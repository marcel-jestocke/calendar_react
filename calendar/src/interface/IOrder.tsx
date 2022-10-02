export default interface IOrder {
    id: number,
  uuid: string,
  orderDateStart: string,
  orderDateEnd: string,
  orderDateDone: string,
  driverName: string,
  driverPhone: string,
  driverLicensePlate: string,
  driverOnTime: boolean,
  messageToWarehouse: string,
  messageToCustomer: string,
  deliveryInstructions: string,
  cancellationReasons: string,
  proofRequestSent: boolean,
  pastServiceMailSent: boolean,
  orderStatus: string,
  orderType: string,
  createDate: string,
  updateDate: string,
  customer: Array<string|number|boolean>
  warehouse: Array<string|number|boolean>
  }