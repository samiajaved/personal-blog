import Link from 'next/link';

export default function Navbar (){
    return (
        <div>
            <div className=" bg-gray-200 w-full h-24 justify-between flex">

                <div className=" flex justify-between w-fit gap-3 ml-10 ">
                    <div className="bg-yellow-500 w-6 h-6 mt-9 rounded-[50%]"></div>
                    <Link href="/" className="font-bold mt-8  text-3xl leading-8 text-center "> Samia Javed </Link>  
                    <h3 className="mt-10 hidden lg:block">frontend Developer</h3>
                </div>

                <div className=" ml-10">
                    <ul className=' mt-4 lg:flex justify-between w-fit gap-5 mr-10 lg:mt-10  '>

                        <li className='hover:text-yellow-500 hidden lg:block'><Link href="Portfolio">portfolio</Link></li>
                        <li className='lg:h-18 lg:w-[2px] bg-black'></li>
                        <li className='hover:text-yellow-500 hidden lg:block'><Link href="Projects">Projects</Link></li>
                        <li className='lg:h-18 lg:w-[2px] bg-black'></li>
                        <li className='hover:text-yellow-500 hidden lg:block'><Link href="Contact">Contact</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}