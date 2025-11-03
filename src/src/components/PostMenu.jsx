import React from 'react';
import useCurrent from 'react-use-current';

export default function PostMenu({ onEdit, onDelete }) {
  const state = useCurrent({ visible: false });
  return (
    <div className="relative inline-block">
      <button className="px-2 text-gray-600" onClick={() => (state.value.visible = !state.value.visible)}>⋮</button>
      <div className={`absolute right-0 mt-2 bg-white border rounded shadow z-10 ${state.value.visible ? '' : 'hidden'}`}>
        <button className="block px-4 py-2 w-full text-left hover:bg-gray-100" onClick={onEdit}>Edit</button>
        <button className="block px-4 py-2 w-full text-left hover:bg-gray-100" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
