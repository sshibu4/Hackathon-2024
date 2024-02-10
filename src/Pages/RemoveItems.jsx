import React, { useState, useEffect } from 'react';
import '../Styles/RemoveItems.scss'

function RemoveItems() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Fetch and sort entries from localStorage on component mount
        const storedEntries = localStorage.getItem('entries');
        if (storedEntries) {
            const parsedEntries = JSON.parse(storedEntries);
            // Sort entries by necessity for grouping
            parsedEntries.sort((a, b) => a.selectedOption.localeCompare(b.selectedOption));
            setEntries(parsedEntries);
        }
    }, []);

    const removeItem = (indexToRemove) => {
        const updatedEntries = entries.filter((_, index) => index !== indexToRemove);
        setEntries(updatedEntries);
        localStorage.setItem('entries', JSON.stringify(updatedEntries));
    };

    // Function to group entries by their selectedOption
    const groupByNecessity = (entries) => {
        return entries.reduce((group, entry) => {
            const { selectedOption } = entry;
            group[selectedOption] = group[selectedOption] ?? [];
            group[selectedOption].push(entry);
            return group;
        }, {});
    };

    const groupedEntries = groupByNecessity(entries);

    return (
        <div className='divBox'>
            <h2>Items List</h2>
            {Object.entries(groupedEntries).map(([necessity, items]) => (
                <div key={necessity}>
                    <h3>{necessity}</h3>
                    <ul>
                        {items.map((entry, index) => (
                            <li key={index}>
                                Item: {entry.inputString}, Cost: ${entry.inputNumber}
                                <button onClick={() => removeItem(entries.indexOf(entry))}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default RemoveItems;
