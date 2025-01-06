import BlogCard from "@/components/BlogCard";
import BlogPreview from "@/components/BlogPreview";
import NavBar from "@/components/NavBar";
import Suggestion from "@/components/Suggestion";
import Tiptap from "@/components/TipTap";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full ">

        <section className="h-[70vh] w-full pl-16 flex justify-start items-start mt-20 ">
          <div className="w-2/3">
            <h1 className="text-7xl font-bold font-montserrat primary-text">Beyond the Classroom</h1>
            <h2 className="text-4xl font-medium mt-2 primary-text font-serif">Student authorized blogs and newsletter</h2>
            <p  className="text-2xl font-light mt-16 leading-normal w-4/5 font-montserrat">Explore the collective wisdom and creativity of your peers. Contribute your voice and gain insights into topics that matter. Write, read, and contribute to a thriving community that keeps you connected to campus life.</p>
            <div className="w-1/3 border-b border-white mt-20"></div>

            <div className="flex gap-5 items-center mt-5">
              <button className="text-lg rounded-lg font-roboto px-4 py-1 bg-white/90 text-black hover:bg-white">Get Started</button>
              <a className="text-lg pl-2 text-[#7AA4FF]   text-center">Explore blogs</a>
            </div>
          </div>

          <div className="flex justify-center items-center w-2/5 pl-0 mt-32 h-4/5 pr-16">
            {/* <div className="w-full h-full relative rounded-xl overflow-hidden shadow-cardLight transition-shadow hover:shadow-cardHover bg-white text-black mt-12">
              <Tiptap/>
            </div> */}
            <div className="w-full rounded-lg h-full overflow-hidden">
              <BlogCard/>
            </div>
          </div>
        </section>

        <section className="max-h-screen w-full flex items-start mt-20">

            <div className="w-2/3 pl-16 border-r border-[#484849] border-opacity-50">
              <BlogPreview/>
              <div className="my-10 border-b w-11/12 pl-16 border-[#484849] opacity-50"></div>
              <BlogPreview/>
              <div className="my-10 border-b w-11/12 pl-16 border-[#484849] opacity-50"></div>
              <BlogPreview/>


            </div>

            <div className="pl-8 w-1/3">
              <h1 className="text-xl font-montserrat primary-text font-semibold">Suggestions for you</h1>
              <div className="w-11/12 flex flex-col justify-start items-center gap-2 mt-5">
                <Suggestion content="How to get started with Machine Learning"/>
                <Suggestion content="Writing Good Essays"/>
                <Suggestion content="Introduction to embeded systems"/>
                <Suggestion content="How to get started with Machine Learning"/>
                <Suggestion content="How to get started with Machine Learning"/>

              </div>
            </div>


        </section>


    </div>
  );
}
