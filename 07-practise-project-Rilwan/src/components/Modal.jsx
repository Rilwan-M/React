import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, buttonCaption, onPressed }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog">
        <button onClick={onPressed}>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
