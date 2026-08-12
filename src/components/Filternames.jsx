import { useState } from "react";
const names = [
  "Bo",
  "Maximillian",
  "Kai",
  "Genevieve",
  "Mia",
  "Bartholomew",
  "Leo",
  "Alexandria",
  "Ian",
  "Christopher",
  "Eva",
  "Evangeline",
  "Ned",
  "Penelope",
  "Ray",
  "Wilhelmina",
  "Zoe",
  "Sebastian",
  "Joy",
  "Alexander",
];
function Filternames() {
  const [longnamesOnly, setLongnamesOnly] = useState(false);
  return (
    <div>
      <button onClick={() => setLongnamesOnly(!longnamesOnly)} className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-red-600 ">
        longnamesOnly
      </button>
      {(longnamesOnly ? names.filter((name) => name.length > 8) : names).map(
        (name) => (
          <p key={name}> {name}</p>
        ),
      )}
    </div>
  );
}
export default Filternames;
