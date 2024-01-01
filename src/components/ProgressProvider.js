import { useState, useEffect } from "react";

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart);

  useEffect(() => {
    if (value < valueEnd) {
      const intervalId = setInterval(() => {
        setValue((prevValue) => prevValue + 1);
      }, 20);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [value, valueEnd]);

  return children(value);
};

export default ProgressProvider;
