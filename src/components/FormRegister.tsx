import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import { Mail, Lock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { POST } from '../app/api/login/route'
import { createUserService } from '../services/userService'
const formSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  cpf: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6),
})

interface formProps {
  name: string
  cpf: string
  email: string
  password: string
}

export function FormRegister() {
  const [formData, setFormData] = useState<formProps>({
    name: '',
    cpf: '',
    email: '',
    password: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erro ao cadastrar')
      console.log('Usuario cadastrado:', data.user)
    } catch (err) {
      console.error('Erro de cadastro:', err)
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
          {/* NOME */}
          <section>
            <label
              htmlFor="name"
              className="text-bold font-inter text-xl"
            ></label>
            <div className="group relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 transition-all duration-300 ease-in-out group-hover:left-[-8]">
                <User className="h-5 w-5 transition-all duration-300 ease-in-out group-hover:scale-125" />
              </span>

              <motion.input
                initial={{ outline: 'none' }}
                whileHover={{ outline: '1px solid black', scale: 1.05 }}
                exit={{ outline: 'none' }}
                transition={{ duration: 0.5 }}
                id="name"
                type="name"
                className="w-full rounded border p-2 pl-10 outline-black"
                placeholder="Name"
                animate={{
                  outline: formData.name ? '1px solid black' : 'none',
                }}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </section>

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
              htmlFor="cpf"
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
                id="cpf"
                type="cpf"
                className="w-full rounded border p-2 pl-10 outline-black"
                placeholder="CPF"
                animate={{
                  outline: formData.cpf ? '1px solid black' : 'none',
                }}
                value={formData.cpf}
                onChange={(e) =>
                  setFormData({ ...formData, cpf: e.target.value })
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
