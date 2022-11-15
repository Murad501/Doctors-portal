import React, { useState } from 'react';
import { createContext } from "react";

export const darkMode = createContext()

const DarkContext = ({children}) => {

    const [dark, setDark] = useState(false)

    const darkInfo = {
        dark,
        setDark
    }
    return (
        <darkMode.Provider value={darkInfo}>
            {children}
        </darkMode.Provider>
    );
};

export default DarkContext;