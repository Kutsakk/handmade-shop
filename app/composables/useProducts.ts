export interface Product {
  id: number
  name: string
  description: string
  price: string
  category: string
  image: string
  images: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: 'Χειροποίητο Κουτί',
    description: 'Χειροποίητο ξύλινο κουτί με λεπτομερή σκαλίσματα, ιδανικό για αποθήκευση κοσμημάτων και μικροαντικειμένων.',
    price: '120€',
    category: 'Hand Craft',
    image: 'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=400',
    images: [
      'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=800',
      'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=800&q=80',
      'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=800&q=60'
    ]
  },
  {
    id: 2,
    name: 'Ξύλινο Μπολ',
    description: 'Μοναδικό ξύλινο μπολ σκαλισμένο στο χέρι από ξύλο ελιάς. Κάθε κομμάτι είναι μοναδικό.',
    price: '240€',
    category: 'Wood Art',
    image: 'https://images.unsplash.com/photo-1635983495219-08e16e9e9d73?w=400',
    images: [
      'https://images.unsplash.com/photo-1635983495219-08e16e9e9d73?w=800',
      'https://images.unsplash.com/photo-1635983495219-08e16e9e9d73?w=800&q=80',
      'https://images.unsplash.com/photo-1635983495219-08e16e9e9d73?w=800&q=60'
    ]
  },
  {
    id: 3,
    name: 'Ξύλινο Σκάκι',
    description: 'Χειροποίητο σετ σκακιού από φυσικό ξύλο με λεπτομερή πιόνια. Ένα έργο τέχνης για τους λάτρεις του παιχνιδιού.',
    price: '288€',
    category: 'Wood Art',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400',
    images: [
      'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800',
      'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80',
      'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=60'
    ]
  },
  {
    id: 4,
    name: 'Χειροποίητο Φωτιστικό',
    description: 'Μοντέρνο φωτιστικό από φυσικό ξύλο και μέταλλο. Δημιουργεί ζεστή ατμόσφαιρα σε κάθε χώρο.',
    price: '456€',
    category: 'Wood Art',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=60'
    ]
  },
  {
    id: 5,
    name: 'Ξύλινο Μπαούλο',
    description: 'Παραδοσιακό ξύλινο μπαούλο κατασκευασμένο στο χέρι. Τέλειο για αποθήκευση ή ως διακοσμητικό.',
    price: '230€',
    category: 'Hand Craft',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=60'
    ]
  },
  {
    id: 6,
    name: 'Κερί Λουλούδι',
    description: 'Αρωματικό κερί σε σχήμα λουλουδιού, φτιαγμένο από φυσικό κερί σόγιας με αιθέρια έλαια.',
    price: '54€',
    category: 'Candle',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=60'
    ]
  },
  {
    id: 7,
    name: 'Ξύλινος Δίσκος',
    description: 'Κομψός ξύλινος δίσκος σερβιρίσματος, ιδανικός για καθημερινή χρήση ή ως διακοσμητικό.',
    price: '150€',
    category: 'Hand Craft',
    image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=400',
    images: [
      'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=800',
      'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=800&q=80',
      'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=800&q=60'
    ]
  },
  {
    id: 8,
    name: 'Ξύλινη Πιατέλα',
    description: 'Χειροποίητη πιατέλα από ξύλο ελιάς με μοναδικά νερά. Κάθε κομμάτι είναι ένα έργο τέχνης.',
    price: '240€',
    category: 'Wood Art',
    image: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=400',
    images: [
      'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800',
      'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800&q=80',
      'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800&q=60'
    ]
  },
  {
    id: 9,
    name: 'Ξύλινο Ρολόι',
    description: 'Μινιμαλιστικό ρολόι τοίχου από φυσικό ξύλο. Συνδυάζει τη φύση με τη σύγχρονη αισθητική.',
    price: '185€',
    category: 'Hand Craft',
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400',
    images: [
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=60'
    ]
  },
  {
    id: 10,
    name: 'Χειροποίητο Κερί',
    description: 'Κλασικό χειροποίητο κερί από φυσικό κερί μέλισσας. Αρωματίζει τον χώρο σας με φυσικό τρόπο.',
    price: '35€',
    category: 'Candle',
    image: 'https://images.unsplash.com/photo-1603905968510-e4a4e32dc70a?w=400',
    images: [
      'https://images.unsplash.com/photo-1603905968510-e4a4e32dc70a?w=800',
      'https://images.unsplash.com/photo-1603905968510-e4a4e32dc70a?w=800&q=80',
      'https://images.unsplash.com/photo-1603905968510-e4a4e32dc70a?w=800&q=60'
    ]
  },
  {
    id: 11,
    name: 'Ξύλινο Καλάθι',
    description: 'Πλεκτό ξύλινο καλάθι αποθήκευσης. Φυσικά υλικά και παραδοσιακή τεχνική πλέξης.',
    price: '95€',
    category: 'Wood Art',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=60'
    ]
  },
  {
    id: 12,
    name: 'Πήλινο Βάζο',
    description: 'Χειροποίητο πήλινο βάζο με μοναδικό σχεδιασμό. Τέλειο για λουλούδια ή ως αυτόνομο διακοσμητικό.',
    price: '78€',
    category: 'Ceramic Art',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400',
    images: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=60'
    ]
  },
  {
    id: 13,
    name: 'Χειροποίητο Σαπούνι',
    description: 'Φυσικό χειροποίητο σαπούνι με αιθέρια έλαια και βότανα. Ήπιο για όλους τους τύπους δέρματος.',
    price: '22€',
    category: 'Natural Craft',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400',
    images: [
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=60'
    ]
  },
  {
    id: 14,
    name: 'Ξύλινος Χάρτης',
    description: 'Διακοσμητικός ξύλινος χάρτης κομμένος με λέιζερ. Ένα μοναδικό κομμάτι τέχνης για τον τοίχο σας.',
    price: '320€',
    category: 'Wood Art',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400',
    images: [
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800',
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80',
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=60'
    ]
  },
  {
    id: 15,
    name: 'Πλεκτή Κουβέρτα',
    description: 'Ζεστή χειροποίητη πλεκτή κουβέρτα από φυσικό μαλλί. Ιδανική για τις κρύες μέρες του χειμώνα.',
    price: '145€',
    category: 'Textile Art',
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=400',
    images: [
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800',
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&q=80',
      'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&q=60'
    ]
  },
  {
    id: 16,
    name: 'Χειροποίητο Κόσμημα',
    description: 'Λεπτό χειροποίητο κόσμημα από ασήμι 925 με ημιπολύτιμους λίθους. Κομψότητα σε κάθε λεπτομέρεια.',
    price: '67€',
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=60'
    ]
  }
]

export function useProducts() {
  function getAll() {
    return products
  }

  function getById(id: number) {
    return products.find(p => p.id === id)
  }

  function getCategories() {
    return [...new Set(products.map(p => p.category))]
  }

  function getByCategory(category: string) {
    return products.filter(p => p.category === category)
  }

  function getRelated(productId: number, limit = 4) {
    const product = getById(productId)
    if (!product) return []
    return products
      .filter(p => p.id !== productId && p.category === product.category)
      .slice(0, limit)
  }

  return { getAll, getById, getCategories, getByCategory, getRelated }
}
