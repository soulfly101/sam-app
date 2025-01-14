'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { InvoiceItem } from '@/types/invoice'

export default function CreateInvoicePage() {
  const router = useRouter()
  const [customerName, setCustomerName] = useState('')
  const [date, setDate] = useState('')
  const [items, setItems] = useState<InvoiceItem[]>([{ description: '', quantity: 0, price: 0 }])

  const handleAddItem = () => {
    setItems([...items, { description: '', quantity: 0, price: 0 }])
  }

  const handleItemChange = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], [field]: value }
    setItems(newItems)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      customerName,
      date,
      items
    })
    alert('Invoice created!')
    router.push('/invoices')
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Create Invoice</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="customerName">Customer Name</Label>
              <Input
                id="customerName"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            {items.map((item, index) => (
              <div key={index} className="space-y-2">
                <Input
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                  required
                />
                <Input
                  type="number"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                  required
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, 'price', parseFloat(e.target.value))}
                  required
                />
              </div>
            ))}
            <Button type="button" onClick={handleAddItem}>Add Item</Button>
            <Button type="submit">Create Invoice</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}