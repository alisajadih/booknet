import { useEffect, useState } from "react";



export function useDelayedValue(value, options) {
  const { positiveEdgeDelay = 0, negativeEdgeDelay = 0 } = options;

  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    if (value) {
      // positive-edge
      const timeoutId = setTimeout(() => {
        setDelayedValue(value);
      }, positiveEdgeDelay);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      // negative-edge
      const timeoutId = setTimeout(() => {
        setDelayedValue(value);
      }, negativeEdgeDelay);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [value, positiveEdgeDelay, negativeEdgeDelay]);

  return delayedValue;
}
