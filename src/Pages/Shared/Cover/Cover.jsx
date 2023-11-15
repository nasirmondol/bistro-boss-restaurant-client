import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div className="hero h-[550px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content bg-opacity-30 lg:h-[300px] lg:w-[900px] text-center bg-black text-neutral-content">
                <div className="lg:max-w-lg">
                    <h1 className="mb-5 lg:text-3xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    </Parallax>
       
    );
};

export default Cover;