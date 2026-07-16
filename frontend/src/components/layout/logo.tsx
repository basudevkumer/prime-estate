import Link from "next/link";
import { cn } from "@/utils";

export function Logo() {
  return (
    <Link
      href="/"
      className={cn("font-heading", "text-2xl", "font-bold", "text-gradient")}
    >
      Prime Estate
    </Link>
  );
}
