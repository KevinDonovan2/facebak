import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<h1 className='text-orange-500 text-center'>Hello world</h1>}/>
            </Routes>
        </>
    );
}

export default Router;