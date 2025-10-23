import { NextRequest, NextResponse } from 'next/server';

const JSON_SERVER_URL = 'http://localhost:3001/users';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
  }

  // Find user
  const res = await fetch(`${JSON_SERVER_URL}?email=${encodeURIComponent(email)}`);
  const users = await res.json();
  if (users.length === 0 || users[0].password !== password) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // For now, just return user info (no JWT/session yet)
  return NextResponse.json({ id: users[0].id, email: users[0].email });
}
