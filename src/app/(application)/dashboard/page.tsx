import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cone, MessageCircleMore, Newspaper, User } from "lucide-react";

const adminStats = [
  {
    icon: Newspaper,
    title: "Posts",
    count: "12K",
  },
  {
    icon: Cone,
    title: "Categories",
    count: "141",
  },
  {
    icon: User,
    title: "Users",
    count: "1k",
  },
  {
    icon: MessageCircleMore,
    title: "Comments",
    count: "5k",
  },
];

export default function Page() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {adminStats.map((stat, index) => {
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
        </div>
      </section>
    </>
  );
}
