"use client";

import { getReason, updateReason, deleteReason } from "@/lib/reasons";
import ReasonForm from "@/app/components/ReasonForm";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditReason() {
  const router = useRouter();
  const { id } = useParams(); // <-- FIX HERE
  const [reason, setReason] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    getReason(id as any).then(setReason);
  }, [id]);

  const handleUpdate = async (data: any) => {
    await updateReason(Number(id), data);
    router.push("/");
  };

  const handleDelete = async () => {
    await deleteReason(Number(id));
    router.push("/");
  };

  if (!reason) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 space-y-4 mt-10">
      <h1 className="text-2xl font-bold">ویرایش دلیل</h1>

      <ReasonForm initial={reason} onSubmit={handleUpdate} />

      <button
        onClick={handleDelete}
        className="bg-pink-400 w-full max-w-40 hover:bg-pink-500 text-white py-3 px-8 rounded-2xl shadow-sm hover:shadow-md transition"
      >
        حذف دلیل
      </button>
    </div>
  );
}