import noProjectImg from "../assets/no-projects.png";

export default function NoProjectSelected({onSelect}) {
  return (
    <div className="items-center justify-end gap-4 my-4">
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectImg} />
      <h2>Select a project </h2>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      onClick={onSelect}>
        Create a new Project
      </button>
    </div>
  );
}
