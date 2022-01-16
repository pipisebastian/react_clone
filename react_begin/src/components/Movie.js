import PropType from "prop-types"
import {Link} from "react-router-dom"

function Movie({coverImg,id,title,summary,genres}){
    //props쓰기! 부모한테서 받아옴!
    return (
        <div>
            <img src = {coverImg} alt={title}/>
            <h2>
                <Link to = {`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
                {genres.map(g=><li key={g}>{g}</li>)}

            </ul>
        </div>)
    
}

//어떤 props type를 갖고있는지
Movie.propTypes = {
    id : PropType.number.isRequired,
    coverImg: PropType.string.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired,
}

export default Movie;