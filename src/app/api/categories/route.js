import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Category from '../../../models/category';

// GET all categories
export async function GET() {
  await connectDB();
  try {
    const categories = await Category.find({}).sort({ name: 1 });
    return NextResponse.json({ success: true, data: categories });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST a new category
export async function POST(request) {
  await connectDB();
  try {
    const body = await request.json();
    const newCategory = new Category(body);
    await newCategory.save();
    return NextResponse.json({ success: true, data: newCategory }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
