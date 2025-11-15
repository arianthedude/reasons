"use client";

import { createReason } from "@/lib/reasons";
import ReasonForm from "@/app/components/ReasonForm";
import { useRouter } from "next/navigation";

export default function NewReason() {
  const router = useRouter();

  const handleCreate = async (data: any) => {
    await createReason(data);
    router.push("/reasons");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Create Reason</h1>
      <ReasonForm onSubmit={handleCreate} />
    </div>
  );
}