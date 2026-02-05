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
import { toast } from 'react-toastify'
import { loginAction, registerAction } from '../actions'

const formSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.email('Digite um email válido'),
  password: z
    .string('Senha e obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
})

type FormSchemaType = z.infer<typeof formSchema>

export function FormRegister() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: FormSchemaType) => {
    try {
      const { email, password, name } = data
      const response = await registerAction(name, email, password)

      if (response.error) {
        if (typeof response.error === 'object' && 'message' in response.error) {
          toast.error(response.error.message)
        }
      }

      toast.success('Cadastro realizado com sucesso')
      if (response.user) {
        await loginAction(email, password)
        toast.success('Login realizado com sucesso')
      }
    } catch (err) {
      toast.error(`Erro ao cadastrar: ${err}`)
    }
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <strong className="text-center">Cadastre-se com seu Email</strong>
      <p className="mx-auto text-center text-xs text-zinc-500">
        Crie sua conta e comece a gerenciar seus produtos e pedidos.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold">Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Galettitos Silva" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
            Cadastrar
          </Button>
        </form>
      </Form>
    </div>
  )
}
