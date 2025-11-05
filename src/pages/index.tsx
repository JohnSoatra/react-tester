import { useEffect, useMemo, useState } from "react";

export default function Tester() {
  const [, setState] = useState(0);
  const person = useMemo(() => ({ name: 'Boby', age: 20 }), []);
  
  return (
    <div>
      
    </div>
  );
}
