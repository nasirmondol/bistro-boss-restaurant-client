
const Button = ({children}) => {
    return (
        <div>
            <div className="flex justify-center items-center py-6">
                <button className="rounded-md border-b-4 border-black border-t-0 border-l-0 border-r-0 mx-auto">{children}</button>
            </div>
        </div>
    );
};

export default Button;