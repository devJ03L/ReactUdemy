import { addHours } from "date-fns"
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabDelete = () => {

    const { startDeletingEvent, activeEvent } = useCalendarStore()
    const handleDelete = () => {
        startDeletingEvent()
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handleDelete}
            style={{ display: !!activeEvent ? '' : 'none' }}>
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}
