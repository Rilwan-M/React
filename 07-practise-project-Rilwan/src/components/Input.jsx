export default function Input({ label, textArea, type }) {
  return (
    <div>
      <label>{label}</label>
      {textArea ? <textarea /> : <input type={type} />}
    </div>
  );
}
