import React, { useState } from 'react';
import '../Styles/AddItems.scss'

function AddItems() {
    const [entries, setEntries] = useState([]);
    const [inputString, setInputString] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [inputNumber, setInputNumber] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page

        // Create an entry and add it to the entries array
        const newEntry = { inputString, selectedOption, inputNumber: parseInt(inputNumber, 10) };
        const updatedEntries = [...entries, newEntry]; // Correctly capture the updated entries array
        setEntries(updatedEntries); // Update state

        localStorage.setItem('entries', JSON.stringify(updatedEntries));

        // Reset the input fields
        setInputString('');
        setSelectedOption('');
        setInputNumber('');
    };

    return (
        <div className='add-items-container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Enter the item you want to add to the list:
                        <input
                            type="text"
                            value={inputString}
                            onChange={(e) => setInputString(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Choose an option:
                        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="">Select the Importance</option>
                            <option value="Critical">Critical</option>
                            <option value="Moderately Important">Moderately Important</option>
                            <option value="Not Required">Not Required</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Approximate cost? $
                        <input
                            type="number"
                            value={inputNumber}
                            onChange={(e) => setInputNumber(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Add Item</button>
            </form>

            {/* Optionally, display the entries */}
            <div className='entries-list'>
                <h2>Entries</h2>
                <ul>
                    {entries.map((entry, index) => (
                        <li key={index}>
                            Item: {entry.inputString}, Importance: {entry.selectedOption}, Cost: $ {entry.inputNumber}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AddItems;
