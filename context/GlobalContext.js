
import React, { createContext, useState } from 'react'

export const globalContext = createContext();

export const GlobalProvider = ({ children })=>{
    const [categoriesArray, setCategoriesArray] = useState([]);
    const [notesArray, setNotesArray] = useState([]);
    const [note, setNote] = useState ([]);
    const [category, setCategory] = useState([]);
    const [stateEdit, setStateEdit] = useState(false);
    const [searchElement, setSearchElement] = useState("");
    const [resultSearch, setResultSearch] = useState([]);
  return (
    <globalContext.Provider value={{category,setCategory, resultSearch, setResultSearch, searchElement, setSearchElement, categoriesArray, setCategoriesArray, notesArray, setNotesArray, note, setNote, stateEdit, setStateEdit}}>
        {children}
    </globalContext.Provider>
    
  )
}