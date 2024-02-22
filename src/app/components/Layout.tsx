import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className='w-2/3 m-auto'>{children}</div>
  )
}