'use client'

import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { loginAction } from '../actions'
import { toast } from 'react-toastify'

const formSchema = z.object({
  email: z.email('Digite um email válido'),
  password: z
    .string('Senha e obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
})

type FormSchemaType = z.infer<typeof formSchema>

export function FormLogin() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: FormSchemaType) => {
    const { error } = await loginAction(data.email, data.password)
    if (error) {
      toast.error(error.message)
      return
    }
    toast.success('Login realizado com sucesso')
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <strong className="text-center">Entre com seu Email</strong>
      <p className="mx-auto text-center text-xs text-zinc-500">
        para acessar sua conta e gerenciar seus produtos e pedidos.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold">E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="galettitos@me.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold">Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="***********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full cursor-pointer" type="submit">
            Entrar
          </Button>
        </form>
      </Form>
    </div>
  )
}
