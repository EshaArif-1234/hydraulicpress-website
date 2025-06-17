import { redirect } from 'next/navigation';

export default function AdminDashboard() {
  // Redirect to the products management page by default
  redirect('/admin/products');
}
