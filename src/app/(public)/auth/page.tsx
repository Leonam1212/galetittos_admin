'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { User, UserPlus } from 'lucide-react'
import { FormLogin } from './components/FormLogin'
import { FormRegister } from './components/FormRegister'

export default function Login() {
  const [isCreateAccount, setIsCreateAccount] = useState(false)

  return (
    <main className="m-2 flex max-w-full translate-y-1/4 flex-col gap-4 rounded-3xl p-6 duration-300 ease-in-out md:flex lg:translate-y-1/2">
      {isCreateAccount ? <FormRegister /> : <FormLogin />}

      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-center text-sm text-zinc-500">
          {isCreateAccount
            ? 'Ja possui uma conta?'
            : 'Ainda não tem uma conta?'}{' '}
          <button
            className="cursor-pointer text-xs underline duration-300 ease-in-out hover:text-zinc-900"
            onClick={() => setIsCreateAccount(!isCreateAccount)}
          >
            {isCreateAccount ? 'Faça login' : 'Criar conta'}
          </button>
        </span>
      </div>
    </main>
  )
}
