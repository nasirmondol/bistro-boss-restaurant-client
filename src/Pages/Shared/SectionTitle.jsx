
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="py-4 lg:w-1/4 mx-auto">
            <p className="text-yellow-600 text-center mb-2">---{subHeading}---</p>
            <h2 className="text-3xl font-bold text-center py-2 text-yellow-700 uppercase border-y-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;