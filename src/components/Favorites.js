import '../css/VideoContainer.css'
import VideoCard from './VideoCard'
import {useState, useEffect} from "react"

const Favorites = ({user}) => {

    const [favs, setFavs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/users/${user.id}`)
        .then(r => r.json())
        .then(myUser => {
            setFavs(myUser.favorited)
        })  
        .catch(error => console.log(error)) 
    }, [user])
    
    const displayVids = () => {
        if(favs){
            return(favs.map(video => <VideoCard key={video.id} video={video}/>))
        }
        else{return <h1>No Favorites Yet</h1>}
    }


    return(
        <section>
            {displayVids()}
        </section>
    )
}

export default Favorites