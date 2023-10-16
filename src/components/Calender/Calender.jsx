import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "../../utils/httpreq";
import "./Calender.css"

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);

    useEffect(() => {
        let count = 0;
        let totalPages = 0;

        axios
            .get(`?per_page=100&order=desc&page=1`)
            .then(async (res) => {
                console.log(res.headers)
                totalPages = res.headers["x-wp-totalpages"];

                const eventData = [];

                res.data.forEach((event) => {

                    count++;

                    eventData.push({
                        id: event.id,
                        title: event.title.rendered,
                        date: event.date,
                        url: event.link,
                    });
                });

                if (totalPages > 1) {
                    for (let i = 2; i <= totalPages; i++) {
                        axios
                            .get(`?per_page=100&order=desc&page=${i}`)
                            .then((res) => {
                                res.data.forEach((event) => {
                                    count++;
                                    eventData.push({
                                        id: event.id,
                                        title: event.title.rendered,
                                        date: event.date,
                                        url: event.link,
                                    });
                                });

                                console.log(count);
                            })
                            .catch((err) => console.log(err));
                    }
                }


                console.log(count);
                setIsAllDataLoaded(true);
                setEvents(eventData);
                console.log(eventData);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="mt-5">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
            />

        </div>
    );
};

export default Calendar;
