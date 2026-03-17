import type { Product } from './useProducts'

interface CartItem extends Product {
  quantity: number
}

export function useCart() {
  const items = useState<CartItem[]>('cart', () => [])

  function add(product: Product) {
    const existing = items.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  function remove(productId: number) {
    items.value = items.value.filter(item => item.id !== productId)
  }

  function updateQuantity(productId: number, quantity: number) {
    const item = items.value.find(i => i.id === productId)
    if (item) {
      if (quantity <= 0) {
        remove(productId)
      } else {
        item.quantity = quantity
      }
    }
  }

  function clear() {
    items.value = []
  }

  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('€', ''))
      return sum + price * item.quantity
    }, 0)
  )

  return { items, add, remove, updateQuantity, clear, totalItems, totalPrice }
}
