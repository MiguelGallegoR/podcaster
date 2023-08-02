export const readCachedData = (timeStampKey, key) =>
{
    let cacheData = {};

    if (isOneDayDiff(timeStampKey)){
      localStorage.clear();
    } else{
      cacheData = localStorage.getItem(key);
    }

    return JSON.parse(cacheData);
}

export const isOneDayDiff = (timeStampKey) =>
{
    const timeStamp = localStorage.getItem(timeStampKey);
    if (timeStamp === null)
        return false

    const timeDiff = ((new Date()).getTime() - timeStamp) / 1000;
    return timeDiff > 86000;
}