import React from 'react'

function Buttons() {
  return (
    <div className="flex flex-col justify-center gap-4 w-[30%]">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs"
      />
      <div className="btn btn-primary btn-lg">Add</div>
      <div className="btn btn-secondary btn-lg">Edit</div>
    </div>
  );
}

export default Buttons