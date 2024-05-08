import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='flex items-center justify-center w-full h-screen'>
        <SignIn/>
    </main>
  )
}

export default SignInPage