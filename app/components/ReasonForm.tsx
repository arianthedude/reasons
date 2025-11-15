"use client";

import { useState } from "react";

export default function ReasonForm({ initial, onSubmit }: any) {
  const [reason, setReason] = useState(initial?.reason || "");
  const [description, setDescription] = useState(initial?.description || "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ reason, description });
      }}
      className="space-y-4 max-w-md"
    >
      <input
        className="border p-2 w-full rounded"
        placeholder="Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <textarea
        className="border p-2 w-full rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white py-2 px-4 rounded"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}