import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cat1 from "../../assets/categories/cat1.jpg";
import cat2 from "../../assets/categories/cat2.jpg";
import cat3 from "../../assets/categories/cat3.jpg";
import cat4 from "../..//assets/categories/cat4.jpg"

const Categories = () => {
    const categories = [
        {
            title: "Casual Shoes",
            products: "200 Products",
            image: cat1
        },
        {
            title: "Work Shoes",
            products: "150 Products",
            image: cat2
        },
        {
            title: "Adventure Shoes",
            products: "100 Products",
            image: cat3
        },
        {
            title: "Sports Shoes",
            products: "300 Products",
            image: cat4
        },
    ];

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        autoplay: true,
        autoplayspeed: 2000,
    };

    return (
        <div>
            <div className="lg:container mx-auto">
                <SectionTitle title="To Categories " mb="mb-11"></SectionTitle>

                <div className="slider-container features_slider w-full h-full">
                    <Slider {...settings}>
                        {categories.map((category, index) => (
                            <div key={index} className="p-4">

                                <div className="category-image mb-3 relative">
                                    <img className=" w-[500px] h-[500px] rounded-lg object-cover" src={category.image} alt={category.title} />
                                    <div className="absolute bottom-0 left-0 w-full h-[85px] bg-[#000000] bg-opacity-50 flex flex-col justify-center p-4">
                                        <h4 className="text-xl text-white font-inter font-semibold mb-2 capitalize">{category.title}</h4>
                                        <p className="text-sm text-white ccapitalize font-normal font-inter">{category.products}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
    );
}

export default Categories;
