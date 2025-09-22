import { FacebookLogo, GithubLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";
import logo2 from "../assets/logo2.png";
export default function InFooter(){
    return(
        <footer className="bg-black">
         <div className="flex justify-between p-10 ">
            <div className="flex flex-col  w-[300px] gap-4">
                <img src={logo2} alt="img footer" className="w-[60px]" />
                <h3 className="text-gray-600">Making the world a better place through constructing elegant hierarchies.</h3>
                <div className="flex gap-10 text-gray-600">
                    <a href=""><InstagramLogo size={25} className="hover:text-white" /></a>
                    <a href=""><FacebookLogo size={25} className="hover:text-white"/></a>
                    <a href=""><GithubLogo size={25} className="hover:text-white"/></a>
                    <a href=""><YoutubeLogo size={25} className="hover:text-white"/></a>
                </div>
            </div>

            <div className="">
                <h2 className="my-3 text-[#A3772D] font-bold  ">Solutions</h2>
                <div className="flex flex-col gap-4 text-gray-600">
                    <a href=""className="hover:text-white">Marketing</a>
                    <a href="" className="hover:text-white">Analytics</a>
                    <a href="" className="hover:text-white">Automation</a>
                    <a href="" className="hover:text-white">Commerce</a>
                    <a href="" className="hover:text-white">Insights</a>
                </div>
            </div>

            <div >
                <h2 className="my-3 text-[#A3772D] font-bold ">Support</h2>
                <div className="flex flex-col gap-4 text-gray-600">
                    <a href="" className="hover:text-white">Submit Ticket</a>
                    <a href="" className="hover:text-white">Documentation</a>
                    <a href="" className="hover:text-white">Guides</a>
                 
                </div>
            </div>

            <div>
                <h2 className="my-3 text-[#A3772D] font-bold  ">Company</h2>
                <div className="flex flex-col gap-4 text-gray-600 ">
                    <a href="" className="hover:text-white">About</a>
                    <a href="" className="hover:text-white">Blog</a>
                    <a href="" className="hover:text-white">Jobs</a>
                    <a href="" className="hover:text-white">Press</a>
                </div>
            </div>

            <div>
                <h2 className="my-3 text-[#A3772D] font-bold  ">Legal</h2>
                <div className="flex flex-col gap-4 text-gray-600">
                    <a href="" className="hover:text-white">Terms of service</a>
                    <a href="" className="hover:text-white">Privacy policy</a>
                    <a href="" className="hover:text-white">License</a>
                </div>
            </div>

            
         </div>
< hr className="mx-auto text-gray-600 p-1 w-[90%] "/>
<p className="text-gray-600 text-[13px] text-center p-1">© Todos os Direitos Reservados - V Barbershop.</p>
        </footer>
    )
}