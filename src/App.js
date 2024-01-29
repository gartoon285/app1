import React from 'react';
import { userContext } from './context';
import Context from './context-content';
export default function App(){
    return (
        <userContext.Provider value={'Tom Jerry'}>
            <Context/>
        </userContext.Provider>
    )
}