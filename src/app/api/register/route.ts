import { NextResponse } from 'next/server'
import { userCreateInputSchema } from '../../../lib/schemas/userSchema'
import { createUserService } from '../../../services/userService'
import { handleError } from '../../../lib/utils/errorHandler'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsedBody = userCreateInputSchema.safeParse(body)

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: parsedBody.error.message },
        { status: 400 }
      )
    }

    const user = await createUserService(parsedBody.data)
    return NextResponse.json({ user })
  } catch (error: any) {
    return handleError({
      message: error.message,
      status: error.status,
    })
  }
}
