import { Table, Skeleton, Empty } from "antd"
import { SideBar } from "../components/SideBar"
import { usePodcast } from "../hooks/usePodcast"
import { Link, useParams } from "react-router-dom"
export const Detail = () => {
    const { podcastId } = useParams();
    const {podcast, filteredPodcastStorage, isLoading, episodeList} = usePodcast(podcastId)
    
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => <Link to={`/podcast/${podcastId}/episode/${record.id}`}>{text}</Link>
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
        <div className="detail-container">
            <SideBar singlePodcastInfo={podcast} singlePodcastInfoStorage={filteredPodcastStorage}/>

            {isLoading ? (
                <Skeleton active />
            ) : (
                <main>
                    {episodeList && episodeList.length > 0 ? (
                        <>
                            <div className="totalEpisodes-container"><h2>Episodes: {episodeList.length}</h2></div>
                            <div className="detail-container">
                                <Table
                                    dataSource={episodeList}
                                    columns={columns}
                                />
                            </div>
                        </>
                    ) : (
                        <div>
                         
                          <Empty  description={ <p>No hay episodios disponibles o ha ocurrido un error.</p>}/>
                        </div>
                      )}
                </main>
                
            )}
        </div>
       
       
    )
    
}