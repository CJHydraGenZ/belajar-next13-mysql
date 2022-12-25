import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div>
      <nav className='inline-flex p-4 gap-3'>
        <Link href={`/`}>Home</Link>
        <Link href={`/user`}>User</Link>
        <Link href={`about`}>About</Link>
      </nav>
    </div>
  )
}
