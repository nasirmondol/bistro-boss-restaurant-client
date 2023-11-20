import { useQuery } from "@tanstack/react-query";
import useUserPublic from "./useUserPublic";

const useMenu = () =>{
    const usePublic = useUserPublic()
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //            setMenu(data)
    //            setLoading(false)
    //         })
    // }, [])

    const {data: menu=[], pendingLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await usePublic.get('/menu')
            return res.data;
        }
    })
    return [menu, loading, refetch]

}
export default useMenu;