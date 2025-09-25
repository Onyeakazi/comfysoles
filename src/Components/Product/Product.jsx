import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";
import trend1 from "../../assets/products/trending_1.jpg";
import trend2 from "../../assets/products/trending_2.jpg";
import trend3 from "../../assets/products/trending_3.jpg";
import trend4 from "../../assets/products/trending_4.jpg";
import trend5 from "../../assets/products/trending_5.jpg";
import trend6 from "../../assets/products/trending_6.jpg";
import trend7 from "../../assets/products/trending_7.jpg";
import trend8 from "../../assets/products/trending_8.jpg";
import newest1 from "../../assets/products/newest_1.jpg";
import newest2 from "../../assets/products/newest_2.jpg";
import newest3 from "../../assets/products/newest_3.jpg";
import newest4 from "../../assets/products/newest_4.jpg";
import newest5 from "../../assets/products/newest_5.jpg";
import newest6 from "../../assets/products/newest_6.jpg";
import newest7 from "../../assets/products/newest_7.jpg";
import newest8 from "../../assets/products/newest_8.jpg";
import best1 from "../../assets/products/best_1.jpg";
import best2 from "../../assets/products/best_2.jpg";
import best3 from "../../assets/products/best_3.jpg";
import best4 from "../../assets/products/best_4.jpg";
import best5 from "../../assets/products/best_5.jpg";
import best6 from "../../assets/products/best_6.jpg";
import best7 from "../../assets/products/best_7.jpg";
import best8 from "../../assets/products/best_8.jpg";

const Product = () => {
    const [active, setActive] = useState({
        id: 0,
        product: 'all'
    });

    const productTitle = [
        {
            id: 0,
            title: "All",
            product: "all"
        },
        {
            id: 1,
            title: "Newest",
            product: "newest"
        },
        {
            id: 2,
            title: "Trending",
            product: "trending"
        },
        {
            id: 3,
            title: "Best seller",
            product: "best_seller"
        },
    ]

    const products = [
        {
            title: "Nike Shoes",
            status: "New",
            price: "#130,000",
            image: trend4,
            currentPrice: "#125,000",
            product: "all"
        },
        {
            title: "Nike Shoes",
            status: "New",
            price: "#200,000",
            image: trend5,
            currentPrice: "#190,000",
            product: "all"
        },
        {
            title: "Adidas Shoes",
            status: "New",
            price: "#130,000",
            image: trend4,
            currentPrice: "#125,000",
            product: "all"
        },
        {
            title: "Adidas Shoes",
            status: "New",
            price: "#200,000",
            image: trend5,
            currentPrice: "#190,000",
            product: "all"
        },
        {
            title: "Best Sellers",
            status: "New",
            price: "#130,000",
            image: best4,
            currentPrice: "#125,000",
            product: "all"
        },
        {
            title: "Best Sellers",
            status: "New",
            price: "#200,000",
            image: best5,
            currentPrice: "#190,000",
            product: "all"
        },
        {
            title: "Nike Shoes",
            price: "#80,000",
            image: trend3,
            product: "all"
        },
        {
            title: "Best Sellers2",
            price: "#80,000",
            image: best7,
            product: "all"
        },
        {
            title: "Nike Shoes",
            status: "New",
            price: "#120,000",
            image: trend1,
            currentPrice: "#100,000",
            product: "trending"
        },
        {
            title: "Nike Shoes",
            status: "Sale",
            price: "#150,000",
            image: trend2,
            product: "trending"
        },
        {
            title: "Nike Shoes",
            price: "#80,000",
            image: trend3,
            product: "trending"
        },
        {
            title: "Nike Shoes",
            status: "New",
            price: "#130,000",
            image: trend4,
            currentPrice: "#125,000",
            product: "trending"
        },
        {
            title: "Nike Shoes",
            status: "New",
            price: "#200,000",
            image: trend5,
            currentPrice: "#190,000",
            product: "trending"
        },
        {
            title: "Nike Shoes",
            status: "Sale",
            price: "#100,000",
            image: trend6,
            product: "trending"
        },
        {
            title: "Nike Shoes2",
            price: "#80,000",
            image: trend7,
            product: "trending"
        },
        {
            title: "Nike Shoes",
            status: "New",
            price: "#70,000",
            image: trend8,
            currentPrice: "#68,000",
            product: "trending"
        },
        {
            title: "Adidas Shoes",
            status: "New",
            price: "#120,000",
            image: newest1,
            currentPrice: "#100,000",
            product: "newest"
        },
        {
            title: "Adidas Shoes",
            status: "Sale",
            price: "#150,000",
            image: newest2,
            product: "newest"
        },
        {
            title: "Adidas Shoes",
            price: "#80,000",
            image: newest3,
            product: "newest"
        },
        {
            title: "Adidas Shoes",
            status: "New",
            price: "#130,000",
            image: newest4,
            currentPrice: "#125,000",
            product: "newest"
        },
        {
            title: "Adidas Shoes",
            status: "New",
            price: "#200,000",
            image: newest5,
            currentPrice: "#190,000",
            product: "newest"
        },
        {
            title: "Adidas Shoes",
            status: "Sale",
            price: "#100,000",
            image: newest6,
            product: "newest"
        },
        {
            title: "Adidas Shoes2",
            price: "#80,000",
            image: newest7,
            product: "newest"
        },
        {
            title: "Adidas Shoes",
            status: "New",
            price: "#70,000",
            image: newest8,
            currentPrice: "#68,000",
            product: "newest"
        },
        {
            title: "Best Sellers",
            status: "New",
            price: "#120,000",
            image: best1,
            currentPrice: "#100,000",
            product: "best_seller"
        },
        {
            title: "Best Sellers",
            status: "Sale",
            price: "#150,000",
            image: best2,
            product: "best_seller"
        },
        {
            title: "Best Sellers",
            price: "#80,000",
            image: best3,
            product: "best_seller"
        },
        {
            title: "Best Sellers",
            status: "New",
            price: "#130,000",
            image: best4,
            currentPrice: "#125,000",
            product: "best_seller"
        },
        {
            title: "Best Sellers",
            status: "New",
            price: "#200,000",
            image: best5,
            currentPrice: "#190,000",
            product: "best_seller"
        },
        {
            title: "Best Sellers",
            status: "Sale",
            price: "#100,000",
            image: best6,
            product: "best_seller"
        },
        {
            title: "Best Sellers2",
            price: "#80,000",
            image: best7,
            product: "best_seller"
        },
        {
            title: "Best Sellers",
            status: "New",
            price: "#70,000",
            image: best8,
            currentPrice: "#68,000",
            product: "best_seller"
        },
    ];

    const productFilter = products.filter(product => product.product === active.product);
    
    return (
        <div className="lg:container mx-auto">
            <div className="flex flex-col items-center justify-center">
                <SectionTitle title={'Our Products'} textAlign={"center"} mb={'mb-5'}></SectionTitle>

                <div className="flex items-center justify-center gap-6 mb-13">
                    {
                        productTitle.map((title, index)=> (
                            <button 
                                key={title.id}
                                onClick={() => setActive({
                                    id: title.id,
                                    product: title.product
                                })}        
                                className={`text-base font-black uppercase font-inter cursor-pointer ${
                                    active.id === index ? `text-[#272343]` : `text-[#cfcfcf]`
                                }`}
                            >
                                {title.title}
                            </button>
                        ))
                    }
                </div>

                <div className="grid grid-cols-4 items-center gap-6">
                    {
                        productFilter.map((product, index) => (
                            <div key={index} className="p-4">

                                <div className="feature-image mb-3 relative">
                                    <img className=" w-[340px] h-[340px] rounded-lg object-cover" src={product.image} alt={product.title} />
                                    {
                                        product.status && (
                                            <div className="absolute top-4 left-4 bg-amber-600 text-white px-2 py-1 rounded-lg">
                                                <button className="text-sm font-inter font-normal">{product.status}</button>
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="product_content">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-base text-amber-600 capitalize font-inter font-normal mb-4">{product.title}</h4>
                                        <span className="bg-amber-600 w-[44px] h-[44px] rounded-lg flex items-center justify-center"><ShoppingCart size='1.5rem' color="#fff"/></span>
                                    </div>
                                    <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter">
                                        {product.price}
                                        {
                                            product.currentPrice && (
                                                <span className="text-sm text-[#9a9caa] font-inter font-normal">{product.currentPrice}</span>
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Product;
