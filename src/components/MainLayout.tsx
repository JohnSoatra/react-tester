import { useRef, useState } from "react";
import { NavigateFunction, Outlet, useNavigate } from "react-router";
import { registerTools } from "react-use-tools";

declare global {
  interface Tools {
    name: string;
    setName: () => void;
    age: number;
    navigate: NavigateFunction;
    job: { title: string },
    setJob: (title: string) => void;
  }
}

export default function MainLayout() {
  const [name, setName] = useState('John Soatra');
  const [age, setAge] = useState(0);
  const [job, setJob] = useState({ title: 'test' });
  const navigate = useNavigate();

  registerTools({
    name,
    setName: () => {
      setName(n => n + '1');
    },
    get age() {
      return age;
    },
    set age(v) {
      setAge(v);
    },
    navigate,
    job,
    setJob(title) {
      setJob({ title });
    },
  });

  return (
    <div>
      <Outlet />
    </div>
  )
}
