import googleImage from '../../../src/assets/social/google-logo.png'
import githubImage from '../../../src/assets/social/git-image.png'
import fbImage from '../../../src/assets/social/facebook-img.jpg'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useUserPublic from '../../hooks/useUserPublic';


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useUserPublic();

    const handleGoogleSign = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            const userInfo = {
                email: result?.user?.email,
                name: result.user.displayName
            }
            axiosSecure.post('/users', userInfo)
                .then(res =>{
                    console.log(res.data)
                    navigate('/')
                })

            
        })
    }
    return (
        <div className='mt-5 mx-auto flex gap-6'>
            <button onClick={handleGoogleSign} className='btn btn-outline'>
                <img className='w-8 rounded-lg' src={googleImage} alt="" />
            </button>
            <button className='btn btn-outline'><img className='w-10 rounded-lg' src={githubImage} alt="" /></button>
            <button className='btn btn-outline'><img className='w-8 rounded-lg' src={fbImage} alt="" /></button>
        </div>
    );
};

export default SocialLogin;