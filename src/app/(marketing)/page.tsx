import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="p-24">
        <div className="space-y-4">
          <h1>Welcome to Pozko</h1>
          <Button asChild>
            <Link href={"/dashboard"}>Visit dashboard</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
