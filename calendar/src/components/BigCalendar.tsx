import FullCalendar, { CalendarApi } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import allLocales from "@fullcalendar/core/locales-all"
import { useEffect, useState, useRef } from "react";
import { getAllOrders } from "../services/Order.service";
import IOrder from "../interface/IOrder";
import IEvent from "../interface/IEvent";

function BigCalendar(props:any) {
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
  const dateValue = props.dateValue
  console.log(dateValue)

  // const calendar = new CalendarApi;
  
  // calendar.gotoDate(dateValue)
 
const events:Array<IEvent> = [] 
orders.map((order) => {
  events.push({
    title:String(order.id),
    start:(order.orderDateStart),
    end:(order.orderDateEnd),
  })
})

  
  return (
    <>
    
    <FullCalendar
    
    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
    events={events}
    headerToolbar={{
      left:"prev,next today",
      center:"title",
      right:"timeGridWeek,timeGridDay"
      
    }}
    locales={allLocales}
    firstDay={1}
    allDayContent={false}
    initialDate={dateValue}
    initialView={"timeGridDay"}
    selectable={false}
    editable={false}
    weekends={true}
    initialEvents={events}
    dayHeaderFormat={{
      week:"numeric",
      day:"2-digit",
    }}
    locale={"fr"}
    buttonText={{
      day:"jour",
      prev:"précédent",
      nextYear:"année suivante",
      next:"suivant",
      today:"actuel",
      week:"semaine",
    }}
    />
    </>
  );
}
export default BigCalendar;