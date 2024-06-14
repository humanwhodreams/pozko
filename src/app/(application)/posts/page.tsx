import { DataTable } from "@/components/tables/posts/data-table";
import { Post } from "@/types/posts";
import { columns } from "@/components/tables/posts/columns";
import posts from "@/data/posts";

async function getData(): Promise<Post[]> {
  return posts;
}
export default async function Page() {
  const data = await getData();
  
  return (
    <section>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
