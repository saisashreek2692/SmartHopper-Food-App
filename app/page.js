import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <h2>Welcome to Smarthopper - Foodie App</h2>
      <Button>Welcome to Smarthopper</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
