import { Calendar } from 'react-big-calendar'
import { addHours } from "date-fns";

import { NavBar, CalendarEvent, CalendarModal } from "../"
import { localizer, getMessagesES } from '../../helpers'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react';

const myEventsList = [{
    title: 'Cumpleaños sultan',
    notes: 'comprar pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Joel'
    }
}]

export const CalendarPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }

        return {
            style
        }
    }

    const onDoubleclick = (event) => {
        console.log({ doubleClick: event })
    }

    const onSelect = (event) => {
        console.log({ click: event })
    }

    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event)
    }

    return (
        <>
            <NavBar />
            <Calendar
                culture='es'
                localizer={localizer}
                events={myEventsList}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={
                    {
                        event: CalendarEvent
                    }
                }
                onDoubleClickEvent={onDoubleclick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
            <CalendarModal/>
        </>
    )
}
