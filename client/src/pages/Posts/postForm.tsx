import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePostContext } from '../../hooks/usePostContext';

const PostForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { dispatch } = usePostContext();

  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [id, setID] = useState('');

  const onSubmit = async () => {
    const post = { title, time, text, day, date, id };
    
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();

    if (response.ok) {
      setTitle('');
      setTime('');
      setText('');
      setDay('');
      setDate('');
      setID('');
      dispatch({type: 'CREATE_POST', payload: json});
    }

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-400 gap-2px fixed right-10px top-0px"> 
      <h3 className="text-light-grey">Add a new blog post</h3>

      <label className="text-white">Title:</label>
      <input 
        {...register('title', { required: true })}
        type="text" 
        autoComplete="off"
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className="bg-grey outline-none border-none p-2px"
      />
      {errors.title && `Title is required.`}

      <label className="text-white">Time:</label>
      <input 
        {...register('time', { required: true })}
        type="text" 
        autoComplete="off"
        onChange={(e) => setTime(e.target.value)} 
        value={time}
        className="bg-grey outline-none border-none p-2px"
      />
      {errors.time && `Time is required.`}

      <label className="text-white">Day:</label>
      <input 
        {...register('day', { required: true })}
        type="text" 
        autoComplete="off"
        onChange={(e) => setDay(e.target.value)} 
        value={day}
        className="bg-grey outline-none border-none p-2px"
      />
      {errors.day && `Day is required.`}

      <label className="text-white">Date:</label>
      <input 
        {...register('date', { required: true })}
        type="text" 
        autoComplete="off"
        onChange={(e) => setDate(e.target.value)} 
        value={date}
        className="bg-grey outline-none border-none p-2px"
      />
      {errors.date && `Date is required.`}

      <input 
        {...register('id', { required: true })}
        type="number" 
        autoComplete="off"
        onChange={(e) => setID(e.target.value)} 
        value={id}
        className="bg-grey outline-none border-none p-2px"
      />
      {errors.id && `ID is required.`}

      <label className="text-white">Text:</label>
      <textarea 
        {...register('text', { required: true })}
        autoComplete="off"
        onChange={(e) => setText(e.target.value)} 
        value={text}
        style={{width:'400px', height:'275px'}}
        className="bg-grey outline-none border-none p-2px"
      >
      </textarea>
      {errors.text && `Text is required.`}
      <button className="bg-blue p-14px rounded-md">Add Post</button>
    </form>
  )
};

export default PostForm;