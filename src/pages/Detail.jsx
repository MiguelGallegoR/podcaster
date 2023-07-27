import Header from "../components/Header"
import { Table, Skeleton } from "antd"
import { SideBar } from "../components/SideBar"
import { usePodcast } from "../hooks/usePodcast"
import { Link, useParams } from "react-router-dom"
export const Detail = () => {
    const { id } = useParams();
    const {podcast, filteredPodcastStorage, episodeList, isLoading} = usePodcast(id)
    //console.log(episodeList[0].id)
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
          },
          {
            title: 'Duration',
            key: 'duration',
            dataIndex: 'duration',
          }
    ]
    return (
        <>
            <Header />
            {isLoading ? (
                <Skeleton active />
            ) : (
                <main>
                    <div className="totalEpisodes-container"><h2>Episodes: {episodeList.length}</h2></div>
                    <div className="detail-container">
                        <SideBar singlePodcastInfo={podcast} singlePodcastInfoStorage={filteredPodcastStorage}/>
                        <Table
                            dataSource={episodeList}
                            columns={columns}
                        />
                    </div>
                </main>
                
            )}
        </>
       
       
    )
    
}