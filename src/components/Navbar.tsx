import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { signIn } from "@/auth";

const Navbar = async () => {
  return (
    <main className="fixed right-0 left-0 top-0 py-4 px-4 bg-pink-800/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <Link href="/" className="text-3xl font-bold">
          SheShare
        </Link>
        {/* <Image
          src="/fuzzieLogo.png"
          alt="Pulse Logo"
          width={15}
          height={15}
          className="shadow-sm"
        /> */}
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="/rent">rent rooms</Link>
          </li>
          <li>
            <Link href="/share">share rooms</Link>
          </li>
          <li>
            <Link href="/profile">profile</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <ModeToggle />
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              {true ? "Login" : "Get Started"}
            </span>
          </button>
        </form>

        {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}
        <MenuIcon className="md:hidden" />
      </aside>
    </main>
  );
};

export default Navbar;
