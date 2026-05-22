import { typeList } from "@/data/personalities";
import type { TypeCode } from "@/data/questions";
import ResultClient from "./ResultClient";

export function generateStaticParams() {
  return typeList.map((type) => ({ type: type.toLowerCase() }));
}

export default async function ResultPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const typeCode = type.toUpperCase() as TypeCode;
  return <ResultClient typeCode={typeCode} />;
}
