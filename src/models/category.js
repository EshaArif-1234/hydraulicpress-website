import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Category name is required.'],
    unique: true,
    trim: true,
  },
}, { timestamps: true });

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
