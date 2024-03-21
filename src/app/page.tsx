import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center justify-start p-12">
      <Button variant="default">Welcome</Button>
      <Button variant="outline">Secondary</Button>
      <Card className="w-72  bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden  max-w-5xl shadow-lg ">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
}
