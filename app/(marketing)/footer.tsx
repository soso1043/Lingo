import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full ">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/KR.svg"
            alt="KR"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Korean
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/ES.svg"
            alt="ES"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/FR.svg"
            alt="FR"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/IT.svg"
            alt="IT"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/JP.svg"
            alt="JP"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};
