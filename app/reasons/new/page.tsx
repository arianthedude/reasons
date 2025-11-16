"use client";

import { createReason } from "@/lib/reasons";
import ReasonForm from "@/app/components/ReasonForm";
import { useRouter } from "next/navigation";

export default function NewReason() {
  const router = useRouter();

  const handleCreate = async (data: any) => {
    await createReason(data);
    router.push("/");
  };

  return (
    <div className="p-8 flex flex-col max-w-3xl mx-auto min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold mb-4"> افزودن دلیل جدید</h1>
      <ReasonForm onSubmit={handleCreate} />
    </div>
  );
}