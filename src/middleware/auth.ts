import { NextRequest, NextResponse } from 'next/server'

export function auth(
  handler: (req: NextRequest) => Promise<Response> | Response
) {
  return async (req: NextRequest) => {
    const authHeader = req.headers.get('authorization')
    const tokenFromHeader = authHeader?.startsWith('Bearer ')
      ? authHeader.split(' ')[1]
      : null

    // const authToken = req.cookies.get('auth_token')?.value
    const authToken = tokenFromHeader || req.cookies.get('auth_token')?.value

    if (!authToken) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }
    return handler(req)
  }
}
