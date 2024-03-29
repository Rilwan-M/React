 import { forwardRef } from "react";
 
 const Input = forwardRef(function Input({ label, textArea, type }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none ";
  return (
    <p className="flex flex-col gap-3 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textArea ? (
        <textarea className={classes} ref={ref}/>
      ) : (
        <input type={type} className={classes} ref={ref}/>
      )}
    </p>
  );
})


export default Input;