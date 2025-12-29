import { useState } from 'react'
import { useCreateProduct } from './hooks'

const AdminAddProductPage = () => {
  const createProduct = useCreateProduct()

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image_url: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    createProduct.mutate({
      name: form.name,
      description: form.description,
      price: Number(form.price),
      stock: Number(form.stock),
      image_url: form.image_url
    })
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="price"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          name="stock"
          placeholder="Stock"
          type="number"
          value={form.stock}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          name="image_url"
          placeholder="Image URL"
          value={form.image_url}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2"
          disabled={createProduct.isPending}
        >
          {createProduct.isPending ? 'Saving...' : 'Add Product'}
        </button>
      </form>
    </div>
  )
}

export default AdminAddProductPage
