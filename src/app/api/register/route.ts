import { NextRequest, NextResponse } from 'next/server';

const JSON_SERVER_URL = 'http://localhost:3001/users';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
  }

  // Check if user already exists
  const existing = await fetch(`${JSON_SERVER_URL}?email=${encodeURIComponent(email)}`);
  const users = await existing.json();
  if (users.length > 0) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 });
  }

  // Create user
  const create = await fetch(JSON_SERVER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const newUser = await create.json();
  return NextResponse.json({ id: newUser.id, email: newUser.email });
}
