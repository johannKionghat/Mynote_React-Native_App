
import React, { createContext, useState } from 'react'

export const databaseContext = createContext();

export const DatabaseProvider = ({ children })=>{
    const [categoriesArray, setCategoriesArray] = useState([]);
    const [notesArray, setNotesArray] = useState([]);
  return (
    <databaseContext.Provider value={{categoriesArray, setCategoriesArray, notesArray, setNotesArray}}>
        {children}
    </databaseContext.Provider>
    
  )
}