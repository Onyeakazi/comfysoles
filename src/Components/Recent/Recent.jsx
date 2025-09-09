import SectionTitle from '../SectionTitle/SectionTitle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Recent = () => {

        const features = [
        {
            title: "Jordan Shoes",
            status: "New",
            price: "#30,000",
            image: "src/assets/features/product_4.jpg",
            currentPrice: "#25,000"
        },
        {
            title: "Airwalk Shoes",
            status: "Sale",
            price: "#30,000",
            image: "src/assets/features/product_2.jpg",
        },
        {
            title: "Jordan Shoes",
            status: "New",
            price: "#20,000",
            image: "src/assets/features/product1.jpg",
            currentPrice: "#15,000"
        },
        {
            title: "Nike Shoes",
            price: "#20,000",
            image: "src/assets/features/product_3.jpg",
        },
        
    ];

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplayspeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 3
    };

    return (
        <div className='lg:container mx-auto'>
            <SectionTitle title='Recent Added' mb={"mb-11"}></SectionTitle>

            <div className="slider-container features_slider w-full h-full">
                    <Slider {...settings}>
                        {features.map((feature, index) => (
                            <div key={index} className="p-4">

                                <div className="feature-image mb-3 relative">
                                    <img className=" w-[500px] h-[500px] object-cover" src={feature.image} alt={feature.title} />
                                    {
                                        feature.status && (
                                            <div className="absolute top-4 left-4 bg-amber-600 text-white px-2 py-1 rounded-lg">
                                                <button className="text-sm font-inter font-normal">{feature.status}</button>
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="feature_content">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-base text-amber-600 capitalize font-inter font-normal mb-4">{feature.title}</h4>
                                        <span className="bg-amber-600 w-[44px] h-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size='1.5rem' color="#fff"/></span>
                                    </div>
                                    <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter">
                                        {feature.price}
                                        {
                                            feature.currentPrice && (
                                                <span className="text-sm text-[#9a9caa] font-inter font-normal">{feature.currentPrice}</span>
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
        </div>
    );
}

export default Recent;
