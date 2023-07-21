export const getPodcasts = async() => {
    try {
        const lastFetchTime = sessionStorage.getItem('lastFetchTime');
        if (lastFetchTime) {
          const currentTime = new Date();
          const lastFetchDate = new Date(lastFetchTime);
          const daysDiff = getDaysDiff(currentTime, lastFetchDate);
    
          // Verificar si ha pasado más de un día (en este caso, 1 día)
          if (daysDiff <= 1) {
            // La última solicitud fue hace menos de un día, recuperar datos de sessionStorage
            const data = JSON.parse(sessionStorage.getItem('cachedData'));
            const {entry} = data.feed

            return entry

          }
    }
    
    const res = await fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
    const json = await res.json()
    const data = await json
    const {entry} = data.feed
    sessionStorage.setItem('cachedData', JSON.stringify(data));
    sessionStorage.setItem('lastFetchTime', new Date().toISOString());

    return entry

    
    }catch (error) {
    console.error('Error al realizar la solicitud:', error);
    }
}

function getDaysDiff(date1, date2) {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}