// Base product type returned from backend
export interface Product {
    id: string
    name: string
    description?: string
    price: string        // comes as string from PostgreSQL NUMERIC
    stock: number
    image_url?: string
    is_active?: boolean
    created_at?: string
    updated_at?: string
  }
  