"use client";

import { useState } from "react";

export default function ReasonForm({ initial, onSubmit }: any) {
  const [reason, setReason] = useState(initial?.reason || "بد");
  const [description, setDescription] = useState(initial?.description || "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ reason, description });
      }}
      className="space-y-4 max-w-md"
    >
      {/* Dropdown */}
      <select
        className="border border-blue-300 bg-blue-50 text-blue-700 p-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      >
        <option value="خوب">خوب</option>
        <option value="بد">بد</option>
      </select>

      <textarea
        className="border text-sm min-h-40 border-pink-300 bg-pink-50 text-pink-700 p-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
        placeholder="توضیحات"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="bg-purple-400 w-full max-w-40 hover:bg-purple-500 transition text-white py-3 px-8 rounded-2xl shadow-sm hover:shadow-md"
        type="submit"
      >
        ذخیره
      </button>
    </form>
  );
}

