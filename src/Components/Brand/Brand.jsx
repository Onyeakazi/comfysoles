
const Brand = () => {

    const brand = [
        {
            id: "1",
            image: "src/assets/brands/adidas.jpg"
        },
        {
            id: "2",
            image: "src/assets/brands/fila.jpg"
        },
        {
            id: "3",
            image: "src/assets/brands/nike.jpg"
        },
        {
            id: "4",
            image: "src/assets/brands/lakers.jpg"
        },
        {
            id: "5",
            image: "src/assets/brands/NB.png"
        },
        {
            id: "6",
            image: "src/assets/brands/reebok.jpg"
        },
        {
            id: "7",
            image: "src/assets/brands/nba.png"
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
