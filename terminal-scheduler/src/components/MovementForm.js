import { useState } from 'react';
import { useMovementsContext } from '../hooks/useMovementsContext';

import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Form } from 'react-bootstrap'

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
        <Form id ="create" className="create" onSubmit={handleSubmit}>
            <h3>Add a New Movement</h3>
            <Form.Group>
            <Form.Label>Sending Vessel:</Form.Label>
            <Form.Control
                size='lg'
                placeholder='Tank, Ship, Barge, etc.'
                type="string"
                onChange={(e) => setSendingVessel(e.target.value)}
                value={ sendingVessel }
                className={emptyFields.includes('sendingVessel') ? 'error' : '' }
            />

            <Form.Label>Receiving Vessel:</Form.Label>
            <Form.Control
                size='lg'
                placeholder='Tank, Ship, Barge, etc.'
                type="string"
                onChange={(e) => setReceivingVessel(e.target.value)}
                value={ receivingVessel }
                className={emptyFields.includes('receivingVessel') ? 'error' : '' }
            />

            <Form.Label>Start Time:</Form.Label>
            <Form.Control
                size='lg'
                type="datetime-local"
                onChange={(e) => setStartTime(e.target.value)}
                value={ startTime }
                className={emptyFields.includes('startTime') ? 'error' : '' }
            />

            <Form.Label>End Time:</Form.Label>
            <Form.Control
                size='lg'
                type="datetime-local"
                onChange={(e) => setEndTime(e.target.value)}
                value={ endTime }
                className={emptyFields.includes('endTime') ? 'error' : '' }
            />
            <Form.Label >Movement Type</Form.Label>
            <Form.Select size='lg'
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
            </Form.Select>
            </Form.Group>

            <Button size='lg' variant='primary' type='submit'>Add Movement</Button>
            {error && <div className="error">{error}</div>}
        </Form>

    )
}

export default MovementForm;