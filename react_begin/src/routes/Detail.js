import { useEffect ,useState} from "react"
import {useParams} from "react-router-dom"

function Detail(){
    const {id} = useParams()
    const [movies, setMovies] = useState([]);

    const getMovie = async()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json()

       
        setMovies(json)
         console.log(movies)    
    }
    useEffect(()=>{
        getMovie()
    },[])

    return <h1>Detail</h1>
}
//7_4.js에 보면,
//<Route path = "/movie/:id">로 받아오는데, 
//id변수를 가져옴 == x
export default Detail