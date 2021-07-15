import {useDispatch} from "react-redux";
import {useCallback} from "react";
import axios from "axios";


export const useRequest = () => {

    const dispatch = useDispatch()
    const request = useCallback(async (url) => {



        try {

            const res = await axios.get(url)

            if (res.status !== 200) {
                throw new Error(res.data.message || 'Что-то пошло не так, попробуйте позднее!')
            }

            console.log(res.data)
            return res.data



        } catch (e) {
            console.log(e.message)
        }

    }, [])

    return {request}
}