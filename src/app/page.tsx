import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full ">

        <section className="h-screen w-full pl-16 flex justify-start items-start mt-20 ">
          <div className="w-full">
            <h1 className="text-7xl font-bold font-Raleway primary-text">Beyond the Classroom</h1>
            <h2 className="text-4xl font-medium mt-2 primary-text font-serif">Student authorized blogs and newsletter</h2>
            <p  className="text-2xl font-light mt-16 leading-normal w-1/2">Explore the collective wisdom and creativity of your peers. Contribute your voice and gain insights into topics that matter. Write, read, and contribute to a thriving community that keeps you connected to campus life.</p>
            <div className="w-1/3 border-b border-white mt-20"></div>
          </div>
        </section>

        <section className="h-screen w-full flex justify-center items-center">
          <div className="">
            <div>
              {/* TODO: Blogs this side */}
            </div>
            <div>
              {/* TODO: Text editor this side*/}
            </div>
          </div>

        </section>
    </div>
  );
}
