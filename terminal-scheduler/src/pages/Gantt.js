import React, { useState, useEffect } from "react";
import MyGantt from '../components/GanttChart'

const Gantt = () => {
    const [movements, setMovements] = useState(null);

    useEffect(() => {
        const fetchMovements = async () => {
            const response = await fetch('/api/movements');
            const json = await response.json();

            if (response.ok) {
                setMovements(json);
            }
        };

        fetchMovements();
    }, []);

    return (
        <div>
            <MyGantt movements={movements} />
        </div>
    );
};

export default Gantt;
