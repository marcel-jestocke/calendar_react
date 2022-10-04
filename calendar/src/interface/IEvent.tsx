export default interface IEvent{
    title: string;
    start: string;
    end:string;
    extendedProps?:{
        driverName?:string
        driverPhone?:string;
    }
  }