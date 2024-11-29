import Image from "next/image";
import coverPhoto from "@/app/assets/my-picture.jpg";
import Link from "next/link";

export default function Hero (){
    return (
        <div>
             <div className=" bg-gray-200 h-[600px] lg:h-[800px] w-full lg:py-[80px] lg:px-[130px]" >

             <div className=" flex justify-center item-center h-[500px] w-[400px] mx-6 lg:w-[1080px] lg:h-[500px] lg:gap-6">
             <Image  src={coverPhoto} alt="coverPhoto" rel="preload" loading="lazy"  className="hidden lg:hover:opacity-60 lg:block mt-3 lg:h-auto lg:w-auto rounded-[50%]" />


                    <div className=" h-[450px] w-[300px] mt-6 lg:w-[450px] lg:h-[380px] lg:mt-16 ">
                        <h1 className="text-5xl font-bold lg:font-extrabold lg:text-6xl">Wellcome</h1>
                        <h2 className="text-3xl font-normal mt-3 ">A bit about me.</h2>
                        <p className="mt-3">I started my journey of being an AI Engineer in february 2024 in GIAIC, before that i was working in the field of 
                        fine arts, when i join tech field it was a bit difficult for me to learn without any mentor or even any guidence.
                        but as the time went by, each day was challenging for me but i have'nt given up till now and inshaAllah 
                        i will cross the finish line.    </p>

                        <div className="mt-5  gap-3 flex justify-between  ">
                            <div className="lg:w-32 lg:h-32 h-[80px] w-[80px] rounded-full bg-yellow-500 border-2 border-black hover:bg-slate-300  ">
                                <h1 className="text-center lg:mt-12 mt-6"><Link href="Portfolio" >Portfolio</Link></h1></div>
                            <div className="lg:w-32 lg:h-32 h-[80px] w-[80px] rounded-full bg-red-500 border-2 border-black hover:bg-slate-300" >
                                <h1 className="text-center lg:mt-12 mt-6"><Link href="Projects" >Projects</Link></h1></div>
                            <div className="lg:w-32 lg:h-32 h-[80px] w-[80px] rounded-full bg-slate-400 border-2 border-black hover:bg-slate-300">
                                <h1 className="text-center lg:mt-12 mt-6"><Link href="Contact" >Contact</Link></h1></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}