import React from 'react';
import '../Styles/MainPage.scss';
import { useNavigate, Link } from 'react-router-dom';
import ViewCurrentList from './ViewCurrentList'
import ChatAssistant from '../ChatAssistant';
//import '../Styles/ViewCurrentList.scss';
import { ChakraProvider } from '@chakra-ui/react';  // added extra
import { Helmet } from 'react-helmet';  // added extra




function MainPage() {
    const navigate = useNavigate();

    return (
        <>
            <ChakraProvider>
                <Helmet>


                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch+Pop&family=Satisfy&family=Sixtyfour&display=swap" rel="stylesheet" />

                    <style>{`
                        h1 {
                            font-family: 'Satisfy', cursive;
                            margin-top: 200px;
                            font-size: 100px !important;
            
                        }
                    `}</style>
                </Helmet>

                <div className='container'>
                    <h1 className='title'>
                        <span className="title-word title-word-1">Welcome  </span>
                        <span className="title-word title-word-2">to  </span>
                        <span className="title-word title-word-3">Finance  </span>
                        <span className="title-word title-word-4">Manager</span>
                    </h1>
                    <div className='options'>
                        <button onClick={() => navigate('/ViewCurrentList')}><span style={{ fontFamily: 'cursive', fontSize: '25px', fontWeight: 'bolder' }}>View Current Items List</span></button>
                        <button onClick={() => navigate('/ModifyList')}><span style={{ fontFamily: 'cursive', fontSize: '25px', fontWeight: 'bolder' }}>Modify The Existing List</span></button>
                        <button onClick={() => navigate('/ChatAssistant')}><span style={{ fontFamily: 'cursive', fontSize: '25px', fontWeight: 'bolder' }}>Seek Advice</span></button>
                    </div>
                </div>
            </ChakraProvider>
        </>
    );
}

export default MainPage;
