import { Globe } from "@/components/ui/globe";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { words } from "@/lib/constants";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div>
        <TypewriterEffect
          className="items-center text-2xl string"
          words={words}
        />
      </div>
    </main>
  );
}
