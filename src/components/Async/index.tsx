import { useEffect, useState } from 'react';

export function Async() {
  const [isButtonInvisible, setIsButtonInvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonInvisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      { !isButtonInvisible && <button>Button</button> }
    </div>
  );
}
