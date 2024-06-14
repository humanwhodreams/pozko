import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SignIn() {
  return (
    <Card className="w-full max-w-sm border-none bg-background">
      <CardHeader>
        <CardTitle className="text-2xl">Sign in to Account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="********"
            required
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={"/dashboard"}>Sign in</Link>
        </Button>
      </CardFooter>
      <div className="p-6">
        <p className="small">
          Do not have an Account?{" "}
          <Link
            href={"/sign-up"}
            className="hover:underline decoration-yellow-500"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </Card>
  );
}
