import { useMovementsContext} from '../hooks/useMovementsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'

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
            <h4><strong>{movement.category}</strong></h4>
            <p>Sending Vessel: <strong>{movement.sendingVessel}</strong></p>
            <p>Receiving Vessel: <strong>{movement.receivingVessel}</strong></p>
            <p>Start Time: <strong>{ (new Date(movement.startTime).toLocaleString()) }</strong></p>
            <p>End Time: <strong>{ (new Date(movement.endTime).toLocaleString()) }</strong></p>
            <p>Movement entered {formatDistanceToNow(new Date(movement.createdAt), { addSufix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete </span>
        </div>
    )


};


export default MovementDetails;