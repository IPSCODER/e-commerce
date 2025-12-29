import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAdminProduct, useUpdateProduct } from './hooks'

const AdminEditProductPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data, isLoading } = useAdminProduct(id!)
  const updateProduct = useUpdateProduct()

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image_url: ''
  })

  // Prefill form when data loads
  useEffect(() => {
    if (data) {
      setForm({
        name: data.name,
        description: data.description || '',
        price: data.price,
        stock: String(data.stock),
        image_url: data.image_url || ''
      })
    }
  }, [data])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    updateProduct.mutate(
      {
        id: id!,
        payload: {
          name: form.name,
          description: form.description,
          price: Number(form.price),
          stock: Number(form.stock),
          image_url: form.image_url
        }
      },
      {
        onSuccess: () => {
          navigate('/admin/products')
        }
      }
    )
  }

  if (isLoading) return <p>Loading product...</p>

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Edit Product</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          name="stock"
          type="number"
          value={form.stock}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          name="image_url"
          value={form.image_url}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2"
          disabled={updateProduct.isPending}
        >
          {updateProduct.isPending ? 'Updating...' : 'Update Product'}
        </button>
      </form>
    </div>
  )
}

export default AdminEditProductPage
