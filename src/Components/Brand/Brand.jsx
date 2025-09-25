import adidas from "../../assets/brands/adidas.jpg";
import fila from "../../assets/brands/fila.jpg";
import nike from "../../assets/brands/nike.jpg";
import lakers from "../../assets/brands/lakers.jpg";
import NB from "../../assets/brands/NB.png";
import reebok from "../../assets/brands/reebok.jpg";
import nba from "../../assets/brands/nba.png"

const Brand = () => {

    const brand = [
        {
            id: "1",
            image: adidas
        },
        {
            id: "2",
            image: fila
        },
        {
            id: "3",
            image: nike
        },
        {
            id: "4",
            image: lakers
        },
        {
            id: "5",
            image: NB
        },
        {
            id: "6",
            image: reebok
        },
        {
            id: "7",
            image: nba
        }
    ]

    return (
        <div className="lg:container mx-auto mb-10">
            <div className="grid grid-cols-7 items-center justify-center gap-7">
                {brand.map((brand) => (
                    <div className="brand-items" key={brand?.id}>
                        <img className="w-[100px] h-auto" src={brand?.image} alt={brand?.id} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brand;
