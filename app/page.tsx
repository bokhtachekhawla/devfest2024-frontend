import Image from "next/image";
// import Footer from "@/components/navigation/Footer";
// import Sidebar from "@/components/navigation/sideBar";
import Link from "next/link";
// import Navbar from "@/components/navigation/sideBar"
export default function Home() {
  return (
    <>
    {/* <Sidebar /> */}
    <main className="flex  flex-col items-center justify-between py-24 px-8 ">
      <div className="">
      <div className=" py-4">
          <div className=" flex justify-center items-center">
          <p className="text-4xl xl:text-4xl text-center font-bold text-purple_logo pb-2">
            Welcome To
          </p>
          <Image
              src="/logo-new.png"
              alt="app Logo"
              width={90}
              height={90}
            />
          </div>
        </div>

        <div className="py-2 mx-5 ">
          <p className="text-text_black font-semibold text-xl xl:text-justify xl:max-w-[40vw] text-center leading-relaxed px-6 p-6">
            Car manufacturing relies on a smooth, fast-paced process 
            where machines and workers must work in perfect harmony.
            Every step—like stamping metal sheets into car doors or 
            welding frames together—needs to be precise to meet the high 
            demand for vehicles. To stay competitive, the factory must 
            focus on efficiency and coordination
          </p>
          <div className="flex justify-center mt-6 py-4">
            <Link href="/login">
             
              <button className="text-center font-bold text-base xl:text-xl px-16 py-3 rounded-lg bg-purple_button text-white shadow-lg hover:bg-purple-500 ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
        
      </main>
    {/* <Footer /> */}
    </>
    
  );
}
