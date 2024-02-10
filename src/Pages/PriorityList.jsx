// PriorityListPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function PriorityList() {
    const location = useLocation();
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Assuming you pass the priority as a state
        const priority = location.state?.priority;
        const storedEntries = localStorage.getItem('entries');
        if (storedEntries) {
            const parsedEntries = JSON.parse(storedEntries).filter(entry => entry.selectedOption === priority);
            setEntries(parsedEntries);
        }
    }, [location]);

    return (
        <div>
            <h2>{location.state?.priority} Payments</h2>
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>
                        Item: {entry.inputString}, Cost: ${entry.inputNumber}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PriorityList;
