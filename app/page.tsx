import Image from "next/image";
import {serifFont} from "@/app/fonts";
import Navbar from "@/app/Navbar/page";
import {Content} from "@radix-ui/react-navigation-menu";
import MainContent from "@/app/MainContent/page";



export default function Home() {
  return (
      <div >
          <Navbar />
          <MainContent/>
      </div>
  );
}
