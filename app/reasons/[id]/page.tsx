"use client";

import { getReason, updateReason, deleteReason } from "@/lib/reasons";
import ReasonForm from "@/app/components/ReasonForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditReason({ params }: any) {
  const router = useRouter();
  const [reason, setReason] = useState<any>(null);

  useEffect(() => {
    getReason(params.id).then(setReason);
  }, [params.id]);

  const handleUpdate = async (data: any) => {
    await updateReason(params.id, data);
    router.push("/reasons");
  };

  const handleDelete = async () => {
    await deleteReason(params.id);
    router.push("/reasons");
  };

  if (!reason) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Edit Reason</h1>

      <ReasonForm initial={reason} onSubmit={handleUpdate} />

      <button
        onClick={handleDelete}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Delete
      </button>
    </div>
  );
}