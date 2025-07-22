import { NextResponse } from 'next/server'

export type ErrorType = {
  message: string
  status: number
}

// Services
export const createError = {
  notFound: (message: string): ErrorType => {
    return {
      message,
      status: 404,
    }
  },

  badRequest: (message: string): ErrorType => {
    return {
      message,
      status: 400,
    }
  },

  conflict: (message: string): ErrorType => {
    return {
      message,
      status: 409,
    }
  },

  unauthorized: (message: string): ErrorType => {
    return {
      message,
      status: 401,
    }
  },

  internal: (message: string): ErrorType => {
    return {
      message,
      status: 500,
    }
  },
}

// Router
export const handleError = (error: any) => {
  if (error && typeof error === 'object' && 'status' in error) {
    return NextResponse.json({
      error: error.message,
      status: error.status,
    })
  }

  console.error(error)
  return NextResponse.json({
    message: 'Erro interno do servidor',
    status: 500,
  })
}
