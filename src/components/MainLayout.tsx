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
  

  return (
    <div>
      <Outlet />
    </div>
  )
}
