
const FoodCart = ({items}) => {
    const { name, image, price } = items;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-orange-900 absolute  text-white right-0 lg:px-6 mr-4 top-4 rounded-md ">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex justify-start">
                   <button className="btn bnt-outline rounded-md border-b-4  border-t-0 border-l-0 text-orange-400 border-r-0 border-orange-500">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;