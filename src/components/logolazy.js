import React from 'react'

const Logo = React.lazy(() => import('./logo'))

const LogoLazy = () => {
  return (
    <Logo />
  )
}

export default LogoLazy