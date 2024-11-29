
import logo from "@/app/assets/icons8-linkedin-24.png"
import Image from "next/image";
import Link from "next/link";

export default function Footer (){
    return (
        <div>
            <div className="w-full h-52 bg-gray-200 ">
                <div className="lg:w-[1100px] h-[2px] w-[400px] ml-10 bg-black lg:ml-[100px]"></div>
                
                <div className=" lg:w-[1100px] lg:h-[180px] lg:my-3 lg:ml-[100px] lg:gap-[30px] flex justify-between
                                w-[430px] h-[160px] gap-[3px] ml-[30px] mt-4">

                    {/* phone */}
                    <div className=" lg:w-[200px] lg:h-[170px] w-[100px] h-[120px]">
                        <h1 className="font-bold mt-4">Phone</h1>
                        <p className="mt-3">021-345-278</p>

                    </div>

                    {/* mail */}
                    <div className="lg:w-[200px] lg:h-[170px] mr-5 w-[100px] h-[120px]">
                        <h1 className="font-bold mt-4">Email</h1>
                        <a href="mailto:samiaj380@gmail.com">
                            <p className="mt-4">samiaj380@gmail.com</p>
                        </a>
                    </div>

                    {/* follow me */}
                    <div className=" lg:w-[200px] lg:h-[170px] w-[90px] h-[120px]">
                        <h1 className="font-bold mt-4">Follow me</h1>
                        <Link href='https://www.linkedin.com/in/samia-javed-samia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                            <Image src={logo} alt="logo" className="w-6 mt-4" />
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}