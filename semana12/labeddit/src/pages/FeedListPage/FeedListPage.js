import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const FeedListPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>FeedListPage</h1>
        </div>
    )
}

export default FeedListPage