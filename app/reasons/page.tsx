import { getReasons } from "@/lib/reasons";
import Link from "next/link";

export default async function ReasonsPage() {
  const reasons = await getReasons();
  console.log("Reasons:", reasons);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Reasons</h1>

      <Link
        href="/reasons/new"
        className="bg-green-600 text-white px-4 py-2 rounded inline-block mb-4"
      >
        + Add New
      </Link>

      <ul className="space-y-4">
        {reasons.map((r: any) => (
          <li key={r.id} className="border p-4 rounded shadow">
            <Link href={`/reasons/${r.id}`} className="text-xl font-semibold">
             {r.id} - {r.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}