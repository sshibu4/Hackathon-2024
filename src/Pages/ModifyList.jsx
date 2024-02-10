import React from 'react';
import '../Styles/ModifyList.css';
import { Button, Stack } from '@chakra-ui/react'; // Import Stack component
import { ChakraProvider } from '@chakra-ui/react';
import money from '../assets/money.mp4';
import { useNavigate } from 'react-router-dom';


function ModifyList() {
    const navigate = useNavigate();
    return (
        <ChakraProvider>

            <div className="background-video">
                <video src={money} loop autoPlay muted id="bg-video">

                </video>
            </div>

            <div className='content'>
                <Stack className='stack' direction='column' spacing={20}>
                    <Button colorScheme='teal' variant='solid' _hover={{ transform: 'scale(1.5)' }} onClick = {() => navigate('/AddItems')}>
                        Add Items To The List 
                    </Button>
                    <Button colorScheme='teal' variant='solid' _hover={{ transform: 'scale(1.5)' }} onClick = {() => navigate('/RemoveItems')}>
                        Remove Items From the List/Mark Items as Bought
                    </Button>
                </Stack>
            </div>
        </ChakraProvider>
    );
}

export default ModifyList;