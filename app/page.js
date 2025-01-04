import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Skills from "@/components/Skills";


export default function Home() {
  return (
   <div className="max-w-screen-xl w-full mx-auto p-4">
     <div className="mt-20">
      <Header />
     </div>
     <div className="mt-10">
      <Contacts />
      <About />
      <Skills />
     </div>
   </div>
  );
}
