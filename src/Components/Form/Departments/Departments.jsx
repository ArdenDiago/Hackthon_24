export default function Departments({indexValue, text}, selected) {
  return (
    <>
      <option className="dropdown-item" value={indexValue} onChange={() => selected}>
        {text}
      </option>
    </>
  );
}
