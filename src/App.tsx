import React, { useEffect } from "react";
import useCurrent from "react-use-current";

export default function App() {
  const down = useCurrent(false);
  const person = useCurrent<{name: string, job?: { year: number }}>()
  // const coordinate = useCurrent({ x: 100, y: 0 });
  // const offset = useCurrent({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (evt: MouseEvent) => {
      if (!down.value) return;
      // coordinate.value = {
      //   x: evt.clientX - offset.value.x,
      //   y: evt.clientY - offset.value.y,
      // };
    };

    const handleMouseUp = () => (down.value = false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => { person.value = {
    name: 'sdf', job: { year: 200 }
  } }, [])

  return (
    <div className="bg-gray-200 p-[20px] min-h-[300px] relative">
      <p>coordinate = {person.value?.name}</p>
      <p>job year = {person.value?.job?.year}</p>
      {/* <div
        className="bg-red-600 size-[100px] rounded"
        style={{
          position: "absolute",
          left: coordinate.value.x,
          top: coordinate.value.y,
        }}
        onMouseDown={(evt) => {
          down.value = true;
          const rect = evt.currentTarget.getBoundingClientRect();
          offset.value = {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top,
          };
        }}
      /> */}
    </div>
  );
}
