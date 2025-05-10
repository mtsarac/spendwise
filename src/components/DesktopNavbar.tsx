import { currentUser } from "@clerk/nextjs/server";
import { Button } from "./ui/button";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import ModeToggle from "./ModeToggle";
import { SignInButton, UserButton } from "@clerk/nextjs";

async function DesktopNavbar() {
  const user = await currentUser();
  return (
    <div>
      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="flex items-center gap-2" asChild>
          <Link href="/">
            <HomeIcon className="w-4 h-4" />
            <span className="hidden lg:inline">Home</span>
          </Link>
        </Button>
        {user ? (
          <>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/dashboard">
                <span className="hidden lg:inline">Dashboard</span>
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/settings">
                <span className="hidden lg:inline">Settings</span>
              </Link>
            </Button>
            <UserButton />
          </>
        ) : (
          <SignInButton mode="modal">
            <Button variant="default">Sign In</Button>
          </SignInButton>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}

export default DesktopNavbar;
