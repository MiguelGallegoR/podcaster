import React from "react"
import { Podcast } from "./Podcast"

export const ListOfPodcasts = ({podcasts}) =>{
    const hasPodcasts = podcasts?.length > 0
    
    return(
        <div>
           { 
                hasPodcasts ?
                (
                    <ul className="podcasts">
                        {
                            podcasts.map(p => (
                                    <Podcast podcastInfo={p} />
                            ))
                        }
                        
                    </ul>
                ) : (<p>No hay resultados</p>)
            }
        </div>
    )
}