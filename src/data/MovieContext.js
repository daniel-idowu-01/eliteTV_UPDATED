import { createContext, useState } from "react";
import Notification from "../components/Notification";

 const MoviesContext = createContext({})

export function MoviesProvider({ children }) {

    const [items, setItems] = useState([])

    const addToMovies = (id, name, image, rating) => {
        setItems((prevState) => [...prevState, {id, name, image, rating}])
    }

    return (
        <MoviesContext.Provider value={{ items, addToMovies }}>
            {children} 
        </MoviesContext.Provider>
    )
}

export default MoviesContext