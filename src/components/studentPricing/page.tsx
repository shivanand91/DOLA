"use client"
import { useState } from "react";

const libraries = [
  { name: "ABC Library", price: 20, wifi: true, ac: false, computer: true, books: false },
  { name: "XYZ Library", price: 15, wifi: true, ac: true, computer: false, books: true },
  { name: "LMN Library", price: 25, wifi: true, ac: true, computer: true, books: true },
];

const StudentPricing = () => {
  const [hours, setHours] = useState(1);
  const [selectedLibrary, setSelectedLibrary] = useState(libraries[0]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Find the Best Library</h2>
      <label className="block mb-2">Select Library</label>
      <select
        className="w-full p-2 border rounded"
        onChange={(e) => setSelectedLibrary(libraries.find(lib => lib.name === e.target.value) || libraries[0])}
      >
        {libraries.map((lib) => (
          <option key={lib.name} value={lib.name}>{lib.name} - ₹{lib.price}/hr</option>
        ))}
      </select>
      <label className="block mt-4">Study Hours: {hours}</label>
      <input
        type="range"
        min="1"
        max="15"
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
        className="w-full"
      />
      <div className="mt-4 p-3 bg-gray-100 rounded-md text-center">
        <strong>Total Cost: ₹{selectedLibrary.price * hours}</strong>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">View Libraries</button>
    </div>
  );
};

export default StudentPricing;
