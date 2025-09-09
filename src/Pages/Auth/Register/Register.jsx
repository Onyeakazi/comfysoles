import { MoveRight } from "lucide-react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Register = () => {

    const navigate = useNavigate();

    const handleSubmit = ()=> {
        navigate("/auth/login")
    }

    return (
        <div className="lg:container mx-auto p-[80px]">
            <div className="max-w-[648px] w-full min-h-[382px] p-[31px] rounded-lg border-[1px] mx-auto border-[#9a9caa] flex items-center justify-center flex-col">
                <h3 className="text-3xl text-[#272343] font-semibold font-inter mb-5 capitalize">Register</h3>

                <form action="#" onSubmit={handleSubmit} className="flex flex-col items-center w-full space-y-5">
                    <input type="text" placeholder="Your Name..." className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5"/>
                    <input type="email" placeholder="Your Email..." className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5"/>
                    <input type="password" placeholder="Your Password..." className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5"/>

                    <button type="submit" className="w-full h-[50px] bg-[#ef6c00] rounded-lg pl-3.5 text-base text-inter text-white text-semibold capitalize flex items-center gap-2.5 justify-center cursor-pointer">Register <MoveRight /></button> 
                </form>

                <p className="text-base text-[#272343] font-semibold font-inter flex items-center justify-center gap-2.5 mt-3">Don't have account <Link to={'/auth/login'} className="text-[#ef6c00]">Login</Link></p>
            </div>
            
        </div>
    );
}

export default Register;
