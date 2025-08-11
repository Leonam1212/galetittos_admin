import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import { Mail, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { POST } from '../app/api/login/route'
import { findUserByIdService } from '../services/userService'
import { loginService } from '../services/authService'
import { useRouter } from 'next/navigation'
import ErrorComponent from './ErrorComponent'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

interface formProps {
  email: string
  password: string
}

export function FormLogin() {
  const Router = useRouter()
  const [formData, setFormData] = useState<formProps>({
    email: '',
    password: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      console.log(data)
      if (!data) {
        throw new Error('Usuário não encontrado')
      }
      console.log(data.user)
      Router.push('/dashboard')
    } catch (err) {
      ;<ErrorComponent
        className="bg-red-100/60 px-2 py-4 font-bold text-red-500"
        message="Usuário não encontrado"
      />
      console.error('Erro de validação:', err)
    }
  }

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <form
          className="mt-5 flex flex-col gap-4"
          onSubmit={handleSubmit}
          method="post"
        >
          <section>
            <label
              htmlFor="email"
              className="text-bold font-inter text-xl"
            ></label>
            <div className="group relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 transition-all duration-300 ease-in-out group-hover:left-[-8]">
                <Mail className="h-5 w-5 transition-all duration-300 ease-in-out group-hover:scale-125" />
              </span>
              <motion.input
                initial={{ outline: 'none' }}
                whileHover={{ outline: '1px solid black', scale: 1.05 }}
                exit={{ outline: 'none' }}
                transition={{ duration: 0.5 }}
                id="email"
                type="email"
                className="w-full rounded border p-2 pl-10 outline-black"
                placeholder="Email"
                animate={{
                  outline: formData.email ? '1px solid black' : 'none',
                }}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </section>

          <section>
            <label
              htmlFor="password"
              className="text-bold font-inter text-xl"
            ></label>
            <div className="group relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 transition-all duration-300 ease-in-out">
                <Lock className="h-5 w-5 transition-all duration-300 ease-in-out" />
              </span>

              <motion.input
                initial={{ outline: 'none' }}
                whileHover={{ outline: '1px solid black', scale: 1.05 }}
                transition={{ duration: 0.5 }}
                exit={{ outline: 'none' }}
                id="password"
                type="password"
                placeholder="Senha"
                animate={{
                  outline: formData.password ? '1px solid black' : 'none',
                }}
                className="w-full rounded border p-2 pl-10 outline-black"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </section>

          <motion.div
            className="flex w-full justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              className="w-full cursor-pointer active:scale-95"
              type="submit"
            >
              Entrar
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}
