import axios from "axios";

const usePublic = axios.create({
    baseURL: 'http://localhost:5000'
})
const useUserPublic = () => {
    return usePublic;
};

export default useUserPublic;