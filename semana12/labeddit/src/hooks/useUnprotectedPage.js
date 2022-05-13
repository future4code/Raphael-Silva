import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToFeedList } from "../routes/coordinator"

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToFeedList(history)
        }
    }, [history])
}

export default useUnprotectedPage