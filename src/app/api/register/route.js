import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/db';
import User from '@/models/user';

export async function POST(request) {
  try {
    await dbConnect();
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ success: false, error: 'Please provide all required fields.' }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, error: 'User with this email already exists.' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ success: true, data: { name: user.name, email: user.email } }, { status: 201 });

  } catch (error) {
    if (error.name === 'ValidationError') {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    console.error('Registration Error:', error);
    return NextResponse.json({ success: false, error: 'Server error during registration.' }, { status: 500 });
  }
}
