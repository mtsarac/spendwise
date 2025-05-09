import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-400">Sign up</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  );
};

export default Navbar;
