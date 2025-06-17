import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/db';
import Category from '../../../../models/category';

// GET a single category by ID
export async function GET(request, { params }) {
  await connectDB();
  try {
    const category = await Category.findById(params.id);
    if (!category) {
      return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PUT (update) a category by ID
export async function PUT(request, { params }) {
  await connectDB();
  try {
    const body = await request.json();
    const updatedCategory = await Category.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedCategory) {
      return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: updatedCategory });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// DELETE a category by ID
export async function DELETE(request, { params }) {
  await connectDB();
  try {
    const deletedCategory = await Category.findByIdAndDelete(params.id);
    if (!deletedCategory) {
      return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
