import { Key, useEffect } from "react";
import { usePostContext } from "../../hooks/usePostContext";

// components
import ShowPosts from "./showPosts";
import PostForm from "./postForm";

export default function Posts() {
  const { posts, dispatch } = usePostContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_POSTS', payload: json})
      }
    }

    fetchPosts()
  }, [dispatch])

  return (
    <div className="flex flex-row justify-between gap-10px width-auto">
      <div className="text-white w-600">
        {posts && posts.map((post: { _id: Key; }) => (
          <ShowPosts post={post} key={post._id} />
        ))}
      </div>
      <PostForm />
    </div>
  )
}