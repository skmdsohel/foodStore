import {useState, useEffect} from "react"

const useGetAllRestaurent = (url, resId) => {

    const [restaurants, setRestaurants] = useState(null)

    const getResData = async () => {
        const data = await fetch(url + resId);
        const json = await data.json();
        setRestaurants(json.data)
    }

    useEffect(() => {
      getResData();
    }, [])

    return restaurants;
    
}

export default useGetAllRestaurent;