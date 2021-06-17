import React, {useState} from 'react'

export const PostContext = React.createContext();

export const PostConsumer = PostContext.Consumer

const PostProvider = (props) => {
    const [posts, setPosts] = useState(['post1', 'post2'])

    const addPost = (post) => {
        // do axios call here
        let newPosts = [...posts, post]
        setPosts(newPosts)
    }
    const editPost = (post) => {
        //map
    }
    return (
        <PostContext.Provider value={{
            posts,
            setPosts,
            addPost,
         
        }
        }
        >
            {props.children}
        </PostContext.Provider>
    )
}

export default PostProvider