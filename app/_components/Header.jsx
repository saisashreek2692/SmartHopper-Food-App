"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center md:px-20 shadow-sm">
      <Image src="/logo.png" alt="logo" width={200} height={200} priority={true} />
      <div className="hidden md:flex border p-2 rounded-lg bg-gray-200 w-96">
        <input
          type="text"
          className="bg-transparent w-full outline-none border-none"
          placeholder="Enter to Search Products"
        />
        <Search />
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-5">
          <SignInButton mode="modal">
            <Button variant="outline">Sign In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
}

export default Header;
