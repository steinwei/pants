import { memo, useEffect, useState, useMemo } from 'react'
// import

interface IProps {
  [key: string]: any
}

function Modal(props: IProps) {
  const [visible, setVisible] = useState<Boolean>(false)
  console.log(props)

  const { modalVisible = false, title = '', updateModal  } = props || {}

  useEffect(() => {
    if (modalVisible) open()
  }, [modalVisible])

  function open() {
    setVisible(true)
  }

  function close() {
    setVisible(false)
  }

  function renderHeader() {
    return null
  }

  function renderContent() {
    return null
  }

  function renderFooter() {
    return null
  }

  if (!visible) return null

  return (
    <div>
      { renderHeader() }
      { renderContent() }
      { renderFooter() }
    </div>
  )
}

export default memo(Modal)
