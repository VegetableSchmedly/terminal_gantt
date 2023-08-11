import { useEffect } from 'react';
import { useMovementsContext } from '../hooks/useMovementsContext';


//components
import MovementDetails from "../components/MovementDetails"
import MovementForm from "../components/MovementForm";

const Home = () => {

    const { movements, dispatch } = useMovementsContext()

    useEffect(() => {
        const fetchMovements = async () => {
            const response = await fetch('/api/movements')
            const json = await response.json()

            if (response.ok) {
                dispatch({type:'SET_MOVEMENTS', payload: json})
            }
        }

        fetchMovements()
    }, [dispatch])


    return (
        <div className="home">
            <div className="movements">
              {movements && movements.map((movement) => (
                <MovementDetails key={movement._id} movement = {movement}/>
              ))}  
            </div>
            <MovementForm />
        </div>
    )
};


export default Home;