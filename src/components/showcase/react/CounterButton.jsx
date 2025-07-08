import { useState } from 'react';

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <button className='btn btn-primary' onClick={() => setCount(count + 1)}>
      Contador: {count}
    </button>
  );
}