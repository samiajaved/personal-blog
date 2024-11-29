import Image from "next/image";
import image from "@/app/assets/pexels-cottonbro-5989933.jpg";
import image1 from "@/app/assets/pexels-gabby-k-20431420.jpg";
import image2 from "@/app/assets/pexels-vlada-karpovich-4050316.jpg";
import image3 from "@/app/assets/pexels-vladbagacian-3987066.jpg";
import image4 from "@/app/assets/pexels-ann-h-45017-21562934.jpg"
import image5 from "@/app/assets/pexels-breakingpic-3243.jpg";
import image6 from "@/app/assets/pexels-divinetechygirl-1181271.jpg";
import image7 from "@/app/assets/pexels-lalorosas-907489.jpg";
import image8 from "@/app/assets/pexels-goumbik-574071.jpg";


export default function Projects(){
    return(
        <div>
            <div className=" bg-gray-200 h-auto  w-full lg:py-[80px] lg:px-[130px] ">
                <h1 className="text-5xl font-bold lg:font-extrabold lg:text-6xl text-center ">Projects</h1>



                
            {/* project 1 */}
            <div className=" lg:flex h-[500px] w-[400px] mx-6 lg:w-[1080px] lg:h-[300px] lg:gap-6 mt-20">
                    <div className=" h-[300px] w-[400px]  lg:w-[550px] lg:h-[300px]  ">
                        <h1 className="font-bold mt-6  text-3xl leading-8">resume builder html and css</h1>
                        <p className="mt-5">My Resume Builder is a dynamic and editable web application designed to help users create and customize 
                            professional resumes effortlessly. With an intuitive interface, users can easily add, edit, and organize their personal details, work experience, skills, and education</p>

                            {/* button */}
                            <a href="https://hackhaton-milstone-3-bivklkhc0-samiajaveds-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                                <button className="w-[140px] h-[45px] bg-yellow-500 text-white rounded-lg gap-[10px] py-3 
                                font-normal text-sm mt-8 hover:bg-slate-400">View Project</button>
                            </a>
                    </div>
                    <Image src={image} alt=" resume builder" className="lg:w-[530px]" />
                </div>

            {/* project 2 */}
                <div className=" lg:flex h-[500px] w-[400px] mx-6 lg:w-[1080px] lg:h-[300px] lg:gap-6 mt-20">
                    <div className=" h-[300px] w-[400px]  lg:w-[550px] lg:h-[300px]  ">
                        <h1 className="font-bold mt-6  text-3xl leading-8">green Heaven nextjs</h1>
                        <p className="mt-5">"Green Heaven" is a beautiful, eco-friendly website I created using Next.js and Tailwind CSS. 
                            Designed with a focus on simplicity and sustainability, the site features a clean, modern layout with fast performanc.
                            The website's design is centered around green tones and nature-inspired elements, providing a calming user experience.</p>

                            {/* button */}
                            <a href="https://green-heaven-nextjs-dwbg3oeig-samiajaveds-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                                <button className="w-[140px] h-[45px] bg-yellow-500 text-white rounded-lg gap-[10px] py-3 
                                font-normal text-sm mt-8 hover:bg-red-500">View Project</button>
                            </a>
                    </div>
                    <Image src={image1} alt="imgae of plants" className="lg:w-[530px]" />
                </div>


                {/* project 3 */}
                <div className="lg:flex h-[500px] w-[400px] mx-6 lg:w-[1080px] lg:h-[300px] lg:gap-6 mt-20">
                    <div className="h-[300px] w-[400px]  lg:w-[550px] lg:h-[300px]  ">
                        <h1 className="font-bold mt-6  text-3xl leading-8">figma clone nextjs</h1>
                        <p className="mt-5">
                        Creating a Figma landing page clone with Next.js and Tailwind CSS is a great way to build a responsive, 
                        modern website. Next.js offers fast rendering and SEO benefits, while Tailwind's utility-first classes make 
                        it easy to design a sleek, customizable layout.  The result is a high-performance, visually appealing clone 
                        that's easy to maintain and optimize.</p>

                            {/* button */}
                            <a href="https://assignment-3-figma-lhmncrot4-samiajaveds-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                                <button className="w-[140px] h-[45px] bg-yellow-500 text-white rounded-lg gap-[10px] py-3 
                                font-normal text-sm mt-8 hover:bg-slate-400">View Project</button>
                            </a>
                    </div>
                    <Image src={image2} alt="figma" className="lg:w-[530px]"/>
                </div>


                {/* project 4 */}
                <div className="lg:flex h-[500px] w-[400px] mx-6 lg:w-[1080px] lg:h-[300px] lg:gap-6 mt-20">
                    <div className="h-[300px] w-[400px]  lg:w-[550px] lg:h-[300px]  ">
                        <h1 className="font-bold mt-6  text-3xl leading-8">figma clone nextjs</h1>
                        <p className="mt-5"> Creating a Figma landing page clone with Next.js and Tailwind CSS is a great way to build a responsive, 
                        modern website. Next.js offers fast rendering and SEO benefits, while Tailwind's utility-first classes make 
                        it easy to design a sleek, customizable layout.  The result is a high-performance, visually appealing clone 
                        that's easy to maintain and optimize.</p>

                            {/* button */}
                            <a href="https://assignment2-figma-i0ap0xl8i-samiajaveds-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                                <button className="w-[140px] h-[45px] bg-yellow-500 text-white rounded-lg gap-[10px] py-3 
                                font-normal text-sm mt-8 hover:bg-red-500">View Project</button>
                            </a>
                    </div>
                    <Image src={image3} alt="figma"  className="lg:w-[530px]" />
                </div>


                {/* project 5 */}
                <div className="lg:flex h-[500px] w-[400px] mx-6 lg:w-[1080px] lg:h-[300px] lg:gap-6 mt-20">
                    <div className=" h-[300px] w-[400px]  lg:w-[550px] lg:h-[300px]  ">
                        <h1 className="font-bold mt-6  text-3xl leading-8">typescript Quiz Game</h1>
                        <p className="mt-5">My TypeScript project, a Quiz Game, is an interactive web app that challenges users with 
                            multiple-choice questions on various topics. Built with TypeScript for type safety and scalability,  and presents a smooth, engaging experience.</p>

                            {/* button */}
                            <a href="https://github.com/samiajaved/typescript-quiz-game.git" target="_blank" rel="noopener noreferrer">
                                <button className="w-[140px] h-[45px] bg-yellow-500 text-white rounded-lg gap-[10px] py-3 
                                font-normal text-sm mt-8 hover:bg-slate-400">View code</button>
                            </a>
                    </div>
                    <Image src={image4} alt="image of game"  className="lg:w-[530px]"/>
                </div>

                {/* project 6 */}
                <div className="lg:flex h-[500px] w-[400px] mx-6 lg:w-[1080px] lg:h-[300px] lg:gap-6 mt-20">
                    <div className=" h-[300px] w-[400px]  lg:w-[550px] lg:h-[300px]  ">
                        <h1 className="font-bold mt-6  text-3xl leading-8">Typescript To-List</h1>
                        <p className="mt-5">
                        My TypeScript project, a Todo List application, is a simple yet powerful tool for managing tasks. 
                        Using TypeScript for type safety and better code organization, the app allows users to add, edit, delete, and mark tasks as completed.</p>

                            {/* button */}
                            <a href="https://github.com/samiajaved/Todo-list.git" target="_blank" rel="noopener noreferrer">
                                <button className="w-[140px] h-[45px] bg-yellow-500 text-white rounded-lg gap-[10px] py-3 
                                font-normal text-sm mt-8 hover:bg-red-500">View code</button>
                            </a>
                    </div>
                    <Image src={image5} alt="todo list"  className="lg:w-[530px]"/>
                </div>

                     {/* project 7*/}
                <div className="lg:flex h-[500px] w-[400px] mx-6 lg:w-[1080px] lg:h-[300px] lg:gap-6 mt-20">
                    <div className="h-[300px] w-[400px]  lg:w-[550px] lg:h-[300px]  ">
                        <h1 className="font-bold mt-6  text-3xl leading-8">Typescript ATM Machine</h1>
                        <p className="mt-5">My TypeScript project, an ATM machine simulator, is a fun and interactive application that 
                            mimics the basic functionalities of an ATM.
                            the project includes features like account balance checks, withdrawals, deposits. 
                            It showcases my skills in object-oriented programming and problem-solving.</p>

                            {/* button */}
                            <a href="https://github.com/samiajaved/ATM-machine.git" target="_blank" rel="noopener noreferrer">
                                <button className="w-[140px] h-[45px] bg-yellow-500 text-white rounded-lg gap-[10px] py-3 
                                font-normal text-sm mt-8 hover:bg-slate-400">View code</button>
                            </a>
                    </div>
                    <Image src={image6} alt="coading image"  className="lg:w-[530px]" />
                </div>


                     {/* project 8 */}
                <div className="lg:flex h-[500px] w-[400px] mx-6 lg:w-[1080px] lg:h-[300px] lg:gap-6 mt-20">
                    <div className="h-[300px] w-[400px]  lg:w-[550px] lg:h-[300px]  ">
                        <h1 className="font-bold mt-6  text-3xl leading-8">Typescript Simple Calculator</h1>
                        <p className="mt-5">My TypeScript project, a Simple Calculator, is a straightforward web 
                            app that performs basic arithmetic operations like addition, subtraction, multiplication, 
                            and division. Built with TypeScript, the project focuses on clean, maintainable code and ensures 
                            smooth user interactions with instant calculation</p>

                            {/* button */}
                            <a href="https://github.com/samiajaved/simple_caculator.git" target="_blank" rel="noopener noreferrer">
                                <button className="w-[140px] h-[45px] bg-yellow-500  text-white rounded-lg gap-[10px] py-3 
                                font-normal text-sm mt-8 hover:bg-red-500">View code</button>
                            </a>
                    </div>
                    <Image src={image7} alt=""  className="lg:w-[450px] lg:h-[300px]  h-[180px] w-[300px] mt-3"  />
                </div>

                         {/* project 9 */}
                <div className="lg:flex h-[700px] w-[400px] mx-6 lg:w-[1080px] lg:h-[300px] lg:gap-6 mt-20">
                    <div className="h-[300px] w-[400px]  lg:w-[550px] lg:h-[300px]  ">
                        <h1 className="font-bold mt-6  text-3xl leading-8">Form HTML and CSS</h1>
                        <p className="mt-5">My HTML/CSS project, a Registration Form, is a user-friendly form designed for 
                            collecting user information like name, email, and password. Using HTML for the structure and CSS for styling, I focused on creating a clean design. </p>

                            {/* button */}
                            <a href="https://github.com/samiajaved/registration-form.git" target="_blank" rel="noopener noreferrer">
                                <button className="w-[140px] h-[45px] bg-yellow-500 text-white rounded-lg gap-[10px] py-3 
                                font-normal text-sm mt-8 hover:bg-slate-400">veiw code</button>
                            </a>
                    </div>
                    <Image src={image8} alt="" className="lg:w-[530px]"/>
                </div>



            </div>
        </div>
    )

}
 