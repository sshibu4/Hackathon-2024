import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap'
import '../Styles/ViewCurrentList.scss';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ViewCurrentList() {

    const navigate = useNavigate();

    const [entries, setEntries] = useState([]);
    const [selectedPriority, setSelectedPriority] = useState('');

    useEffect(() => {
        // Fetch entries from localStorage on component mount
        const storedEntries = localStorage.getItem('entries');
        if (storedEntries) {
            const parsedEntries = JSON.parse(storedEntries);
            setEntries(parsedEntries);
        }
    }, []);

    // Function to group entries by their selectedOption (necessity)
    const groupByNecessity = (entries) => {
        return entries.reduce((group, entry) => {
            const { selectedOption } = entry;
            group[selectedOption] = group[selectedOption] ?? [];
            group[selectedOption].push(entry);
            return group;
        }, {});
    };

    const groupedEntries = groupByNecessity(entries);

    const handlePrioritySelection = (priority) => {
        navigate('/priority-list', { state: { priority } });
    };

    return (
        <>
            <div className='container1'>

                <div className='title1'>
                    <p>Teen Finance Manager</p>
                </div>

                <div className='options1'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/high_priority.png" />
                        <Card.Body>
                            <Card.Title>High Priority Payments</Card.Title>
                            <Card.Text>
                                The payments that you have to make.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handlePrioritySelection('Critical')}>List</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/medium_priority.png" />
                        <Card.Body>
                            <Card.Title>Standard Payments</Card.Title>
                            <Card.Text>
                                The payments that you should eventually make, but can wait
                            </Card.Text>
                            <Button variant="primary" onClick={() => handlePrioritySelection('Moderately Important')}>List</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/low_priority.png" />
                        <Card.Body>
                            <Card.Title>Low Priority Payments</Card.Title>
                            <Card.Text>
                                The payments which are optional. You can decide whether or not to make those payments
                            </Card.Text>
                            <Button variant="primary" onClick={() => handlePrioritySelection('Not Required')} >List</Button>
                        </Card.Body>
                    </Card>

                </div>

                <div className='balance1'>
                    {/* <p>Total Amount Left In Your Account: $</p> */}
                </div>

            </div>
        </>
    );
}

export default ViewCurrentList;
