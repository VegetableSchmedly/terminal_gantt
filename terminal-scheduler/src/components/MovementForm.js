import { useState } from 'react';
import { useMovementsContext } from '../hooks/useMovementsContext';

const MovementForm = () => {
    const { dispatch } = useMovementsContext()

    const [sendingVessel, setSendingVessel] = useState('')
    const [receivingVessel, setReceivingVessel] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    // const [timeError, setTimeError] = useState(null)
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const movement = {sendingVessel, receivingVessel, startTime, endTime}

        const response = await fetch('/api/movements', {
            method: 'POST',
            body: JSON.stringify(movement),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
            // setTimeError(json.timeError)
        }
        if (response.ok) {
            setSendingVessel('')
            setReceivingVessel('')
            setStartTime('')
            setEndTime('')
            setError(null)
            setEmptyFields([])
            // setTimeError(false)
            console.log('New Movement Added.', json)
            dispatch({type: 'CREATE_MOVEMENT', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Movement</h3>

            <label>Sending Vessel:</label>
            <input
                type="text"
                onChange={(e) => setSendingVessel(e.target.value)}
                value={ sendingVessel }
                className={emptyFields.includes('sendingVessel') ? 'error' : '' }
            />

            <label>Receiving Vessel:</label>
            <input
                type="text"
                onChange={(e) => setReceivingVessel(e.target.value)}
                value={ receivingVessel }
                className={emptyFields.includes('receivingVessel') ? 'error' : '' }
            />

            <label>Start Time:</label>
            <input
                type="datetime-local"
                onChange={(e) => setStartTime(e.target.value)}
                value={ startTime }
                className={emptyFields.includes('startTime') ? 'error' : '' }
            />

            <label>End Time:</label>
            <input
                type="datetime-local"
                onChange={(e) => setEndTime(e.target.value)}
                value={ endTime }
                className={emptyFields.includes('endTime') ? 'error' : '' }
            />  

            <button>Add Movement</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default MovementForm;