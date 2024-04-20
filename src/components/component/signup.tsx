import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";

export function Signup() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link className="ml-auto inline-block text-sm underline" href="#">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
          <Button
            formAction={async () => {
              "use server";
              await signIn("google");
            }}
            type="submit"
            className="w-full"
            variant="outline"
          >
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <Link className="underline" href="#">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
