import { usePostContext } from '../../hooks/usePostContext';
import { useState } from 'react';

const ShowPosts = ({ post }:any) => {
  const [show, setShow] = useState(false);
  const { dispatch } = usePostContext()

  const handleDelete = async () => {
    const response = await fetch('/api/posts/' + post._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_POST', payload: json})
    }
  }

  return (
    <>
      <h4><strong>Title:&nbsp;</strong>{post.title}</h4>
      <p><strong>Time:&nbsp;</strong>{post.time}</p>
      <p><strong>Day:&nbsp;</strong>{post.day}</p>
      <p><strong>Date:&nbsp;</strong>{post.date}</p>
      <p><strong>Text:&nbsp;</strong>{post.text}</p>
      <br/>
      <div className="flex flex-row gap-10px">
        <span className="bg-blue p-10px w-118 rounded-md cursor-pointer" onClick={handleDelete}>delete</span>
        <span className="bg-blue p-10px w-118 rounded-md cursor-pointer" onClick={() => setShow(!show)}>edit</span>
      </div>
      { show ? 
      <div>Update post</div>
       : null}
    </>
  )
}

export default ShowPosts