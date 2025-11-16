import { getReasons } from "@/lib/reasons";
import Link from "next/link";

export default async function ReasonsPage() {
  const reasons = await getReasons();
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex justify-between mt-5">
        <h1 className="text-3xl font-bold mb-4 font-myfont "> یادآوری ✨</h1>
        <Link
          href="/reasons/new"
          className="bg-emerald-500 cursor-pointer text-white px-4 py-2 rounded inline-block mb-4"
        >
          + افزودن دلیل جدید
        </Link>
      </div>

    
      <ul className="space-y-4 fade-in">
        {reasons.map((r:any, i:number) => (
          <li
            key={r.id}
            className="border w-full overflow-hidden border-purple-200 bg-white/40 backdrop-blur-md p-4 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <Link href={`/reasons/${r.id}`}>
              <div className="flex w-full items-center gap-4">
                <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-xl shadow-sm">
                  {i + 1}
                </span>

                <div className="flex w-full justify-between ">
                  <p className="text-xs w-fit font-semibold text-purple-700">
                    {r.description}
                  </p>
                  <p className="text-[8px] text-purple-500">{r.reason === "بد" ? "❌" : ""}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
