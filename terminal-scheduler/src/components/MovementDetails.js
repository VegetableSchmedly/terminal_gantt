import { useMovementsContext} from '../hooks/useMovementsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const MovementDetails = ({ movement }) => {
    const { dispatch } = useMovementsContext()

    const handleClick = async () => {
        const response = await fetch('/api/movements/' + movement._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_MOVEMENT', payload: json})
        }
    }

    return (
        <div className="movement-details">
            <h4>Sending Vessel: {movement.sendingVessel}</h4>
            <p><strong>Receiving Vessel: {movement.receivingVessel}</strong></p>
            <p><strong>Start Time: { (new Date(movement.startTime).toLocaleString()) }</strong></p>
            <p><strong>End Time: { (new Date(movement.endTime).toLocaleString()) }</strong></p>
            <p>Movement entered {formatDistanceToNow(new Date(movement.createdAt), { addSufix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )


};


export default MovementDetails;