import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function AddNewProject({ onCancel, onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      setModalIsOpen(true);
      return;
    }

    const newProject = {
      id: Math.random().toFixed(4),
      details: {
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
        tasks:[]
      },
    };
    onAdd(newProject);
    onCancel();
  }

  function handleModalOpen() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <Modal
        open={modalIsOpen}
        buttonCaption="Okay"
        onPressed={handleModalOpen}
      >
        <h2 className="text-xl font-bold text-stone-500 my-4 ">
          Invalid Input
        </h2>
        <p className="text-stone-400 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-400 mb-4">
          Please make sure to provide valid value
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-500 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
      </div>
      <div>
        <Input type="text" label="TITLE" ref={title} />
        <Input label="DESCRIPTION" textArea ref={description} />
        <Input type="date" label="DUE DATE" ref={dueDate} />
      </div>
    </div>
  );
}
