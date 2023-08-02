import { Input } from 'antd';
import { ListOfPodcasts } from '../components/ListOfPodcasts.jsx'
import { usePodcasts } from "../hooks/usePodcasts.js"
import { useState } from 'react';
import Header from "../components/Header.jsx"


export const Home = () => {
    const [search, setSearch] = useState('')
    const {filteredPodcasts} = usePodcasts(search)
    const handleChange = (event) => {
        event.preventDefault()
        const field = event.target.value
        setSearch(field.toLowerCase())
    }
    return (
        <>
            <main>
                <Input placeholder='Filter podcasts...' className="filter-podcasts" onChange={handleChange}/>
                <ListOfPodcasts podcasts={filteredPodcasts}/>
            </main>
        </>
    )
}
