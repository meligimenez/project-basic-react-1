import { useState } from 'react'

export const useForm = (initialState, refform) => {
  const [state, setState] = useState(initialState)

  const handleChange = ({ target: { name, value } }) =>
    setState({
      ...state,
      [name]: value
    })

  const reset = () => {
    setState(initialState)
    refform.current.reset()
  }

  return [state, setState, handleChange, reset]
}
