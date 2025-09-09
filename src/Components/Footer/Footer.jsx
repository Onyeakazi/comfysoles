import { Facebook, Footprints, Instagram, Twitter, Youtube} from "lucide-react";
import { Link, NavLink } from "react-router";

const Footer = () => {
    return (
        <footer>
            
            <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
                <div className="lg:container mx-auto">

                    <div className="grid grid-cols-4">

                        <div>
                            {/* Logo wrapper */}
                            <div className="logo_wrapper mb-5">
                                <Link to='/' className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-3"><Footprints size="32px" color="orangered"/>ComfySoles</Link>
                            </div>

                            <p className="text-base text-[#272343] font-inter font-normal mb-3.5 max-w-[350px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum debitis optio placeat atque quod voluptates in, expedita officiis. Dolorum accusamus qui blanditiis veniam aliquid modi ipsa dicta facere nam adipisci.</p>
                            <div className="social-handles flex items-center gap-4">
                                <Link className="p-2 rounded-full border-[#0075580] inline-block border-[1px]"><Facebook color="#ef6c00" size='1.9rem'></Facebook></Link>

                                <Link className="p-2 inline-block "><Twitter color="#ef6c00" size='1.9rem'></Twitter></Link>
                                <Link className="p-2 inline-block "><Instagram color="#ef6c00" size='1.9rem'></Instagram></Link>
                                <Link className="p-2 inline-block "><Youtube color="#ef6c00" size='1.9rem'></Youtube></Link>


                            </div>
                        </div>

                        <div className="footer_wrapper">
                            <h3 className="text-2xl text-[#9e9caa] font-inter font-meduim uppercase">Category</h3>
                            <ul className="space-y-2 mt-4">
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">Men's Shoe</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">Women's Shoe</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">Children's Shoe</Link></li>
                            </ul>
                        </div>

                        <div className="footer_wrapper">
                            <h3 className="text-2xl text-[#9e9caa] font-inter font-meduim uppercase">Support</h3>
                            <ul className="space-y-2 mt-4">
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">Help & Support</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">terms and conditions</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">privacy</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">help</Link></li>
                            </ul>
                        </div>

                        <div className="newsletter space-y-3">
                            <h3 className="text-2xl text-[#9e9caa] font-inter font-meduim uppercase">newsletter</h3>
                            <form action="#" className="max-w-[424px] w-full flex items-center gap-2">
                                <input type="email" placeholder="Enter email..." className="max-w-[285px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg p-3 "/>
                                <button type="submit" className="text-base text-white font-semibold capitalize w-[127px] h-[46px] bg-[#ef6c00] rounded-lg cursor-pointer">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer_bottom w-full h-[75px] flex items-center justify-center">
                <div className="lg:container mx-auto">
                    <div className="grid grid-cols-2 items-center">
                        <div>
                            <p className="text-base text-[#9a9caa] font-normal font-inter">@ 2025 ComfySoles - Designed & Develop By <span className="text-[#272343]">Onyitechs</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
