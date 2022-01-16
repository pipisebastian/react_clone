import {useEffect, useState} from "react";


function App(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async()=>{
 
        const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();

        setMovies(json.data.movies);
        setLoading(false)
    }

    useEffect(()=>{
        getMovies();
    },[])

    console.log(movies)

   /* 2.
        const getMovies = async()=>{
        const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
        const json = await response.json();

        setMovies(json.data.moives);
        setLoading(false)
    }*/


   /* 1.
    useEffect(()=>{
        fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        .then((response)=>response.json())
        .then(json=>
            {setMovies(json.data.moives);
            setLoading(false)})
    },[])*///fetch, then대신에, async,await 을 많이 씀!
   
    return <div>
        {loading ? <h1>Loading...</h1> : 
        <div>{movies.map((item)=>
        <div key = {item.id}>
            <img src = {item.medium_cover_image}/>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <ul>
                
                    {item.genres.map(g=><li key={g}>{g}</li>)}
                
            </ul>
        </div>)}</div>}
        
    </div>;
    
}
//genre가 array이므로!! map으로 가져옴!


export default App;