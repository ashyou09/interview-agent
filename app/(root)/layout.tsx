import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/actions/auth.action'

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect('/sign-in');

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="logo_text">PrepWise</h2>
        </Link>
        <form method="post" action="/api/logout">
          <button type="submit" className="btn">Logout</button>
        </form>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout;