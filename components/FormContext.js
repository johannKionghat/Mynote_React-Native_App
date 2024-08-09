import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormValueProvider = ({ children }) => {
  const [range, setRange] = useState("Ascending");
  const [sortBy, setSortBy] = useState("Name");

  return (
    <FormContext.Provider value={{ range, setRange, sortBy, setSortBy }}>
      {children}
    </FormContext.Provider>
  );
};
