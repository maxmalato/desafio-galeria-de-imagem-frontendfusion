import { useState } from "react";

const Combobox = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <select
        className="px-4 py-2 border rounded-lg shadow-sm"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="" disabled>
          Categorias
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Combobox;
