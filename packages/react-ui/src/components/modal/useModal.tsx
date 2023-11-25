import { forwardRef, useState } from 'react'

interface IProps {
  visible: boolean
}

const Element = React.forwardRef(() => {
  const [patch, setPatch] = useState(null)
  
  return <>{}</>
})

export function useModal(props) {
  const [visible, setVisible] = useState(false)

  function update() {}

  function create() {}

  return []
}
