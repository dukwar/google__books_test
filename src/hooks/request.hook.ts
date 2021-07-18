import {useCallback} from "react";
import axios from "axios";


export const useRequest = () => {

    const request = useCallback(async (url) => {
        try {
            const res = await axios.get(url)
            return res.data
        } catch (e) {
            console.log(e.message)
        }

    }, [])

    return {request}
}