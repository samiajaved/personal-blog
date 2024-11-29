import Image from "next/image";
import photo from "@/app/assets/pexels-goumbik-574070.jpg"

export default function Portfolio (){
    return (
        <div>
            <div className=" bg-gray-200 h-[700px] lg:h-[800px] w-full lg:py-[80px] lg:px-[130px] ">
                <div className="lg:flex justify-center item-center h-[500px] w-[400px] mx-6 lg:w-[1080px] lg:h-[500px] lg:gap-6">
                    <div className="hidden lg:block  mt-6 lg:w-[450px] lg:h-[300px] lg:mt-28 ">
                        <h1 className="lg:font-bold lg:text-5xl mb-5">Portfolio</h1>
                        <p>Welcome to my portfolio! This space is a collection of my work, showcasing the projects and creative endeavors that 
                            I'm most proud of. It reflects my skills, passion, and growth as a developer. Take a look through my projects, and feel 
                            free to reach out if you'd like to collaborate or learn more about my work.</p>
                            {/* button */}
                            <a href="https://github.com/samiajaved/portfolio.git" target="_blank" rel="noopener noreferrer">
                            <button className="w-[140px] h-[45px] bg-red-500 text-white rounded-lg gap-[10px] py-3 
                            font-normal text-sm mt-8">View Portfolio</button>
                        </a>


                    </div>
                    <Image src={photo}  alt="portfolio" className="h-[300px] lg:w-[500px] lg:mt-28" />
                    <div className="h-[300px] w-[350px] mt-4 ml-5 block lg:hidden">
                        <h1  className="text-3xl font-bold">Portfolio </h1>
                        <p>Welcome to my portfolio! This space is a collection of my work, showcasing the projects and creative endeavors that I'm most 
                        proud of. It reflects my skills, passion, and growth as adeveloper. Take a look through my projects, and feel free to reach 
                        out if you'd like to collaborate or learn more about my work.</p>

                            {/* button */}
                        <a href="https://github.com/samiajaved/portfolio.git" target="_blank" rel="noopener noreferrer">
                            <button className="w-[140px] h-[45px] bg-red-500 text-white rounded-lg gap-[10px] py-3 
                            font-normal text-sm mt-8">View Portfolio</button>
                        </a>


                    </div>
                </div>

            </div>
        </div>
    )
}