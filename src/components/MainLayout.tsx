import { useRef, useState } from "react";
import { NavigateFunction, Outlet, useNavigate } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
