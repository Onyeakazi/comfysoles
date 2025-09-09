import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {

    const products = [
        {
            id: 1,
            title: "Best Selling Shoes",
            description: "Discover our best-selling shoes that combine style and comfort.",
            image: "src/assets/images/shoe1.png"
        },
        {
            id: 2,
            title: "New Arrivals",
            description: "Check out our latest collection of shoes that are sure to turn heads.",
            image: "src/assets/images/shoe2.png"
        },
        {
            id: 3,
            title: "Summer Collection",
            description: "Step into summer with our stylish and breathable footwear.",
            image: "src/assets/images/shoe3.png"
        },
        {
            id: 4,
            title: "Winter Specials",
            description: "Stay warm and stylish this winter with our exclusive range of boots and insulated shoes.",
            image: "src/assets/images/shoe4.png"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="lg:container">
            <div className="slider-container slider_container w-full h-full">
                <Slider {...settings}>
                    {products.map(product => (
                        <div key={product.id} className="banner-slide-item">
                            <div className="banner-content">
                                <p className="text-sm font-inter text-[#222234] uppercase font-normal">{product.description}</p>
                                <h2 className="text-6xl text-[#272343] font-inter capitalize leading-16 max-w-[631px] w-full font-bold mb-5">{product.title}</h2>
                                <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-amber-600 cursor-pointer rounded-lg capitalize text-white">Shop Now <MoveRight /></button>
                            </div>

                            <div className="banner-image w-full h-full object-cover flex items-center justify-end">
                                <img src={product.image} alt={product.title} className="max-w-[600px]" width={500}/>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Banner;
