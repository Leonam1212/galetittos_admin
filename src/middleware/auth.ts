import { NextRequest, NextResponse } from 'next/server'

export function auth(
  handler: (req: NextRequest) => Promise<Response> | Response
) {
  return async (req: NextRequest) => {
    const authToken = req.cookies.get('auth_token')?.value
    if (!authToken) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }
    return handler(req)
  }
}
