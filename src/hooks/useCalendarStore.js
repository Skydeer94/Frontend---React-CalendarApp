import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { onCloseDateModal } = useSelector( state => state.ui )

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const startSavingEvent = async( calendarEvent ) => {
        //TODO: llegar al backend

        //Todo bien
        if ( calendarEvent._id ) {
            // Actualizando
            dispatch( onUpdateEvent({ ...calendarEvent }));
        } else {
            // creando
            dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) );;
        }
    }


    const startDeletingEvent = () => {
        dispatch( onDeleteEvent() );
    }

    const isModalClose = () => {
        dispatch( onCloseDateModal() );
    }


    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        isModalClose,
    }
}
