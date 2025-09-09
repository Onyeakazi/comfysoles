import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Categories from "../../Components/Categories/Categories";
import Client from "../../Components/Client/Client";
import Delivery from "../../Components/Delivery/Delivery";
import Features from "../../Components/Features/Features";
import Product from "../../Components/Product/Product";
import Recent from "../../Components/Recent/Recent";

const Home = () => {
    return (
        <div>
            {/* Banner Component */}
            <div className="flex items-center justify-center w-full min-h-[850px] bg-[#f0f2f3]">
                <Banner></Banner>
            </div>
            
            {/* Delivery component */}
            <div className="delivery_component w-full min-h-[#150px] mb-20">
                <Delivery></Delivery>
            </div>

            {/* Brand component */}
            <div className="brand_component h-[171px] flex items-center justify-center w-full mb-10">
                <Brand></Brand>
            </div>

            {/* Features component */}
            <div className="w-full flex items-center justify-center mb-[80px]">
                <Features></Features>
            </div>

            {/* Categories component */}
            <div className="w-full mb-[80px]">
                <Categories></Categories>
            </div>

            {/* Product Component */}
            <div className="w-full h-full flex items-center justify-center mb-[80px]">
                <Product></Product>
            </div>

            {/* Client component */}
            <div className="w-full flex justify-center items-center bg-[#f0f2f3] min-h-[589px] mb-[80px]">
                <Client></Client>
            </div>

            {/* Recent component */}
            <div className="w-full flex justify-center items-center pb-[80px] pt-[20px]">
                <Recent></Recent>
            </div>

        </div>
    );
}

export default Home;
