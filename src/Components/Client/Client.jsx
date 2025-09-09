import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, User } from "lucide-react";
import SectionTitle from '../SectionTitle/SectionTitle';


const Client = () => {

    const clientSay = [
        {
            id: "1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel neque voluptatem et quasi qui ex officia quia commodi sed, ipsa architecto nesciunt quidem rerum corporis vitae ipsam consectetur, repellat quae!",
            name: "CEO Berry",
            position: "CEO"
        },
        {
            id: "2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel neque voluptatem et quasi qui ex officia quia commodi sed, ipsa architecto nesciunt quidem rerum corporis vitae ipsam consectetur, repellat quae!",
            name: "John Doe",
            position: "Co-Founder"
        },
        {
            id: "3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel neque voluptatem et quasi qui ex officia quia commodi sed, ipsa architecto nesciunt quidem rerum corporis vitae ipsam consectetur, repellat quae!",
            name: "James Bond",
            position: "CTO"
        },
        {
            id: "4",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel neque voluptatem et quasi qui ex officia quia commodi sed, ipsa architecto nesciunt quidem rerum corporis vitae ipsam consectetur, repellat quae!",
            name: "Andrew Peters",
            position: "Manager"
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplayspeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div className='lg:container '>
            <SectionTitle title="What clients say about us" mb='mb-11'></SectionTitle>

            <div className="slider-container w-full h-full">
                <Slider {...settings}>
                    {clientSay.map((client, index) => (
                        <div key={index} className="p-12 border-[1px] border-[#e1e1e3] rounded-lg">
                            <p className="text-2xl text-[#636270] font-inter font-normal client_say_description mb-4">{client?.description}</p>
                            <div className="flex items-center">
                                <h3><User size='2rem'/></h3>
                                <div className="m-3">
                                    <h4 className="text-2xl text-[#272343] font-inter capitalize font-medium mb-1.1">{client?.name}</h4>
                                    <p className="text-base text-[#9e9caa] font-inter capitalize font-normal">{client?.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Client;
