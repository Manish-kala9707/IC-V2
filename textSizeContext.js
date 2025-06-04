import React, { createContext, useContext, useState } from 'react';


const TextSizeContext = createContext();

export const TextSizeProvider = ({ children, maxSize = 18 }) => {
  const [textSize, setTextSize] = useState(16);

  const increaseTextSize = () => {
    if (textSize < maxSize) {
      setTextSize(textSize+1);
    }
  };

  const resetTextSize = () => {
    setTextSize(16);
  };

  const decreaseTextSize = () => {
    setTextSize(Math.max(textSize - 1, 14));
  };

  return (
    <TextSizeContext.Provider
      value={{ textSize, increaseTextSize, resetTextSize, decreaseTextSize }}
    >
      {children}
    </TextSizeContext.Provider>
  );
};


export const useTextSize = () => {
  return useContext(TextSizeContext);
};
