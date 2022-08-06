import { PostContext } from "../context/postContext"
import { useContext } from "react"

export const usePostContext = () => {
  const context = useContext(PostContext)

  if(!context) {
    throw Error('usePostContext must be used inside a PostContextProvider')
  }

  return context
}