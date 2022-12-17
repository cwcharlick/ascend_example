export default function DropDown({ name, setSelection, options }) {
  return (
    <div className="dropdown">
      <select
        defaultValue={name}
        onChange={(e) => setSelection(e.target.value)}
      >
        <option value="All">{name}</option>
        {options.map((o) => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
