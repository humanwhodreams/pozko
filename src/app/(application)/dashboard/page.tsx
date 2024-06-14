import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { DataTable } from "@/components/tables/posts/data-table";
import type { Post } from "@/types/posts";
import { PostChart } from "@/components/charts/post-chart";
import { columns } from "@/components/tables/posts/columns";
import posts from "@/data/posts";
import stats from "@/data/stats";

async function getData(): Promise<Post[]> {
  return posts;
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <section>
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            return (
              <Card key={index}>
                <CardHeader className="text-muted-foreground">
                  <CardTitle className="flex items-center">
                    <stat.icon className="mr-2" />
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <h3>{stat.count}</h3>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>
        <section>
          <div className="pt-10">
            <PostChart />
          </div>
        </section>
        <section>
          <div className="py-10">
            <DataTable columns={columns} data={data} />
          </div>
        </section>
      </section>
    </>
  );
}
