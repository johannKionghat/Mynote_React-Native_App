import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormValueProvider = ({ children }) => {
  const [range, setRange] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  return (
    <FormContext.Provider value={{ range, setRange, sortBy, setSortBy }}>
      {children}
    </FormContext.Provider>
  );
};
