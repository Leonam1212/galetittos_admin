'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { motion } from 'framer-motion'
import { FormLogin } from '../components/FormLogin'
import { FormRegister } from '../components/FormRegister'
import { User, UserPlus } from 'lucide-react'

export default function Login() {
  const [activeButton, setActiveButton] = React.useState('login')

  const handleButtonClick = (button: string) => {
    setActiveButton(button)
  }

  interface LoginProps {
    email: string
    password: string
  }
  const handleLogin = (props: LoginProps) => {
    // Handle login logic here
    console.log('Logging in with:', props)
  }

  interface RegisterProps {
    name: string
    email: string
    cpf: string
    password: string
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center rounded-xl bg-[#CDE6F7] p-4 shadow-md">
        <section className="mb-8 flex w-full max-w-2xl items-center justify-center">
          <Button
            className={`cursor-pointer px-10 shadow-md active:scale-90 ${activeButton === 'login' ? 'flex-1' : 'opacity-75'}`}
            onClick={() => handleButtonClick('login')}
            variant="outline"
          >
            <User />
            Login
          </Button>
          <Button
            className={`cursor-pointer px-10 shadow-md active:scale-90 ${activeButton === 'register' ? 'flex-1' : 'opacity-75'}`}
            onClick={() => handleButtonClick('register')}
            variant="outline"
          >
            <UserPlus />
            Register
          </Button>
        </section>

        {/* <motion.div
          className="h-0.5 w-full bg-[#8490A3] shadow-md mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }} 
          exit={{ scaleX: 0 }}
          onTransitionEnd={() => {
            if (activeButton === 'login') {
              handleButtonClick('register')
            } else {
              handleButtonClick('login')
            }
          }}
        /> */}

        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md rounded-lg bg-[#FEFEFE] p-4 shadow-lg"
        >
          <div className="">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-inter text-center text-3xl font-bold"
            >
              {activeButton === 'login'
                ? 'Acesse sua conta'
                : 'Registre sua conta'}
            </motion.h1>
            <p className="font-inter text-center font-bold text-[#8490A3]">
              {activeButton === 'register'
                ? 'Entre com seu email e senha para continuar'
                : 'Preencha os campos abaixo para se registrar'}
            </p>
          </div>

          <div className="bg-[#FEFEFE]">
            {activeButton === 'login' ? <FormLogin /> : <FormRegister />}
          </div>
        </motion.section>

        <section></section>
      </div>
    </main>
  )
}
