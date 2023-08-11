import { useState } from 'react';
import { useMovementsContext } from '../hooks/useMovementsContext';

const MovementForm = () => {
    const { dispatch } = useMovementsContext()

    const [sendingVessel, setSendingVessel] = useState('')
    const [receivingVessel, setReceivingVessel] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    // const [timeError, setTimeError] = useState(null)
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const movement = {sendingVessel, receivingVessel, startTime, endTime, category}

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
            setCategory('')
            setError(null)
            setEmptyFields([])
            // setTimeError(false)
            console.log('New Movement Added.', json)
            dispatch({type: 'CREATE_MOVEMENT', payload: json})
        }
    }

    return (
        <form id ="create" className="create" onSubmit={handleSubmit}>
            <h3>Add a New Movement</h3>

            <label>Sending Vessel:</label>
            <input
                type="string"
                onChange={(e) => setSendingVessel(e.target.value)}
                value={ sendingVessel }
                className={emptyFields.includes('sendingVessel') ? 'error' : '' }
            />

            <label>Receiving Vessel:</label>
            <input
                type="string"
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

            <label>Movement Type:</label>
            <select
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                value={ category }
                className={emptyFields.includes('category') ? 'error' : '' }
                form='create'>
                    <option value=''>Select Type</option>
                    <option value='Vessel'>Vessel</option>
                    <option value='Railcar'>Railcar</option>
                    <option value='Internal'>Internal</option>
                    <option value='Pipeline'>Pipeline</option>
            </select>

            <button>Add Movement</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default MovementForm;