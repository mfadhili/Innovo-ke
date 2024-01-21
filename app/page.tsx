import Image from "next/image";
import {serifFont} from "@/app/fonts";

export default function Home() {
  return (
      <div >
        <h1 className={`${serifFont.className} text-3xl`}>
            Innovo Networks Kenya
        </h1>
      </div>
  );
}
