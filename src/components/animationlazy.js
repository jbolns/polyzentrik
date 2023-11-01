import React from 'react'

const Animation = React.lazy(() => import('./animation'))

const AnimationLazy = () => {
  return (
    <Animation />
  )
}

export default AnimationLazy