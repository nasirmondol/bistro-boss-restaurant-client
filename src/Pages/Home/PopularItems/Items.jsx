
const Items = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='flex items-center lg:gap-2'>
            <div>
                <img className='lg:w-20' style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" />
            </div>
            <div>
                <h3 className='uppercase lg:text-xl'>{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className='text-yellow-500'>${price}</p>
            </div>
        </div>
    );
};

export default Items;